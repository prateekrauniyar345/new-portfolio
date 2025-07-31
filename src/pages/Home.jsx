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

                {/* temporary div to show the animation of web page under construction */}
                <div 
                    className='d-flex justify-content-center align-items-center mt-5' 
                    style={{ width: '100%', height: '120px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    <video src="/webpage_under_construction.mp4" autoPlay loop muted style={{ height: '200px',  marginTop:"200px"}}></video>
                </div>
            </>
    )
}

export default Home;
