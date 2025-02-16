export const SectionHeading = ({ heading }) => {
  return (
    <div className="z-0 text-center mb-16 rounded-md m-auto  w-3/4 sm:w-1/2 shadow-md">
      <p className="head-text">{heading}</p>
      <div className="w-[200px] h-1 bg-[#F5FCE9] mx-auto mt-3 rounded-full"></div>
    </div>
  );
};
