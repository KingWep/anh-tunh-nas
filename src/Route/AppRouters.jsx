import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Page/Home"
import About from "../Page/About"
import NotFound from "../404/NotFound"
import Shop from "../Page/Shop"
import Contact from "../Page/Contact"
import Careers from "../Page/Careers"
import Blog from "../Page/Blog"
import FAQ from "../Page/FAQ"
import Nav from "../component/Nav"
export default function AppRouters(){
    return(
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/careers" element={<Careers/>} />
                    <Route path="/faq" element={<FAQ/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/NotFound" element={<NotFound/>} />
                </Routes>
        </>
    )
}