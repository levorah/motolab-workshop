export default function Home() {
    return (
        <>
            <div className="p-6">
                {/* Hero Image */}
                <div className="mb-8">
                    <img
                        src="./harley.png"
                        alt="Bike Hero"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Gallery of Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="./harley.png"
                        alt="Bike Repair"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <img
                        src="./harley.png"
                        alt="Bike Service"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Contact Section */}
                <div className="mt-8" id="contact">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>Email: contact@bikerepair.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>
        </>
    )
}