import Reveal from './Reveal';

const tiers = [
  {
    name: 'Platinum',
    range: '$10,000+',
    featured: true,
    accent: 'text-accent',
    benefits: [
      'Logo on rover chassis',
      'Logo on website (large)',
      'Naming rights to rover component',
      'Speaking opportunity at events',
      'VIP competition day access',
      'Annual partnership agreement',
      'Quarterly progress reports',
    ],
  },
  {
    name: 'Gold',
    range: '$5,000 – $9,999',
    featured: false,
    accent: 'text-amber-600 dark:text-amber-400',
    benefits: [
      'Logo on rover chassis',
      'Logo on website (medium)',
      'Recognition at events',
      'Competition day access',
      'Progress reports',
      'Social media features',
    ],
  },
  {
    name: 'Silver',
    range: '$2,000 – $4,999',
    featured: false,
    accent: 'text-slate-500 dark:text-slate-400',
    benefits: [
      'Logo on website',
      'Recognition at events',
      'Social media features',
      'Newsletter mentions',
    ],
  },
  {
    name: 'Bronze',
    range: '$500 – $1,999',
    featured: false,
    accent: 'text-orange-700 dark:text-orange-400',
    benefits: ['Website mention', 'Social media feature', 'Thank you note'],
  },
  {
    name: 'Supporter',
    range: 'Under $500 or in-kind',
    featured: false,
    accent: 'text-teal-600 dark:text-teal-400',
    benefits: [
      'Recognition as supporter',
      'Social media mention',
      'Thank you note',
    ],
  },
];

export default function SponsorshipTiers() {
  return (
    <section id="sponsorship" className="bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Partner with us
          </p>
          <h2 className="text-h2 text-ink">Sponsorship Tiers</h2>
          <p className="mt-4 text-body-lg text-muted">
            Multiple ways to support cutting-edge student robotics.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 75} className="h-full">
              <div
                className={`relative h-full rounded-lg bg-card p-6 shadow-sm ${
                  tier.featured
                    ? 'border-2 border-accent'
                    : 'border border-line'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-label font-semibold text-white">
                    Flagship
                  </span>
                )}
                <h3 className="text-h4 text-ink">{tier.name}</h3>
                <p className={`mt-1 mb-4 text-body-sm font-semibold ${tier.accent}`}>
                  {tier.range}
                </p>
                <ul className="space-y-2 border-t border-line pt-4">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-body-sm text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-body text-muted">
            Have a custom sponsorship idea? We&apos;d love to create a
            partnership that fits your needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/sponsorship-prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-6 py-3 text-body font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Download the Prospectus (PDF)
            </a>
            <a
              href="mailto:admin@rover.uwarobotics.com.au"
              className="rounded-md border border-accent px-6 py-3 text-body font-semibold text-accent transition-colors hover:bg-accent-tint"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
