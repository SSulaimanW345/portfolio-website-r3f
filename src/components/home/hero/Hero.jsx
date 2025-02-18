import { HeroCanvas } from './HeroCanvas.jsx';
import { HeroButtons } from './HeroButtons.jsx';
import { Background } from './Background.jsx';
import { HeroContent } from './HeroContent.jsx';
import { ResumeDownloadButton } from '../../ui/buttons/DownloadBtn.jsx';
export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex relative" id="home">
      <Background fixed={false} />
      <div className="min-w-max h-fit absolute -translate-x-1/2  left-1/2  sm:mt-32 mt-28 c-space gap-3">
        <p className="sm:text-3xl  text-xl font-medium text-[#F5FCE9] text-center font-generalsans">
          Hi, I am Sulaiman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient lg:hidden">Building Products & Brands</p>
      </div>
      <div className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 w-3/4 xl:w-2/5 h-2/5 lg:h-1/2  intro-animation">
        <HeroCanvas />
        <div className="absolute inset-0 grid grid-cols-2   grid-rows-2 z-[-1]">
          <div className="bg-[#24282e] bg-opacity-90 shadow-xl shadow-[#24282e]/100 [border-radius:40%_60%_0%_100%_/82%_13%_87%_18%]"></div>
          <div className="bg-[#24282e] bg-opacity-90 shadow-[#24282e]/100 [border-radius:9%_91%_9%_91%_/100%_56%_44%_0%]"></div>
          <div className="bg-[#24282e] bg-opacity-90 shadow-[#24282e]/100 [border-radius:22%_78%_0%_100%_/85%_0%_100%_15%] "></div>
          <div className="bg-[#24282e] bg-opacity-90 shadow-[#24282e]/100 [border-radius:0%_100%_0%_100%_/100%_39%_61%_25%] "></div>
        </div>
      </div>

      <div className="absolute -translate-x-1/2 bottom-10 sm:bottom-5 left-1/2 -translate-y-1/2">
        <HeroButtons />
      </div>
      <HeroContent />
      {/* <div className="hidden sm:block fixed top-32 right-4 z-50">
        <ResumeDownloadButton />
      </div> */}
    </section>
  );
};
