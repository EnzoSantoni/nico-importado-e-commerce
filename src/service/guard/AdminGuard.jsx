import { Navigate } from "react-router";

export default function AdminGuard ({ children }) {

    const isAdmin = false;
    return isAdmin ? children : <Navigate to='/' replace />
}