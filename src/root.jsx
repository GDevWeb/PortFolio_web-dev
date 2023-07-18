import { Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import PortFolio from './components/PortFolio/PortFolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';


const Root = () => {
    return (

        <Router>

            <Routes> 

            <Route path="/" element={<Layout><Home/></Layout>}></Route>
            <Route path="/about" element={<Layout><Home/></Layout>}></Route>
            <Route path="/skills" element={<Layout><Skills/></Layout>}></Route>
            <Route path="/portfolio" element={<Layout><PortFolio/></Layout>}></Route>
            <Route path="/contact" element={<Layout><Contact/></Layout>}></Route>
            <Route path="*" element={<Layout><NotFound/></Layout>}></Route>

            </Routes>



        </Router>

    )
}

export default Root;