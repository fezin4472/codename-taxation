import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOMEPAGE from "./pages/HomePage/HomePage";
import USERREGISTERPAGE from "./pages/UserRegisterPage/UserRegisterPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <HOMEPAGE />,
    },
    {
        path: "/register",
        element: <USERREGISTERPAGE />,
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;