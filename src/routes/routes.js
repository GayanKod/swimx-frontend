import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDashboardHome from "../pages/admin/AdminDashboardHome";
import AdminAuthGuard from "../pages/auth/AdminAuthGuard";
import AdminLoginRedirectGuard from "../pages/auth/AdminLoginRedirectGuard";
import AdminDashboardUsers from "../pages/admin/AdminDashboardUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/admin/auth",
        element: (
            <AdminLoginRedirectGuard>
                <AdminLoginPage/>
            </AdminLoginRedirectGuard>
        ),
    },
    {
        path: "/admin",
        element: (
            <AdminAuthGuard>
                <AdminDashboard/>
            </AdminAuthGuard>
        ),
        children: [
            {
                path: "",
                element: <AdminDashboardHome/>,
            },
            {
                path: "users",
                element: <AdminDashboardUsers/>,
            },

        ],
    },
]);

export default router;
