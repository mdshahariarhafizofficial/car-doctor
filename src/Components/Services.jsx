import React from 'react';
import SectionText from './SectionText';
import dbConnect from '@/libs/dbConnect';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Services = async () => {
    const allServices = await dbConnect("services").find({}).limit(6).toArray();
    
    return (
        <div className='max-w-[1140px] mx-auto py-20 px-5 lg:px-0'>
            <SectionText sectionName={"Service"} Title={"Our Service Area"}></SectionText>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    allServices.map((service, idx) => {
                        return (
                            <div key={idx}>
                                <div className="card bg-base-100 shadow-sm">
                                <figure className='p-5'>
                                    <Image
                                    className='w-full aspect-video rounded-lg'
                                    src={service.img} 
                                    width={500}
                                    height={500}
                                    alt='service'
                                    />
                                </figure>
                                <div className="card-body pt-0">
                                    <h2 className="card-title text-2xl font-bold">{service.title}</h2>
                                    <div className="card-actions justify-between items-center">
                                    <h3 className='text-lg font-semibold'>
                                        Price: $ {service.price}
                                    </h3>
                                    <Link href={`/services/${service._id}`}>
                                        <ArrowRight className='text-primary'></ArrowRight>
                                    </Link>
                                    </div>
                                </div>
                                </div>                               
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className='flex items-center justify-center py-6'>
                <button className="btn btn-outline btn-primary px-8 font-bold py-4 rounded-sm transition cursor-pointer">
                    More Services
                </button>            
            </div>
        </div>
    );
};

export default Services;