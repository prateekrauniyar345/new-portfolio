// api/github.js
export default async function handler(req, res) {
  console.log('--- GitHub API Function Start ---');

  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  console.log('Attempting to read environment variables...');
  console.log(`Username: ${username ? 'Loaded' : 'NOT LOADED'}`);
  console.log(`Token: ${token ? 'Loaded' : 'NOT LOADED'}`);

  if (!username || !token) {
    console.error('GitHub username or token not configured.');
    return res.status(500).json({ error: 'GitHub username or token not configured.' });
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
  };

  try {
    console.log('Fetching data from GitHub API...');
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, { headers }),
    ]);

    console.log(`GitHub User API Response Status: ${userResponse.status}`);
    console.log(`GitHub Repos API Response Status: ${reposResponse.status}`);

    if (!userResponse.ok || !reposResponse.ok) {
      const userError = !userResponse.ok ? await userResponse.text() : null;
      const repoError = !reposResponse.ok ? await reposResponse.text() : null;
      console.error('Failed to fetch data from GitHub API.', { userError, repoError });
      return res.status(500).json({ error: 'Failed to fetch data from GitHub API.', details: { userError, repoError } });
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    console.log('Successfully fetched and processed data.');
    console.log('--- GitHub API Function End ---');
    
    res.status(200).json({
      user: userData,
      repos: reposData,
    });
  } catch (error) {
    console.error('An unexpected error occurred in the function:', error);
    console.log('--- GitHub API Function End (with error) ---');
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}
