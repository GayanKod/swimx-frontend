import {useNavigate} from "react-router-dom";

export default function useAuth() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('isLoggedIn', "false");
        navigate('/admin/auth', {replace: true});
    }

    return {
        logout,
    }
}
