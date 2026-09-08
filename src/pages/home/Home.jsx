import { NavLink } from "react-router";

export default function Home() {

    return (
        <>
            <h1>Principal</h1>
            <div className="card">
                Producto 1
                <NavLink to='product-detail/1'>
                    Ver mas
                </NavLink>
            </div>
            <div className="card">
                Producto 2
                <NavLink to='product-detail/2'>
                    Ver mas
                </NavLink>
            </div>
            <div className="card">
                Producto 3
                <NavLink to='product-detail/3'>
                    Ver mas
                </NavLink>
            </div>

        </>
    )
}