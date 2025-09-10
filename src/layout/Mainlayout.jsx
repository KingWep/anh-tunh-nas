import { ImOpt } from "react-icons/im";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AppRouters from "../Route/AppRouters";
export default function Mainlayout(){
    return(
        <>
         <Nav/>
            <AppRouters/>
         <Footer/>
        </>
    )
}