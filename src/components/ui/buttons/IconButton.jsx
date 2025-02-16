import React from 'react';

export const IconButton = ({ children, ...rest }) => {
  return (
    <div className="tech-logo-hero ">
      <button
        {...rest}
        className="group relative  rounded-md font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300">
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#9EDD22] transition-all duration-100 group-hover:w-full rounded-md" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#9EDD22] transition-all delay-100 duration-100 group-hover:h-full rounded-md" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#9EDD22] transition-all delay-200 duration-100 group-hover:w-full rounded-md" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#9EDD22] transition-all delay-300 duration-100 group-hover:h-full rounded-md" />
      </button>
    </div>
  );
};
