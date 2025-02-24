import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">MotoLab ML</h1>
                <nav className="mt-2">
                    <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
                    <Link to="/services" className="mr-4 hover:text-gray-300">Services </Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </nav>
            </header>
        </>
    )
}