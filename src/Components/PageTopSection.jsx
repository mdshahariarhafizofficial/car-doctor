import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageTopSection = ({title, path}) => {
    return (
    <div className="max-w-[1140px] mx-auto my-5 px-5 lg:px-0">
      <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/banner/4.jpg"
          alt="Service Banner"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title */}
        <h2 className="absolute top-1/2 -translate-y-1/2 left-10 text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h2>

        {/* Breadcrumb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#FF3811] text-white px-8 py-2 font-medium text-sm lg:text-base 
                        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_100%,0_100%)]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span>{path}</span>
        </div>
      </div>
    </div>
    );
};

export default PageTopSection;