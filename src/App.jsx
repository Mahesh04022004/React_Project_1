
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss"
import "./styles/header.scss"
import Home from "./components/Home";
import "./styles/home.scss"
import Footer from "./components/Footer";
import "./styles/footer.scss"
import Contact from "./components/Contact.jsx"
import "./styles/contact.scss"
import Services from "./components/Services.jsx"
import "./styles/mediaquery.scss"
function App() {
    return <Router>

        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
        </Routes>
        <Footer/>
    </Router>
    
}

export default App;
