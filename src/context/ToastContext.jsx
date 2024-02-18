import React, {createContext, useContext, useState} from 'react';

const ToastContext = createContext(undefined);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = "info") => {
        const id = Math.random().toString(36).slice(2, 11);
        setToasts((currentToasts) => [...currentToasts, {id, message, type}]);
        setTimeout(() => removeToast(id), 5000);
    };

    const removeToast = (id) => {
        setToasts((currentToasts) => currentToasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{addToast, removeToast}}>
            {children}
            <div className="absolute top-0 right-0 p-4 space-y-2 w-full" style={{zIndex: 1000}}>
                {toasts.map((toast) => (
                    <div key={toast.id}
                         className={`flex justify-between items-center px-4 py-2 rounded shadow-lg text-white ${toast.type === "info" ? "bg-blue-500" : toast.type === "success" ? "bg-green-500" : "bg-red-500"} transition-opacity duration-500 ease-in-out`}
                    >
                        <span>{toast.message}</span>
                        <button onClick={() => removeToast(toast.id)} className="ml-4">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
