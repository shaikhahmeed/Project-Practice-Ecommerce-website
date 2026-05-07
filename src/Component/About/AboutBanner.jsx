import React from 'react'
import Breadcamp from '../Utility/Breadcamp'

const AboutBanner = () => {
  return (
    <section className='mt-9'>
        <div className="container">
            <div>
                <Breadcamp/>
            </div>
            <div className='md:flex gap-12 px-8 mt-1 md:mt-14'>
                <div className='w-fit hidden md:block'>
                    <img src="/about_banner.png" alt="about_banner"/>
                </div>
                <div>
                    <h1 className='font-bold text-4xl text-primary pb-8 pt-6 md:pt-16 w-full md:max-w-80'>Welcome to Nest</h1>
                    <p className='font-medium text-base text-[#7E7E7E] pb-8 md:max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>
                    <p className='font-medium text-base text-[#7E7E7E] pb-12 max-w-xl'>
                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                    </p>
                    <div className='mt-5 gap-2 hidden md:flex w-fit'>
                        <img src="/about_banner_item.png" alt="about_banner_item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutBanner