import LoginForm from '@/Components/LoginForm';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row justify-center items-center min-h-screen px-5 lg:px-0 gap-10">
      {/* Left Illustration */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <Image
          src="/assets/images/login/login.svg"
          alt="Sign Up Illustration"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Right Form Card */}
      <LoginForm></LoginForm>

    </div>
  );
};

export default page;