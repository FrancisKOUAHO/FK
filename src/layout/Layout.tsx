import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </>

    )
}

export default Layout