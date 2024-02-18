import {Outlet} from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
    return (
        <div>
            <AdminNavbar/>
            <Outlet/>
        </div>
    )
}
