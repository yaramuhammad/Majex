import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Shipment from './components/Shipment/Shipment';
import Warehouse from './components/Warehouse/Warehouse';
import AddRequest from './components/Request/AddRequest';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './i18n';
import CurrentRequests from './components/Request/Request';
import RequestsHistory from './components/Request/RequestsHistory';
import Layout from './components/Layout/Layout';
import MultipleRequest from './components/Request/MultipleRequest';

function App() {
    return (<Router basename="/Majex">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Layout />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/request" element={<CurrentRequests />} />
                <Route path="/request/history" element={<RequestsHistory />} />
                <Route path="/add-request" element={<AddRequest />} />
                <Route path="/multiple-request" element={<MultipleRequest />} />
                <Route path="/shipment" element={<Shipment />} />
                <Route path="/warehouse" element={<Warehouse />} />
            </Route>
        </Routes>
    </Router>
    );
}

export default App;