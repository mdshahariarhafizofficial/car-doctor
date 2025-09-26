"use client";
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className='max-w-[1140px] mx-auto py-30'>
            <div className='grid grid-cols-12 gap-14'>

                <div className='col-span-6 relative'>
                    <Image src="/assets/images/about_us/person.jpg" width={700} height={700} alt='person' className='w-[460px] h-[473px] object-cover rounded-xl'></Image>
                    <Image className='absolute -bottom-20 right-0 w-[325px] h-[325px] object-cover border-10 border-white rounded-xl' src="/assets/images/about_us/parts.jpg" width={500} height={500} alt='person'></Image>
                </div>

                <div className='col-span-6'>
                    <h4>About Us</h4>
                    <h2>We are qualified & of experience in this field</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="bg-[#FF3811] px-5 py-2 rounded-md font-medium hover:bg-red-700 transition cursor-pointer text-white">
                        Get More Info
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;