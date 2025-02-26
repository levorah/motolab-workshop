import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { instaId } from "../config/personal";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white p-4 text-center">

                <Link to={`https://instagram.com/${instaId}`} target="_blank">
                    <FaInstagram />
                </Link>
                <p>© {new Date().getFullYear()} Bike Repair Services. All rights reserved.</p>
            </footer>
        </>
    )
}