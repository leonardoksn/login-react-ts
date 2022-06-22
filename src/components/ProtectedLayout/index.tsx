import { Navigate, Outlet, Route } from "react-router-dom";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

export default function ProtectedLayout({ children }: { children: JSX.Element }) {


    const a = getUserLocalStorage();

    if (a) {
        return children
    }
    return <Navigate to="/login" />

}