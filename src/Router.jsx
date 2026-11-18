import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOMEPAGE from "./pages/HomePage/HomePage";
import USERREGISTERPAGE from "./pages/UserRegisterPage/UserRegisterPage";
import USERLISTPAGE from "./pages/UserListPage/UserListPage";
import VEHCILEREGISTER from "./pages/VehicleRegister/VehicleRegister";
import VEHICLELISTPAGE from "./pages/VehicleListPage/VehicleListPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <HOMEPAGE />,
    },
    {
        path: "/register-u",
        element: <USERREGISTERPAGE />,
    },
    {
        path: "/register-v",
        element: <VEHCILEREGISTER />,
    },
    {
        path: "/list-u",
        element: <USERLISTPAGE />,
    },
    {
        path: "/list-v",
        element: <VEHICLELISTPAGE />,
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;