import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';


const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); 
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
            </>
    )
}

export default Home;
