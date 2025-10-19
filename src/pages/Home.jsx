import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/github')
            .then(async res => {
                if (!res.ok) {
                    // Try production URL if local fails
                    const prodRes = await fetch('https://new-portfolio-prateekrauniyar345s-projects.vercel.app/api/github');
                    if (!prodRes.ok) {
                        throw new Error('Failed to fetch GitHub data');
                    }
                    return prodRes.json();
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Create contribution graph data from actual GitHub data (including private repos)
    const contributionData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Total Contributions (Public + Private)',
                data: data?.contributionData || [25, 35, 40, 30, 45, 55, 60, 50, 65, 70, 75, 80],
                borderColor: theme === 'dark' ? 'white' : 'black',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: theme === 'dark' ? 'white' : 'black',
                }
            },
            title: {
                display: true,
                text: 'Monthly Contribution Trend',
                color: theme === 'dark' ? 'white' : 'black',
            },
        },
        scales: {
            y: {
                ticks: {
                    color: theme === 'dark' ? 'white' : 'black',
                },
                grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }
            },
            x: {
                ticks: {
                    color: theme === 'dark' ? 'white' : 'black',
                },
                grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                }
            }
        },
    };

    return (
        <div className="container my-5" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
            <div className="typewriter mb-4">
                <h1>Hi, I'm Pratik Rauniyar</h1>
            </div>
            <p className="mb-5">I'm a full-stack developer passionate about creating efficient and scalable applications.</p>

            {loading && (
                <div className="text-center">
                    <Spinner animation="border" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                    <p className="mt-2">Loading GitHub data...</p>
                </div>
            )}

            {error && (
                <div 
                    className="border border-danger rounded rounded-4 p-4 mb-4" 
                    style={{ 
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'black' : 'white'
                    }}
                >
                    <p>Error loading GitHub data: {error}</p>
                </div>
            )}

            {data && (
                <>
                    {/* GitHub Profile Section */}
                    <div className="d-flex flex-column mt-4 mb-4">
                        <h3>GitHub Dashboard</h3>
                        <p>Latest activity and repository insights</p>
                    </div>
                    
                    {data.user && (
                        <div 
                            style={{ 
                                color: theme === 'dark' ? 'white' : 'black',
                                backgroundColor: theme === 'dark' ? 'black' : 'white'
                            }}
                            className="border border-secondary rounded rounded-4 p-4 mb-4 d-flex align-items-center gap-3 hoverEffect"
                        >
                            <a href={data.user.html_url} target="_blank" rel="noopener noreferrer">
                                <img src={data.user.avatar_url} alt="GitHub Avatar" className="rounded-circle" style={{ width: '80px', height: '80px' }} />
                            </a>
                            <div>
                                <h4 className="mb-1">{data.user.name}</h4>
                                <p className="text-secondary mb-2">@{data.user.login}</p>
                                <p className="mb-2">{data.user.bio}</p>
                                <div className="d-flex gap-3 small">
                                    <span><strong>{data.user.followers}</strong> Followers</span>
                                    <span><strong>{data.user.following}</strong> Following</span>
                                    <span><strong>{data.totalStats?.totalRepos || data.user.public_repos}</strong> Total Repos</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Comprehensive GitHub Statistics */}
                    {data.totalStats && (
                        <div className="mb-5">
                            <div className="d-flex flex-column mt-4 mb-4">
                                <h3>Complete GitHub Statistics</h3>
                                <p>Total contributions across all repositories (public + private + organizations)</p>
                            </div>
                            
                            <div className="row g-3 mb-4">
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalCommits}</h4>
                                        <p className="text-secondary small mb-0">Total Commits</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalPRs}</h4>
                                        <p className="text-secondary small mb-0">Total Pull Requests</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalRepos}</h4>
                                        <p className="text-secondary small mb-0">Total Repositories</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalStars}</h4>
                                        <p className="text-secondary small mb-0">Total Stars</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalPublicRepos}</h4>
                                        <p className="text-secondary small mb-0">Public Repos</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalPrivateRepos}</h4>
                                        <p className="text-secondary small mb-0">Private Repos</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.totalForks}</h4>
                                        <p className="text-secondary small mb-0">Total Forks</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h4 className="mb-1">{data.totalStats.languages?.length || 0}</h4>
                                        <p className="text-secondary small mb-0">Languages Used</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* GitHub Badges Section */}
                    <div className="mb-5">
                        <div className="d-flex flex-column mt-4 mb-4">
                            <h3>GitHub Achievements</h3>
                            <p>Programming languages, stats, and achievements</p>
                        </div>
                        
                        {data.user && (
                            <div className="row g-3">
                                {/* GitHub Stats Badge */}
                                <div className="col-12 col-md-6">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 h-100"
                                    >
                                        <h6 className="text-secondary mb-3">GitHub Stats</h6>
                                        <img 
                                            src={`https://github-readme-stats.vercel.app/api?username=${data.user.login}&show_icons=true&theme=${theme === 'dark' ? 'dark' : 'light'}&hide_border=true&bg_color=${theme === 'dark' ? '000000' : 'ffffff'}&text_color=${theme === 'dark' ? 'ffffff' : '000000'}&icon_color=${theme === 'dark' ? 'ffffff' : '000000'}`}
                                            alt="GitHub Stats"
                                            style={{ width: '100%', maxWidth: '400px' }}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                {/* Top Languages Badge */}
                                <div className="col-12 col-md-6">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 h-100"
                                    >
                                        <h6 className="text-secondary mb-3">Most Used Languages</h6>
                                        <img 
                                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.user.login}&layout=compact&theme=${theme === 'dark' ? 'dark' : 'light'}&hide_border=true&bg_color=${theme === 'dark' ? '000000' : 'ffffff'}&text_color=${theme === 'dark' ? 'ffffff' : '000000'}`}
                                            alt="Top Languages"
                                            style={{ width: '100%', maxWidth: '400px' }}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                {/* GitHub Streak */}
                                <div className="col-12">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h6 className="text-secondary mb-3">GitHub Streak</h6>
                                        <img 
                                            src={`https://streak-stats.demolab.com/?user=${data.user.login}&theme=${theme === 'dark' ? 'dark' : 'light'}&hide_border=true&background=${theme === 'dark' ? '000000' : 'ffffff'}&stroke=${theme === 'dark' ? 'ffffff' : '000000'}&ring=${theme === 'dark' ? 'ffffff' : '000000'}&fire=${theme === 'dark' ? 'ffffff' : '000000'}&currStreakLabel=${theme === 'dark' ? 'ffffff' : '000000'}&sideNums=${theme === 'dark' ? 'ffffff' : '000000'}&currStreakNum=${theme === 'dark' ? 'ffffff' : '000000'}&sideLabels=${theme === 'dark' ? 'ffffff' : '000000'}&dates=${theme === 'dark' ? 'ffffff' : '000000'}`}
                                            alt="GitHub Streak"
                                            style={{ width: '100%', maxWidth: '600px' }}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                {/* Trophy Badge */}
                                <div className="col-12">
                                    <div 
                                        style={{ 
                                            color: theme === 'dark' ? 'white' : 'black',
                                            backgroundColor: theme === 'dark' ? 'black' : 'white'
                                        }}
                                        className="border border-secondary rounded rounded-4 p-3 text-center"
                                    >
                                        <h6 className="text-secondary mb-3">GitHub Trophies</h6>
                                        <img 
                                            src={`https://github-profile-trophy.vercel.app/?username=${data.user.login}&theme=${theme === 'dark' ? 'onedark' : 'flat'}&no-frame=true&no-bg=true&margin-w=4&column=4`}
                                            alt="GitHub Trophies"
                                            style={{ width: '100%', maxWidth: '800px' }}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contribution Graph */}
                    <div className="mb-5">
                        <div className="d-flex flex-column mt-4 mb-4">
                            <h3>Contribution Trend (All Repositories)</h3>
                            <p>Monthly commit activity including public, private, and organization repositories</p>
                        </div>
                        <div 
                            style={{ 
                                color: theme === 'dark' ? 'white' : 'black',
                                backgroundColor: theme === 'dark' ? 'black' : 'white',
                                height: '400px'
                            }}
                            className="border border-secondary rounded rounded-4 p-4"
                        >
                            <Line data={contributionData} options={chartOptions} />
                        </div>
                    </div>

                    {/* Top Active Repositories */}
                    <div className="d-flex flex-column mt-4 mb-4">
                        <h3>Top Active Repositories</h3>
                        <p>Repositories with highest commits and recent activity</p>
                    </div>

                    <div className="row g-4 mt-2">
                        {(data.topRepos || data.repos)?.slice(0, 6).map((repo, idx) => (
                            <div key={idx} className="col-12 col-md-6 hoverEffect">
                                <div 
                                    style={{ 
                                        color: theme === 'dark' ? 'white' : 'black',
                                        backgroundColor: theme === 'dark' ? 'black' : 'white'
                                    }}
                                    className="border border-secondary rounded rounded-4 p-4 h-100"
                                >
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <h5 className="mb-1">
                                            <a 
                                                href={repo.html_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-decoration-none"
                                                style={{ color: theme === 'dark' ? 'white' : 'black' }}
                                            >
                                                {repo.name}
                                            </a>
                                        </h5>
                                        <FontAwesomeIcon icon={faGithub} className="text-secondary" />
                                    </div>

                                    {/* Repository Stats */}
                                    <div className="mb-3">
                                        <div className="d-flex flex-wrap gap-2 mb-2">
                                            <span className="text-secondary small">⭐ {repo.stargazers_count} Stars</span>
                                            <span className="text-secondary small">🍴 {repo.forks_count} Forks</span>
                                            <span className="text-secondary small">👀 {repo.watchers !== undefined ? repo.watchers : repo.watchers_count || 0} Watchers</span>
                                        </div>
                                        {repo.language && (
                                            <div className="mb-2">
                                                <span className="badge bg-secondary text-white">{repo.language}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Repository Details */}
                                    <div className="border-top border-secondary pt-3">
                                        <h6 className="mb-2 text-secondary">Repository Details</h6>
                                        <div className="small">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="text-secondary">My Commits:</span>
                                                <span className="text-secondary">{repo.userCommitCount || 'N/A'}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="text-secondary">Total PRs:</span>
                                                <span className="text-secondary">{repo.totalPRs || 0}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="text-secondary">Repository Type:</span>
                                                <span className="text-secondary">{repo.private ? 'Private' : 'Public'}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span className="text-secondary">Last Updated:</span>
                                                <span className="text-secondary">
                                                    {repo.lastCommit 
                                                        ? new Date(repo.lastCommit).toLocaleDateString()
                                                        : new Date(repo.pushed_at).toLocaleDateString()
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;