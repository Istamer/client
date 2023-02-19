import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import NoPage from "./pages/noPage/NoPage";

const appRoutes = {
    login: {
        path: "/",
        element: <Login />,
    },
    registration: {
        path: "/registration",
        element: <Registration />,
    },
    home: {
        path: "/",
        element: <Home />
    },
    noPage: {
        path: "*",
        element: <NoPage/>
    }
}

export default appRoutes;
