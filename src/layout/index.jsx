import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/footer/footer"

const Masterpage = ()=>{
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Masterpage