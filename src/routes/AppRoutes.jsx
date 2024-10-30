import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Contacts from "../pages/Contats";
import About from "../pages/About";
import Service from "../pages/Service";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
        </Routes>
    )
}