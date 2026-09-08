import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./header/Header";


export default function Layout() {
    
    return (
        <>
            <Header />

            <main className='flex flex-1 flex-col w-full max-w-7xl text-text mx-auto'>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

