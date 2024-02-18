import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/logo.png';
import useAuth from "../hooks/useAuth";
import LogoutConfirmationModal from "./LogoutConfirmationModal";

const navigation = [
    {name: 'Dashboard', href: '/admin'},
    {name: 'Registered Users', href: '/admin/users'},
];

const AdminNavbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
        setIsLogoutModalOpen(false);
        setIsDropdownOpen(false);
    };

    const handleCancel = () => {
        setIsLogoutModalOpen(false);
        setIsDropdownOpen(false);
    }

    return (
        <nav className="bg-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/admin">
                            <img className="block h-12 w-auto" src={logo || ""} alt="Workflow"/>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                                            location.pathname === item.href ? 'bg-purple-600 text-black' : 'text-white hover:bg-purple-900 hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="relative z-10 flex items-center justify-center p-1 rounded-full focus:outline-none"
                            >
                                <img className="h-8 w-8 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="Your Avatar"/>
                                <svg className="h-4 w-4 fill-current text-gray-500 ml-2 -mr-1"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.05 8a7 7 0 019.9 0L15 8.9a5.5 5.5 0 00-10 0L5.05 8z"/>
                                    <path d="M13.95 11a7 7 0 01-7.9 0L5 11.1a5.5 5.5 0 0010 0l-1.05-.1z"/>
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-10 mt-2 w-48 py-1 bg-white rounded-md shadow-lg">
                                    <Link to="/settings"
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                    <div onClick={() => setIsLogoutModalOpen(true)}
                                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:text-white focus:bg-gray-700 transition"
                            aria-expanded="false"
                        >
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {isLogoutModalOpen && (
                <LogoutConfirmationModal handleLogout={handleLogout} handleCancel={handleCancel}/>
            )}
        </nav>
    );
};

export default AdminNavbar;
