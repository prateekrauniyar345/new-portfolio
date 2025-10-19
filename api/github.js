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
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, { headers }),
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

    // Get additional data for top 5 most active repos (sort by pushed_at to get most recently active)
    const topRepos = reposData
      .filter(repo => !repo.fork) // Exclude forked repositories
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 8); // Get 8 to have backup in case some fail

    // Fetch commits, issues, and PRs for top repos
    const repoDetails = await Promise.all(
      topRepos.map(async (repo) => {
        try {
          const [commitsResponse, issuesResponse, prsResponse, allPRsResponse] = await Promise.all([
            fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`, { headers }),
            fetch(`https://api.github.com/repos/${username}/${repo.name}/issues?state=open&per_page=100`, { headers }),
            fetch(`https://api.github.com/repos/${username}/${repo.name}/pulls?state=open&per_page=100`, { headers }),
            fetch(`https://api.github.com/repos/${username}/${repo.name}/pulls?state=all&per_page=100`, { headers }),
          ]);

          const commits = commitsResponse.ok ? await commitsResponse.json() : [];
          const issues = issuesResponse.ok ? await issuesResponse.json() : [];
          const prs = prsResponse.ok ? await prsResponse.json() : [];
          const allPRs = allPRsResponse.ok ? await allPRsResponse.json() : [];

          // Get total commit count from the repository object
          const totalCommits = repo.size ? Math.floor(repo.size / 10) : 'N/A'; // Rough estimate

          // Filter out PRs from issues (GitHub API includes PRs in issues)
          const actualIssues = issues.filter(issue => !issue.pull_request);

          return {
            ...repo,
            lastCommit: commits[0]?.commit?.committer?.date || null,
            openIssues: actualIssues.length,
            openPRs: prs.length,
            totalPRs: allPRs.length,
            totalCommits: totalCommits,
            watchers: repo.watchers_count
          };
        } catch (error) {
          console.error(`Error fetching details for repo ${repo.name}:`, error);
          return {
            ...repo,
            lastCommit: null,
            openIssues: 0,
            openPRs: 0,
            totalPRs: 0,
            totalCommits: 'N/A',
            watchers: repo.watchers_count || 0
          };
        }
      })
    );

    console.log('Successfully fetched and processed data.');
    console.log('--- GitHub API Function End ---');
    
    res.status(200).json({
      user: userData,
      repos: reposData,
      topRepos: repoDetails,
    });
  } catch (error) {
    console.error('An unexpected error occurred in the function:', error);
    console.log('--- GitHub API Function End (with error) ---');
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}
