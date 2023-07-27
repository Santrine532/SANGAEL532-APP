import React from 'react'

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_h6aW2kmD1ZMfPbQmHK22V7R-Faw-Esv-03dZnmL&s')" }}>
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl text-white font-bold mb-6">Welcome to our website!</h1>
                        <p className="text-4xl text-white font-bold mb-6">WHAT EXACTLY ARE YOU LOOKING FOR.</p>
                        <div className='flex '>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-8 rounded hover:bg-blue-700 mr-2">Login</button>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-8 rounded hover:bg-blue-700">Sign Up</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero
