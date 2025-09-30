import Image from 'next/image';
import React from 'react';

const CtaSection = () => {
    return (
        <section className='max-w-[1140px] mx-auto mb-20 py-24 px-6 lg:px-18 bg-black lg:rounded-lg flex flex-col lg:flex-row md:items-center lg:justify-between gap-10 lg:gap-0'>

        <div className='flex items-center gap-5'>
            <div>
                <Image width={40} height={40} src={"/assets/icons/calender.svg"} alt='calender icon'></Image>
            </div>
            <div className='space-y-2'>
                <p className='text-white'>We are open monday-friday</p>
                <h2 className='text-white text-2xl font-bold'>7:00 am - 9:00 pm</h2>
            </div>
        </div>
        

        <div className='flex items-center gap-5'>
            <div>
                <Image width={40} height={40} src={"/assets/icons/call.svg"} alt='call icon'></Image>
            </div>
            <div className='space-y-2'>
                <p className='text-white'>Have a question?</p>
                <h2 className='text-white text-2xl font-bold'>+2546 251 2658 </h2>
            </div>
        </div>


        <div className='flex items-center gap-5'>
            <div>
                <Image width={40} height={40} src={"/assets/icons/location.svg"} alt='location icon'></Image>
            </div>
            <div className='space-y-2'>
                <p className='text-white'>Need a repair? our address</p>
                <h2 className='text-white text-2xl font-bold'>Liza Street, New York</h2>
            </div>
        </div>


        </section>
    );
};

export default CtaSection;