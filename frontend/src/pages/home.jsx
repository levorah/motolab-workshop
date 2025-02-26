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
            </div>
        </>
    )
}