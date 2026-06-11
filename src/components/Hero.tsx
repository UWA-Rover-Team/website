import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center bg-shell">
      <Image
        src="/images/DSC_0673.JPG"
        alt="The WARP rover on the competition pad"
        fill
        className="object-cover"
        priority
        quality={75}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-shell/95 via-shell/70 to-blue-950/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-20 pb-16 md:px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-label font-semibold tracking-widest text-blue-300 uppercase">
            University of Western Australia
          </p>
          <h1 className="text-h1 text-white">
            Western Australian Rover Project
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-white/85">
            A student engineering team at UWA designing and building planetary
            rovers for the Australian Rover Challenge.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#sponsorship"
              className="rounded-md bg-primary px-6 py-3 text-center text-body font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Become a Sponsor
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/40 px-6 py-3 text-center text-body font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
