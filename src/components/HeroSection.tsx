function Container() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.176)] to-[rgba(0,0,0,0.2)] via-50% via-[rgba(0,0,0,0.125)] inset-0 flex items-center justify-center" data-name="Container">
      <p className="font-['Ballet:Regular',_sans-serif] leading-[normal] not-italic text-[80px] sm:text-[120px] md:text-[180px] lg:text-[250px] xl:text-[350px] text-white text-center px-4 max-w-[90vw]">
        5 Star Concepts.
      </p>
    </div>
  );
}

function ImageEsportsArena() {
  const videoUrl = "https://raw.githubusercontent.com/Draco-of-3000/5-Star-Media/main/hero-background.mp4";
  
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image (Esports Arena)">
      <video
        className="absolute max-w-none object-cover size-full"
        autoPlay
        muted
        loop
        playsInline
        style={{ pointerEvents: 'none' }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute inset-0" data-name="Container">
      <ImageEsportsArena />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px]" data-name="Hero">
      <Container1 />
    </section>
  );
}
