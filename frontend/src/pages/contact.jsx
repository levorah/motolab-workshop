import { email, phone } from "../config/personal";

export default function Contact() {
    return (
        <div>
            <h1 className="font-bold text-xl p-4">
                We would love to hear from you. Get in touch with MotoLab ML today!
            </h1>

            <div className="mb-6 p-4 m-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">MotoLab ML</h2>
                <p className="text-gray-600">Address: KuriyanoorKunnel, Kottayam, Kerala</p>
                <a href={`tel:${phone}`} className="text-gray-600">Phone: {phone}</a>
                <br />
                <a href={`mailto:${email}`} className="text-gray-600">Email: {email}</a>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Follow Us</h3>
                <a
                    href="https://www.instagram.com/moto.labml_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Instagram: @moto.labml_
                </a>
            </div>
        </div>
    )
}