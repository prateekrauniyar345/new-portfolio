
// // api/github.js
// export default async function handler(req, res) {
//   console.log('--- GitHub API Function Start ---');

//   const username = process.env.VITE_GITHUB_USERNAME;
//   const token = process.env.VITE_GITHUB_TOKEN;

//   console.log('Attempting to read environment variables...');
//   // Be careful with logging the token, we will remove this later.
//   console.log(`Username: ${username ? 'Loaded' : 'NOT LOADED'}`);
//   console.log(`Token: ${token ? 'Loaded' : 'NOT LOADED'}`);


//   if (!username || !token) {
//     console.error('GitHub username or token not configured.');
//     return res.status(500).json({ error: 'GitHub username or token not configured.' });
//   }

//   const headers = {
//     'Authorization': `token ${token}`,
//     'Accept': 'application/vnd.github.v3+json',
//   };

//   try {
//     console.log('Fetching data from GitHub API...');
//     const [userResponse, reposResponse] = await Promise.all([
//       fetch(`https://api.github.com/users/${username}`, { headers }),
//       fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, { headers }),
//     ]);

//     console.log(`GitHub User API Response Status: ${userResponse.status}`);
//     console.log(`GitHub Repos API Response Status: ${reposResponse.status}`);

//     if (!userResponse.ok || !reposResponse.ok) {
//       const userError = !userResponse.ok ? await userResponse.text() : null;
//       const repoError = !reposResponse.ok ? await reposResponse.text() : null;
//       console.error('Failed to fetch data from GitHub API.', { userError, repoError });
//       return res.status(500).json({ error: 'Failed to fetch data from GitHub API.', details: { userError, repoError } });
//     }

//     const userData = await userResponse.json();
//     const reposData = await reposResponse.json();

//     console.log('Successfully fetched and processed data.');
//     console.log('--- GitHub API Function End ---');
//     res.status(200).json({
//       user: userData,
//       repos: reposData,
//     });
//   } catch (error) {
//     console.error('An unexpected error occurred in the function:', error);
//     console.log('--- GitHub API Function End (with error) ---');
//     res.status(500).json({ error: 'An error occurred while fetching data.' });
//   }
// }



// api/github.js
// ---------------------------------------------------------------
// 1️⃣  Import fetch if you run on an old Node version.
//     Vercel/Netlify Edge/Functions already provide a global fetch.
// ---------------------------------------------------------------
/* Uncomment only if your runtime lacks native fetch:
import fetch from 'node-fetch';
*/

const USERNAME = process.env.GITHUB_USERNAME; // <-- set in your hosting UI
const TOKEN    = process.env.GITHUB_TOKEN;    // <-- never expose to the browser

console.log("github user name is : ", USERNAME);
console.log("github token is : ", TOKEN);
  
/**
 * Helper: fetch JSON from a URL with GitHub auth.
 */
async function ghFetch(url) {
  console.log("Fetching URL: ", url);
  // console.log("Using Token: ", TOKEN);
  // console.log("Using Username: ", USERNAME);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!res.ok) {
    const txt = await res.text(); // capture error body for debugging (not sent to client)
    throw new Error(`GitHub request failed (${res.status}): ${txt}`);
  }
  return res.json();
}

/**
 * Main handler – works for Vercel, Next.js, and Netlify.
 * Adjust the export at the bottom for your host.
 */
async function handler(req, res) {
  console.log('--- GitHub API Function start ---');

  // -----------------------------------------------------------------
  // 2️⃣  Validate that env vars are present (this will fail fast in dev)
  // -----------------------------------------------------------------
  if (!USERNAME || !TOKEN) {
    console.error('❌ Missing GITHUB_USERNAME or GITHUB_TOKEN env vars');
    return res
      .status(500)
      .json({ error: 'Server mis‑configuration – contact the site owner.' });
  }

  // -----------------------------------------------------------------
  // 3️⃣  Optional: read a limit from the querystring (defaults to 10)
  // -----------------------------------------------------------------
  const repoLimit = Number(req.query.limit) || 10;

  try {
    // --------------------------------------------------------------
    // 4️⃣  Parallel fetches – user profile + recent repos
    // --------------------------------------------------------------
    const [userData, reposData] = await Promise.all([
      ghFetch(`https://api.github.com/users/${USERNAME}`),
      ghFetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=${repoLimit}`
      ),
    ]);

    // --------------------------------------------------------------
    // 5️⃣  Short‑term CDN caching (5 min) – protects the GitHub rate limit
    // --------------------------------------------------------------
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');

    // --------------------------------------------------------------
    // 6️⃣  Respond with a compact payload (you can trim fields if you wish)
    // --------------------------------------------------------------
    res.status(200).json({
      user: {
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        total_contributions: userData.followers, // placeholder – you’d need the GraphQL API for true contributions
      },
      repos: reposData.map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at,
      })),
    });
  } catch (err) {
    // --------------------------------------------------------------
    // 7️⃣  Generic error handling – never leak the raw token or GitHub error
    // --------------------------------------------------------------
    console.error('❌ GitHub fetch error:', err);
    res
      .status(500)
      .json({ error: 'Failed to retrieve data from GitHub. Please try again later.' });
  }

  console.log('--- GitHub API Function end ---');
}

/* -----------------------------------------------------------------
   Export style – pick ONE depending on your host:
   • Vercel (or Next.js API routes):   export default handler;
   • Netlify Functions:               exports.handler = handler;
   • Cloudflare Pages Workers:        export default { fetch: handler };
   ----------------------------------------------------------------- */
// Vercel / Next.js
export default handler;

// Netlify (uncomment if you deploy to Netlify)
// export { handler };