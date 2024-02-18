import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";
import {ToastProvider} from "./context/ToastContext";

export default function App() {
    return (
        <>
            <ToastProvider>
                <RouterProvider router={router}/>
            </ToastProvider>
        </>
    );
}
