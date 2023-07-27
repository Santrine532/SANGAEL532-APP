import React from 'react'
import Footer from '../components/Footer'
const viewAll = () => {
  return (
    <div className='flex flex-wrap mb-6'>
      <div className='w-full  p-6 m-auto   shadow-rose-600/40'>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/744/744502.png" alt="logo" />
        </div>
        <div>
          <h1 className='text-3xl text center font-semi-bold' >
            WELCOME TO THE LAXARIOUS PLACES TO STAY
          </h1>
        </div>
        <div className='flex flex-wrap mb-6 p-2 h-full w-full'>
          <div className=' grid gap-4 grid-cols-3  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover'/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover'/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover'/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover'/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL0UlX91Z-K1HDZYwnuHH_Guy5jo-7Hv-KQ&usqp=CAU" alt="" className='w-full h-96 object-cover'/>
          </div>

        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default viewAll
