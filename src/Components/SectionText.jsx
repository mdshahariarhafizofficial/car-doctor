import React from 'react';

const SectionText = ({sectionName, Title}) => {
    return (
        <div className='text-center'>
          <h4 className="text-primary text-lg sm:text-xl font-bold">
            {sectionName}
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            {Title}
          </h2>
            <p className='text-base text-[#737373]'>
              The majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don&apos;t look even slightly
              believable.
            </p>            
        </div>
    );
};

export default SectionText;