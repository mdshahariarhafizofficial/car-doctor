"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-[1140px] mx-auto py-20 px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Images */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          {/* Main Image */}
          <Image
            src="/assets/images/about_us/person.jpg"
            width={700}
            height={700}
            alt="person"
            className="w-full max-w-[460px] h-auto object-cover rounded-xl"
          />
          {/* Small Overlapping Image */}
          <Image
            src="/assets/images/about_us/parts.jpg"
            width={500}
            height={500}
            alt="parts"
            className="absolute -bottom-10 right-5 lg:-bottom-20 lg:right-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[325px] h-auto object-cover border-[10px] border-white rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <h4 className="text-primary text-lg sm:text-xl font-bold">
            About Us
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            We are qualified <br /> & of experience <br /> in this field
          </h2>

          <div className="text-base text-[#737373] space-y-4">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p>
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.
            </p>
          </div>

          <button className="bg-[#FF3811] px-6 py-3 rounded-md font-medium hover:bg-red-700 transition cursor-pointer text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
