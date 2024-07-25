import Navbar from "./Navbar";
import Search from "./Search";
import Services from "./Services";
import Packages from "./Packages";
import Stats from "./Stats";
import Footer from "./Footer";
import CustomerService from "./CustomerService";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Services />
            <Packages />
            <Stats />
            <CustomerService/>
            <Footer />
        </div>

    );
};

export default Home;
