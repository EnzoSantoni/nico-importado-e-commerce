import { Navigate } from "react-router";

export default function AdminGuard ({ children }) {

    const isAdmin = true;
    return isAdmin ? children : <Navigate to='/' replace />
}