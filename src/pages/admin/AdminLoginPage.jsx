import React, {useState} from "react";
import loginbg from "../../assets/loginbg.png";
import logo from "../../assets/logo.png";
import axios from "axios";
import {useToast} from "../../context/ToastContext";
import {useNavigate} from "react-router-dom";

const AdminLoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const {addToast} = useToast();
    const navigate = useNavigate();

    const login = async (email, password) => {
        setLoading(true);
        try {
            const result = await axios.post("https://viharamahadevi.onrender.com/auth/v1/login", {
                email: email,
                password: password
            });
            console.log("Login result", result);
            setLoading(false);

            localStorage.setItem("isLoggedIn", "true");

            addToast("Login successful", "success");

            navigate("/admin");


        } catch (error) {
            console.error("Login failed", error);
            addToast(error.message, "error");
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasErrors = false;
        let newErrors = {};

        if (!formData.email) {
            hasErrors = true;
            newErrors.email = "Email is required";
        }
        if (!formData.password) {
            hasErrors = true;
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);

        if (!hasErrors) {
            await login(formData.email, formData.password);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div
                className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 lg:w-1/2">
                <div className="mx-auto w-full max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <div className="mt-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email
                                    address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                            </div>
                            {errors.form && <p className="text-red-500 text-center">{errors.form}</p>}
                            <div>
                                <button type="submit" disabled={loading}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    {loading ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : "Sign in"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-grow items-center justify-center relative lg:w-1/2">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={loginbg || "https://source.unsplash.com/1600x900/?nature,water"}
                    alt="Login Background"
                />
                <div
                    className="relative z-10 text-center p-12 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl">
                    <img
                        src={logo || "https://via.placeholder.com/150"}
                        alt="Logo"
                        className="mx-auto h-40 w-40 object-cover"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-primary">Vihara Maha Devi Balika Vidyalaya</h2>
                    <p className="text-xl text-primary">Swimming Pool Application</p>
                    <p className="text-xl text-primary font-semibold">Admin Panel</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
