import './Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <div className="home-content">
                <h1>Welcome</h1>
                <p>Selected the button start for beginning the questionnaire</p>
                <Link to="/Questions" className="Link">
                    <button>start</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;