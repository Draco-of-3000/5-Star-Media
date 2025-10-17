function Container() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.176)] h-[1304px] left-0 to-[rgba(0,0,0,0.2)] top-0 via-50% via-[rgba(0,0,0,0.125)] w-[3423px]" data-name="Container">
      <p className="absolute font-['Ballet:Regular',_sans-serif] leading-[normal] left-[calc(50%-1290.5px)] not-italic text-[500px] text-white top-[254px] w-[3469px]">5 Star Concepts.</p>
    </div>
  );
}

function ImageEsportsArena() {
  return (
    <div className="absolute h-[1304px] left-0 overflow-clip top-0 w-[3423px]" data-name="Image (Esports Arena)">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/82641b4ae5ae852e4678a9448da7317984f8c0f4" />
      </video>
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1304px] left-0 top-0 w-[3423px]" data-name="Container">
      <ImageEsportsArena />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative size-full" data-name="Hero">
      <Container1 />
    </div>
  );
}