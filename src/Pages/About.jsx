import React from 'react'
import Navbar from '../Components/Navbar'
import Developer from "../assets/developer3.jpg"
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
    navigate("/contact-us")
  }
  return (
    <>
      <Navbar />

      {/* Banner Image */}
      <section className='w-full'>
        <img 
          src={Developer} 
          alt="about" 
          className='h-60 md:h-96 w-full object-cover'
        />
      </section>

      {/* About Section */}
      <section className='w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-10'>
      
   <section className='px-4 md:px-20 lg:px-32 py-10 text-gray-700'>
  <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-6'>About Us</h2>
  <p className='text-sm sm:text-base leading-relaxed'>
    Welcome to <span className="font-semibold text-blue-800">CodeLayer Studio PVT. LTD</span>, a top-rated web development and digital solutions company based in India. We specialize in building modern, SEO-optimized, and responsive websites that are both visually appealing and technically powerful.
    <br /><br />
    Our team is proficient in cutting-edge technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>SvelteKit</strong>, <strong>WordPress</strong>, and mobile app development for both Android and iOS. Whether you need a single-page application, an eCommerce site, or a scalable mobile app — we’ve got the expertise to turn your ideas into reality.
    <br /><br />
    At CodeLayer Studio, we combine clean UI/UX design with robust backend development to deliver seamless user experiences. Every line of code we write is optimized for performance, accessibility, and SEO ranking. We help startups, SMEs, and enterprises launch fast-loading, search-engine-friendly platforms that generate results.
    <br /><br />
    We understand the importance of building future-proof digital products. That’s why we use the latest frameworks, tools, and agile methodologies to ensure each project is completed on time and meets your exact business requirements.
    <br /><br />
    Our mission is to empower businesses with technology that works — beautiful, secure, scalable, and user-centric digital solutions tailored to your brand and audience.
  </p>

  {/* Services Section */}
  <div className='mt-10'>
    <h3 className='text-2xl md:text-3xl font-semibold text-blue-800 mb-4'>Our Services</h3>
    <ul className='list-disc pl-5 space-y-2 text-sm sm:text-base'>
      <li><strong>Custom Website Design & Development</strong> – Modern, responsive websites built with React.js, Next.js, or SvelteKit</li>
      <li><strong>WordPress Development</strong> – Custom themes, plugins, blog setup, WooCommerce integration, and SEO optimization</li>
      <li><strong>Mobile App Development</strong> – Android & iOS app development using Flutter, React Native, and native frameworks</li>
      <li><strong>Admin Panel & Dashboard UI</strong> – Secure and scalable admin dashboards with full CRUD functionality</li>
      <li><strong>eCommerce Website Development</strong> – Online stores with payment gateways, inventory management, and user dashboards</li>
      <li><strong>Website Maintenance & Redesign</strong> – Keep your website updated, fast, and visually modern</li>
      <li><strong>SEO & Performance Optimization</strong> – Improve loading speed, search rankings, and mobile compatibility</li>
      <li><strong>Landing Page & Portfolio Design</strong> – High-conversion landing pages for startups, creators, and professionals</li>
    </ul>
  </div>

  {/* Closing CTA */}
  <div className='mt-10 text-sm sm:text-base'>
    <p>
      Partner with CodeLayer Studio PVT. LTD and experience the power of next-generation web and app development.
      Contact us today to schedule a consultation and take your digital presence to the next level.
    </p>
  </div>
</section>


    <button onClick={()=>handleNavigate()} className='h-10 w-40   bg-blue-900 text-white font-sans font-semibold rounded-2xl cursor-pointer hover:bg-blue-500 transition'>Contact</button>
      </section>
      <Footer/>
    </>
  )
}

export default About
