import Reveal from './Reveal';

const sponsors = [
  {
    name: 'University of Western Australia',
    src: '/logos/sponsors/uwa-white.svg',
    darkBg: true,
    darkColor: '#003087',
  },
  {
    name: 'International Space Centre',
    src: '/logos/sponsors/isc.png',
    darkBg: true,
  },
  {
    name: 'DOF Subsea',
    src: '/logos/sponsors/dof-subsea.svg',
    darkBg: false,
  },
  {
    name: 'Altronics',
    src: '/logos/sponsors/Altronics_logo.png',
    darkBg: false,
  },
  {
    name: 'JLCPCB',
    src: '/logos/sponsors/jlcpcb.svg',
    darkBg: false,
  },
  {
    name: 'SolidWorks',
    src: '/logos/sponsors/solidworks.svg',
    darkBg: false,
  },
  {
    name: 'BeamNG',
    src: '/logos/sponsors/beamng.png',
    darkBg: false,
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Our partners
          </p>
          <h2 className="text-h2 text-ink">Our Sponsors</h2>
          <p className="mt-4 text-body-lg text-muted">
            We&apos;re grateful to the partners who make WARP possible.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {sponsors.map((sponsor, i) => (
            <Reveal key={sponsor.name} delay={i * 75} className="h-full">
              <div
                className="flex h-full min-h-28 flex-col items-center justify-center rounded-lg border border-line p-6 shadow-sm dark:border-white/10"
                style={{ backgroundColor: sponsor.darkBg ? (sponsor.darkColor ?? '#0a1628') : '#ffffff' }}
              >
                {sponsor.src ? (
                  <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sponsor.src}
                      alt={sponsor.name}
                      style={{ height: '60px', width: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                ) : (
                  <p className="text-center text-body font-semibold text-gray-700">
                    {sponsor.name}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-16">
          <div className="rounded-lg bg-gradient-to-r from-accent-tint to-violet-100 p-6 md:p-12 dark:to-violet-500/10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-h3 text-ink">Ready to partner with us?</h3>
                <p className="mt-2 text-body text-muted">
                  Support the future of Australian robotics and space
                  exploration while connecting your brand with UWA&apos;s top
                  engineering students.
                </p>
              </div>
              <a
                href="mailto:admin@rover.uwarobotics.com.au"
                className="shrink-0 rounded-md bg-primary px-6 py-3 text-body font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
