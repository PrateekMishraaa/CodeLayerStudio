import React from 'react'
import Navbar from '../Components/Navbar'
import Dev from "../assets/dev.jpg"

const Technologies = () => {
    return (
        <>
            <Navbar />
            <section className='h-[82vh] w-full border-2'>
                <img src={Dev} alt="Developer" className='h-full w-full object-cover' />
            </section>

            {/* Technologies Section */}
            <section className='min-h-screen w-full bg-gray-50 py-16 px-6 md:px-20'>
                <h2 className='text-4xl font-sans text-blue-900 font-bold text-center mb-12'>
                    Technologies We Use
                </h2>
            <p>We Are Providing best web services ever </p>
               
            </section>
        </>
    )
}

export default Technologies
