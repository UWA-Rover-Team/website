import Reveal from './Reveal';

const sponsors = ['UWA', 'ISC', 'DOF Subsea', 'TechWorks', 'Altronics'];

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

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((sponsor, i) => (
            <Reveal key={sponsor} delay={i * 75} className="h-full">
              <div className="flex h-full min-h-24 items-center justify-center rounded-lg border border-line bg-subtle p-6">
                <p className="text-center text-body font-semibold text-muted">
                  {sponsor}
                </p>
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
                href="#sponsorship"
                className="shrink-0 rounded-md bg-primary px-6 py-3 text-body font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                View Sponsorship Tiers
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
