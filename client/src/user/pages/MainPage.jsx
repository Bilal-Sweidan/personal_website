// import components
import { MainHeader } from "../components/layout/header"
import { Outlet } from "react-router-dom"

const MainPage = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default MainPage;