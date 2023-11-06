import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1480px] mx-auto shadow-2xl p-3 rounded-2xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;