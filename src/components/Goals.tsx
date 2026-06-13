import Reveal from './Reveal';

const goals = [
  {
    number: '01',
    title: 'R&D Hub for Space Technologies',
    body: 'We aim to establish WARP as UWA\'s premier research and development hub for space-related technologies — incubating innovations in autonomous robotics, life detection systems, and planetary surface operations that have real-world applications beyond the competition floor.',
    accent: 'border-blue-500',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    number: '02',
    title: 'International Competition',
    body: 'Our sights are set on the global stage. We are building toward competing at the University Rover Challenge (URC) in the United States — one of the most prestigious student rover competitions in the world — while continuing to podium at the Australian Rover Challenge.',
    accent: 'border-violet-500',
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  },
  {
    number: '03',
    title: 'Engineering Excellence',
    body: 'We commit to building rovers that push the limits of what student teams can achieve — full custom mechanical assemblies, bespoke electronics, and sophisticated autonomy software — while mentoring the next cohort of engineers through hands-on, mission-critical work.',
    accent: 'border-teal-500',
    badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  },
];

export default function Goals() {
  return (
    <section id="goals" className="bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Where we&apos;re headed
          </p>
          <h2 className="text-h2 text-ink">Our Goals</h2>
          <p className="mt-4 text-body text-muted">
            WARP is more than a competition team — we are building something
            lasting at UWA and putting Western Australia on the global space
            technology map.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {goals.map((goal, i) => (
            <Reveal key={goal.number} delay={i * 120}>
              <div className={`h-full rounded-lg border-t-4 ${goal.accent} bg-card p-6 shadow-sm`}>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-label font-semibold ${goal.badge} mb-4`}>
                  {goal.number}
                </span>
                <h3 className="mb-3 text-h4 text-ink">{goal.title}</h3>
                <p className="text-body-sm text-muted">{goal.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
