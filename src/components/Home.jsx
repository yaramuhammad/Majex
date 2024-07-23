import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/login" >Login </Link>
            <Link to="/register">Sign up</Link>
        </div>

    );
};

export default Home;
