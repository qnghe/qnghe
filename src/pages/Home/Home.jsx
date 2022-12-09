import { Link } from 'react-router-dom';
import './Home.scss';

const Home = function() {
    const toMy = () => {

    };

    return (
        <div className='home'>
            <h4>home1</h4>
            <nav>
                <Link to="/list">to list</Link>
                <hr />
                <button onClick={toMy()}>to my</button>
                <button>to my favorites</button>
                <hr />
            </nav>
        </div>
    );
}
export default Home;