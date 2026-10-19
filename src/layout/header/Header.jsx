import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useOrder } from "../../context/OrderContext";

export default function Header () {
    const isAdmin = true;

    const {toggleSidebarOrder, totalQuantity} = useOrder();

    const linkStyles = 'p-4 hover:text-text'

    const links = [
        {to: "/", title: 'Principal'},
        {to: "/login", title: 'Login'},
        {to: "/contact", title: 'Contacto'},
        {to: "/about-us", title: 'Acerca de'},
        {to: "/register", title: 'Registro'},
        ...(isAdmin ? [
            {to: "/admin-product", title: 'Admin Product'},
            {to:"/admin-user", title:'Admin User'}] : [])
        
    ]
    return (
        <header className="flex items-center justify-between bg-bg border-b border-borders pr-4">
            <nav className="flex">
                {links.map(l => {
                    return <NavLink to={l.to} className={({isActive})  => linkStyles + (isActive ?  ' text-text' : ' text-text-muted')} key={l.to}>{l.title}</NavLink>
                })}
            </nav>
            
            <button className="relative size-10 flex items-center justify-center rounded-md text-text hover:bg-surface-hover cursor-pointer transition-colors duration-200" onClick={() => toggleSidebarOrder()}>
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity >= 1 && <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-accent text-xs font-medium text-text-on-accent tabular-nums">{totalQuantity}</span>}
            </button>

        </header>
    )
}