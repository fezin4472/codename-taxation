import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOMEPAGE from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "",
        element: <HOMEPAGE />,
    },
    {
        path: "",
    }
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;