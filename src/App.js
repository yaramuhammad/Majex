import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Request from './components/Request/Request';
import Shipment from './components/Shipment/Shipment';
import Warehouse from './components/Warehouse/Warehouse';
import AddRequest from './components/Request/AddRequest';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './i18n';

function App() {
    return (<Router basename="/Majex">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/request" element={<Request />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addrequest" element={<AddRequest />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/warehouse" element={<Warehouse />} />
        </Routes>
    </Router>
    );
}

export default App;