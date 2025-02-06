import { HeroCanvas } from './HeroCanvas.jsx';
import { HeroButtons } from './HeroButtons.jsx';
import { Background } from './Background.jsx';
import { HeroContent } from './HeroContent.jsx';
import { ResumeDownloadButton } from '../../ui/buttons/DownloadBtn.jsx';
export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex relative" id="home">
      <Background />
      <div className="min-w-max h-fit absolute -translate-x-1/2  left-1/2  sm:mt-32 mt-28 c-space gap-3">
        <p className="sm:text-3xl  text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sulaiman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient lg:hidden">Building Products & Brands</p>
      </div>
      <div className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2 w-full sm:w-1/2 h-1/2  intro-animation">
        <HeroCanvas />
      </div>
      <div className="absolute -translate-x-1/2 bottom-2 left-1/2 -translate-y-1/2">
        <HeroButtons />
      </div>
      <HeroContent />
      <div className="hidden sm:block fixed top-28 right-4 z-50">
        <ResumeDownloadButton />
      </div>
    </section>
  );
};
