import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/github')
            .then(async res => {
                if (!res.ok) {
                    const data = await res.json().catch(() => ({})); // Catch if the body isn't valid JSON
                    console.error('API response error:', data);
                    throw new Error(data.error || 'Failed to fetch data from API.');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="d-flex flex-row justify-content-start align-items-center mt-5">
                <p className="fs-3 text-secondary">
                    <span className="typewriter">
                        Hello, I am <strong style={{ color: theme === 'dark' ? 'white' : 'black' }}>Pratik Rauniyar</strong>.
                    </span>
                </p>
            </div>
            <p>
                a programmer and senior computer science student at the University of Idaho, Idaho.
            </p>

            {loading && <div className="text-center mt-5"><Spinner animation="border" /></div>}
            {error && <div className="alert alert-danger mt-5">{error}</div>}
            {data && (
                <div className="dashboard-container mt-5">
                    {data.user && (
                        <Card className={`mb-4 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-light'}`}>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col xs={12} md={3} className="text-center">
                                        <a href={data.user.html_url} target="_blank" rel="noopener noreferrer">
                                            <img src={data.user.avatar_url} alt="GitHub Avatar" className="avatar rounded-circle" />
                                        </a>
                                    </Col>
                                    <Col xs={12} md={9}>
                                        <h2 className={theme === 'dark' ? 'text-light' : 'text-dark'}>{data.user.name}</h2>
                                        <p className={theme === 'dark' ? 'text-secondary' : 'text-muted'}>@{data.user.login}</p>
                                        <p className={theme === 'dark' ? 'text-light' : 'text-dark'}>{data.user.bio}</p>
                                        <p className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                                            <strong>{data.user.followers}</strong> Followers · <strong>{data.user.following}</strong> Following · <strong>{data.user.public_repos}</strong> Public Repos
                                        </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )}

                    <h3 className={theme === 'dark' ? 'text-light' : 'text-dark'}>Top 5 Active Repositories</h3>
                    <Row>
                        {data.repos && data.repos
                            .sort((a, b) => new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0)) // Sort by most recently active (pushed_at)
                            .slice(0, 5) // Take only top 5
                            .map(repo => (
                            <Col key={repo.name} md={6} className="mb-3">
                                <Card className={`h-100 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-light'}`}>
                                    <Card.Body>
                                        <Card.Title>
                                            <a 
                                                href={repo.html_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={theme === 'dark' ? 'text-info' : 'text-primary'}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                {repo.name}
                                            </a>
                                        </Card.Title>
                                        <Card.Text className={theme === 'dark' ? 'text-light' : 'text-dark'}>
                                            {repo.description || 'No description available'}
                                        </Card.Text>
                                        <div className={`d-flex justify-content-between ${theme === 'dark' ? 'text-secondary' : 'text-muted'}`}>
                                            <span>
                                                ⭐ {repo.stargazers_count}
                                                <span className="ms-3">🍴 {repo.forks_count}</span>
                                            </span>
                                            <span>{repo.language || 'N/A'}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </>
    )
}

export default Home;
