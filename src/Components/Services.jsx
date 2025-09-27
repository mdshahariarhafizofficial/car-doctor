import React from 'react';
import SectionText from './SectionText';
import dbConnect from '@/libs/dbConnect';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Services = async () => {
    const allServices = await dbConnect("services").find({}).toArray();
    console.log(allServices);
    
    return (
        <div className='max-w-[1140px] mx-auto py-20 px-5 lg:px-0'>
            <SectionText sectionName={"Service"} Title={"Our Service Area"}></SectionText>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allServices.map((service, idx) => {
                        return (
                            <div key={idx}>
                                <div className="card bg-base-100 shadow-sm">
                                <figure>
                                    <Image
                                    className='w-full aspect-video'
                                    src={service.img} 
                                    width={500}
                                    height={500}
                                    alt='service'
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <div className="card-actions justify-between items-center">
                                    <h3>
                                        Price: $ {service.price}
                                    </h3>
                                    <button className="">
                                        <ArrowRight className='text-primary'></ArrowRight>
                                    </button>
                                    </div>
                                </div>
                                </div>                               
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
};

export default Services;