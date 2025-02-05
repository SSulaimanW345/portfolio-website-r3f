import { HoverBtn } from '../../ui/buttons/HoverBtn';

export const HeroContent = ({ side }) => {
  return (
    <>
      <HoverBtn
        btnText={'Computer Vision'}
        className={'top-[36vh] left-[10vw] z-20'}
        tilt={1}
        content={'Image Segmentation 🔲 . Obstacle Tracking and  Detection 🚧 . '}
      />
      <HoverBtn
        btnText={'Power BI'}
        className={'top-[51vh] left-[10vw] z-10'}
        tilt={1}
        content={'DAX Query 🔢 . Data Modeling 📊 . Power BI Embedded 💻'}
      />
      <HoverBtn
        btnText={'Frontend Dev'}
        className={'top-[36vh] right-[10vw] z-20'}
        tilt={0}
        content={'React 17+ ⚛️ . Angular 16+ 🔴 . Tailwind CSS 🌬️ . DevExtreme 🖥️'}
      />
      <HoverBtn
        btnText={'Backend dev'}
        className={'top-[51vh] right-[10vw] z-10'}
        tilt={0}
        content={'C# 9+ ⌨️ .NET 4.5 Framework 🖧 . NET CORE 5 6 8  . Azure ☁️'}
      />
    </>
  );
};
