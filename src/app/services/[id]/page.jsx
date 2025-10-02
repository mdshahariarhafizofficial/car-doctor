import PageTopSection from '@/Components/PageTopSection';
import dbConnect from '@/libs/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
        const serviceDetails = await dbConnect("services").findOne({_id: new ObjectId(p.id)});
        console.log(serviceDetails);
        
    return (
        <div className='max-w-[1140px] mx-auto'>
            <PageTopSection title={"Service Details"} path={"Service Details"}></PageTopSection>
            
            <div className='grid grid-cols-12 mt-20'>
                <div className="left col-span-8">
                    <div className='space-y-5'>
                        <Image className='w-full h-[400px] object-cover rounded-lg' src={serviceDetails.img}
                        width={500}
                        height={500}
                        alt="service" />
                        <h2 className='text-3xl font-bold'>{serviceDetails.title}</h2>
                        <p className='text-gray-600'>{serviceDetails.description}</p>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>

        </div>
    );
};

export default page;