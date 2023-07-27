import React from 'react'
import { useNavigate } from 'react-router-dom'
import Story from './Story'
import Footer from './Footer'
import { useAuth } from './auth'
const Hero = () => {
    const navigate = useNavigate()
    function navigateLogin() {
        navigate("/Login")

    }

    function navigateSignUp() {
        navigate("/SignUp")
    }
const auth = useAuth
    return (
        <div>
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">What exactly are you looking for. We are moving over the world gaining more experience.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#" onClick={navigateLogin} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Login
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">

                            </svg>
                        </a>
                        <a href="#" onClick={navigateSignUp} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            SignUp
                        </a>
                    </div>
                </div>
            </section>
            <Story />
            
        </div>


    )
}



export default Hero
