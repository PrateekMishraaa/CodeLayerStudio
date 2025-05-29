import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white min-h-[15rem] px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        
        {/* Column 1: Website Designs */}
        <div className="w-full md:w-1/3 h-auto border border-gray-700 rounded-lg p-4">
          <h3 className='font-bold text-lg mb-3'>Website Designs</h3>
          <ul className='text-sm font-semibold space-y-2'>
            <li><a href="#" className="hover:text-blue-400 transition">Web Design</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Crowd Funding Website</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Dance Website Designing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Website Maintenance</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Admin Panel of Every Website</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Re-Build Website</a></li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div className="w-full md:w-1/3 h-auto border border-gray-700 rounded-lg p-4">
          <h3 className='font-bold text-lg mb-3'>Services</h3>
          <ul className='text-sm font-semibold space-y-2'>
            <li><a href="#" className="hover:text-blue-400 transition">ReactJS Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">NextJS Development</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">E-Commerce Solutions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Website Optimization</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">SEO Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Website Hosting</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="w-full md:w-1/3 h-auto border border-gray-700 rounded-lg p-4">
          <h3 className='font-bold text-lg mb-3'>Contact Us</h3>
          <p className="text-sm font-semibold mb-2">CodeLayer Studio PVT.LTD</p>
          <p className="text-sm mb-1">Badarpur,NewDelhi</p>
          <p className="text-sm mb-1"> 110044</p>
          <p className="text-sm mb-1">Phone: <a href="tel:9540802061" className="hover:text-blue-400 transition">9540802061</a></p>
          <p className="text-sm mb-1">Email: <a href="mailto:pm921670@gmail.com" className="hover:text-blue-400 transition">pm921670@gmail.com</a></p>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4">
        <p className="text-center font-bold text-sm md:text-base">
          © 2024-2025 CodeLayer Studio PVT.LTD. All Rights Reserved{' '}
          <span className="block text-xs font-normal mt-1">
            Prateek Mishra, CEO of CodeLayer Studio PVT LTD
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
