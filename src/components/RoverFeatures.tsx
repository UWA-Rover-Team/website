import Reveal from './Reveal';

const features = [
  {
    title: 'Autonomous Navigation',
    description:
      'Advanced GPS, SLAM, and computer vision systems for autonomous exploration and obstacle detection.',
    chip: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  },
  {
    title: 'Robotic Manipulator',
    description:
      'Precision 5-axis arm for sample collection, soil analysis, and construction tasks.',
    chip: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: 'Science Payload',
    description:
      'Integrated sensors and instruments for geological analysis and environmental data collection.',
    chip: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
    icon: (
      <>
        <path d="M10 2v7.5a2 2 0 0 1-.21.9L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14.21 10.4a2 2 0 0 1-.21-.9V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </>
    ),
  },
  {
    title: 'Power Systems',
    description:
      'High-capacity battery systems and power distribution for extended mission duration.',
    chip: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: 'Drivetrain & Chassis',
    description:
      'All-terrain suspension and specialized wheels for extreme terrain traversal.',
    chip: 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v7" />
        <path d="M12 15v7" />
        <path d="M2 12h7" />
        <path d="M15 12h7" />
      </>
    ),
  },
  {
    title: 'Teleoperations',
    description:
      'Real-time control systems and telemetry for remote rover operation and monitoring.',
    chip: 'bg-teal-100 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400',
    icon: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
        <path d="M19.1 4.9c3.9 3.9 3.9 10.3 0 14.2" />
      </>
    ),
  },
];

export default function RoverFeatures() {
  return (
    <section id="rover" className="bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            The rover
          </p>
          <h2 className="text-h2 text-ink">Engineered Across Six Systems</h2>
          <p className="mt-4 text-body-lg text-muted">
            Each rover integrates work from every discipline on the team, from
            mechanical design through to autonomy software.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 75} className="h-full">
              <div className="h-full rounded-lg border border-line bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-md ${feature.chip}`}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-h4 text-ink">{feature.title}</h3>
                <p className="text-body-sm text-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
