import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#" className="text-lg font-semibold">Logo</a>
                    <div className="flex">
                        <a href="#" className="mx-2">Home</a>
                        <a href="#" className="mx-2">Hotel</a>
                        <a href="#" className="mx-2">Packages</a>
                        <a href="#" className="mx-2">Contact no.</a>
                        <a href="#" className="mx-2">Book Now</a>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
