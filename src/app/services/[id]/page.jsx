import PageTopSection from '@/Components/PageTopSection';
import dbConnect from '@/libs/dbConnect';
import { ArrowRight } from 'lucide-react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFileEarmarkBarGraph } from "react-icons/bs";

const page = async ({params}) => {
    const p = await params;
        const serviceDetails = await dbConnect("services").findOne({_id: new ObjectId(p.id)});
        console.log(serviceDetails);

        const allServices = await dbConnect("services").find({}).limit(6).toArray();
        
    return (
        <div className='max-w-[1140px] mx-auto pb-20'>
            <PageTopSection title={"Service Details"} path={"Service Details"}></PageTopSection>
            
            <div className='grid grid-cols-12 mt-20 gap-6 md:pl-5 lg:pl-0 px-5 md:px-0'>
                {/* Left */}
                <div className="left col-span-12 md:col-span-8">
                    <div className='space-y-5'>
                        <Image className='w-full h-[400px] object-cover rounded-lg' src={serviceDetails.img}
                        width={500}
                        height={500}
                        alt="service" />
                        <h2 className='text-3xl font-bold'>{serviceDetails.title}</h2>
                        <p className='text-gray-600'>{serviceDetails.description}</p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6 py-8'>

                        <div className='p-10 bg-[#F3F3F3] rounded-lg border-t-2 border-primary space-y-2'>
                            <h2 className='text-xl font-bold'>Instant Car Services</h2>
                            <p className='text-gray-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='p-10 bg-[#F3F3F3] rounded-lg border-t-2 border-primary space-y-2'>
                            <h2 className='text-xl font-bold'>24/7 Quality Service</h2>
                            <p className='text-gray-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='p-10 bg-[#F3F3F3] rounded-lg border-t-2 border-primary space-y-2'>
                            <h2 className='text-xl font-bold'>Easy Customer Service</h2>
                            <p className='text-gray-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='p-10 bg-[#F3F3F3] rounded-lg border-t-2 border-primary space-y-2'>
                            <h2 className='text-xl font-bold'>Quality Cost Service</h2>
                            <p className='text-gray-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>


                    </div>

                    <div className='space-y-5'>
                        <h2 className='text-2xl font-bold'>3 Simple Steps to Process</h2>
                        <p className='text-gray-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

                        <div className='grid lg:grid-cols-3 gap-6 py-5'>
                            <div className='p-10 shadow-sm rounded-lg space-y-2 text-center'>
                                <Image className='mx-auto' src={"/assets/icons/one.svg"} width={50}
                                height={50} alt='step'></Image>
                                <h2 className='text-xl font-bold'>Step One</h2>
                                <p className='text-gray-600'>It uses a dictionary of over 200 .</p>
                            </div>                          
                            <div className='p-10 shadow-sm rounded-lg space-y-2 text-center'>
                                <Image className='mx-auto' src={"/assets/icons/two.svg"} width={50}
                                height={50} alt='step'></Image>
                                <h2 className='text-xl font-bold'>Step Two</h2>
                                <p className='text-gray-600'>It uses a dictionary of over 200 .</p>
                            </div>                          
                            <div className='p-10 shadow-sm rounded-lg space-y-2 text-center'>
                                <Image className='mx-auto' src={"/assets/icons/theree.svg"} width={50}
                                height={50} alt='step'></Image>
                                <h2 className='text-xl font-bold'>Step Three</h2>
                                <p className='text-gray-600'>It uses a dictionary of over 200 .</p>
                            </div>                          
                        </div>

                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="right col-span-12 md:col-span-4 space-y-8 md:pr-5 lg:pr-0">

                    {/* Services */}
                    <div className='bg-[#F3F3F3] p-4 lg:p-10 space-y-4 rounded-lg'>
                        <h2 className='text-2xl font-bold'>Services</h2>
                        {
                            allServices.map((service, idx) => {
                                return (
                                    <div key={idx} className={`${idx === 0 ? "bg-primary text-white rounded-lg" : "bg-base-100 rounded-lg"}`}>
                                            <div className="flex justify-between items-center p-4 rounded-lg">
                                            <h2 className="card-title text-base font-bold">{service.title}</h2>
                                            <Link href={`/services/${service._id}`}>
                                                <ArrowRight className={`${idx === 0 ? "text-white" : "text-primary"}`}></ArrowRight>
                                            </Link>
                                            </div>           
                                    </div>
                                )
                            }
                            )
                        }                        
                    </div>

                    {/* Download */}
                    <div className='bg-black space-y-4 rounded-lg p-4 lg:p-10'>
                        <h2 className='text-2xl font-bold text-white'>Download</h2>
                                    <div className='space-y-5'>
                                            
                                            <div className="flex justify-between items-center rounded-lg">
                                            <div className='flex items-center gap-2'>
                                                <div>
                                                    <BsFileEarmarkBarGraph className='text-white text-3xl' />
                                                </div>
                                                <div>
                                                    <h2 className="card-title text-base font-semibold text-white">Company Details</h2>
                                                    <p className='text-gray-400'>Download</p>
                                                </div>
                                            </div>
                                            <div className='bg-primary p-3 rounded'>
                                                <Link href={`#`}>
                                                    <ArrowRight className={`text-white`} size={20}></ArrowRight>
                                                </Link>
                                            </div>
                                            </div>           
                                            <div className="flex justify-between items-center rounded-lg">
                                            <div className='flex items-center gap-2'>
                                                <div>
                                                    <BsFileEarmarkBarGraph className='text-white text-3xl' />
                                                </div>
                                                <div>
                                                    <h2 className="card-title text-base font-semibold text-white">Our Brochure</h2>
                                                    <p className='text-gray-400'>Download</p>
                                                </div>
                                            </div>
                                            <div className='bg-primary p-3 rounded'>
                                                <Link href={`#`}>
                                                    <ArrowRight className={`text-white`} size={20}></ArrowRight>
                                                </Link>
                                            </div>
                                            </div>           
                                    </div>                        
                    </div>                   


                    {/* Quote */}
                    <div className='bg-black p-4 lg:p-10 pb-14 space-y-4 rounded-lg flex flex-col justify-center items-center'>
                        <Image src={"/assets/icons/logowhite.svg"} width={500} height={500} alt='logo' className='w-[100px] object-cover'></Image>
                        <h2 className='text-xl font-semibold text-white text-center'>Need Help? We Are Here
                        To Help You</h2>  
                        <div className='relative bg-white py-5 px-10 rounded-lg flex items-center flex-col'>
                            <p className='font-bold'><span className='text-primary font-bold'>Car Doctor </span>Special</p>
                            <p className='text-sm font-medium'>Save up to <span className='text-primary'>60% off</span></p>
                            <button className='absolute -bottom-7 btn btn-primary rounded-lg'>Get A Quote</button>
                        </div>                  
                    </div>    
                    
                    {/* price */}
                    <div className='pb-10 space-y-5'>
                        <h2 className='text-2xl font-bold'>Price $250.00</h2>
                        <button className='btn w-full btn-primary rounded'>Proceed Checkout</button>
                    </div>  


                </div>

            </div>

        </div>
    );
};

export default page;