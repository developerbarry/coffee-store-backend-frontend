import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";

const Root = () => {
    return (
        <main>
            <Header />
            {/* <Home /> */}
            <div>
                <Outlet />
            </div>
        </main>
    );
};

export default Root;