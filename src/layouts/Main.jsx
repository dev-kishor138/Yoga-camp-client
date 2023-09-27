import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
import TopBar from "../pages/Shared/TopBar";


const Main = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;