import { NavLink } from "react-router";

export default function Header () {
    const isAdmin = false;

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
        <header className="bg-bg border-b border-borders">
            <nav className="flex">
                {links.map(l => {
                    return <NavLink to={l.to} className={({isActive})  => linkStyles + (isActive ?  ' text-text' : ' text-text-muted')} key={l.to}>{l.title}</NavLink>
                })}
            </nav>
        </header>
    )
}