import Balatro from "./bits/Balatro";
import ShinyText from "./bits/ShinyText";
import AnimatedContent from "./bits/AnimatedContent";

const Hero = ({ heroData }) => {
  return (
    <div className="hero min-h-screen relative bg-black">
      <Balatro
        isRotate={true}
        mouseInteraction={false}
        pixelFilter={300}
      />
      {/* Gradient overlay for bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral to-transparent pointer-events-none"
      ></div>
      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="flex flex-col items-center gap-2">
          <img
            src="/PWLOGO.png"
            alt="GONZDEV Logo"
            className="w-48 md:w-56 mb-4 mx-auto opacity-50"
          />
          <div className="text-8xl md:text-9xl font-bold bebas-neue-regular">
            <ShinyText text={heroData.title} disabled={false} speed={5} className='custom-class' />
          </div>
          <p className="text-2xl md:text-4xl">
            <ShinyText text={heroData.subtitle} disabled={false} speed={5} className='custom-class' />
          </p>
        </div>
      </AnimatedContent>

    </div>
  );
};

export default Hero;