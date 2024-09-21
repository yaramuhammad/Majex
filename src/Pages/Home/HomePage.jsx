import Search from '../../Components/Home/Search';
import Navbar from './../../Components/Home/Navbar'
import Footer from './../../Components/Home/Footer'
import CustomerService from './../../Components/Home/CustomerService'
import Packages from './../../Components/Home/Packages'
import Services from './../../Components/Home/Services'
import Stats from './../../Components/Home/Stats'


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Search/>
            <Services/>
            <Packages/>
            <Stats/>
            <CustomerService/>
            <Footer />
        </div>

    );
};

export default HomePage;
