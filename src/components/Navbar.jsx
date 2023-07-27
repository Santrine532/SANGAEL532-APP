import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {

    const navigate = useNavigate()
    function navigateBooknow() {
        navigate("/Booknow")

    }
    function navigatePackages() {
        navigate("/Packages")
    }
    function navigateHotel() {
        navigate("/Hotel")
    }
    function navigatecontactNo() {
        navigate("/contactNo")
    }
    function navigateHome() {
        navigate("/Home")
    }
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gray-700 text-white p-4 ">
                <div className="container mx-auto flex items-center justify-between">
                    <a className="nvbar brand"> <img className='w-20 h-25  ' src="https://cdn-icons-png.flaticon.com/128/744/744502.png" alt="logo" />
                    </a>

                    <div className="font-semibold flex  ">
                        <a href="#" onClick={navigateHome} className="mx-2 hover:text-blue-400">Home</a>
                        <a href="#" onClick={navigateHotel} className="mx-2 hover:text-red-400">Hotel</a>
                        <a href="#" onClick={navigatePackages} className="mx-2 hover:text-green-400">Packages</a>
                        <a href="#" onClick={navigatecontactNo} className="mx-2 hover:text-yellow-400">Contact no.</a>
                        <a href="#" onClick={navigateBooknow} className="mx-2 hover:text-orange-400">Book Now</a>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
