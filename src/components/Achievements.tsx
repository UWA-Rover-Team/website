import Reveal from './Reveal';

const achievements = [
  {
    year: '2024–2025',
    title: 'Breaking New Ground',
    position: '15th of 24 teams',
    highlight: 'First WA team to compete',
    stripe: 'border-l-blue-500',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
    description:
      'Our inaugural competition saw WARP make history as the first Western Australian team to compete at ARCh. Despite being newcomers, we delivered a fully functional rover and proved our engineering capabilities on the national stage.',
  },
  {
    year: '2025–2026',
    title: 'Building Momentum',
    position: '14th of 30 teams',
    highlight: 'Retained working rover platform',
    stripe: 'border-l-teal-500',
    badge: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400',
    description:
      'With a growing team and refined systems, we improved our standings while competing against significantly more teams. We successfully retained and upgraded our rover platform, setting the foundation for future innovations.',
  },
  {
    year: '2026–2027',
    title: 'Aiming Higher',
    position: 'Top 10 goal',
    highlight: 'Full autonomy & modular redesign',
    stripe: 'border-l-violet-500',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400',
    description:
      'Our vision is ambitious: break into the top 10, achieve full autonomous operation without remote control, and implement a completely modular rover design for enhanced adaptability and performance.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Our journey
          </p>
          <h2 className="text-h2 text-ink">Past Achievements</h2>
          <p className="mt-4 text-body-lg text-muted">
            From our inaugural competition to our goals for next season.
          </p>
        </Reveal>

        <div className="space-y-6">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.year} delay={i * 100}>
              <div
                className={`rounded-lg border border-line border-l-4 bg-card p-6 shadow-sm md:p-8 ${achievement.stripe}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                  <div className="md:w-40 md:shrink-0">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-label font-semibold ${achievement.badge}`}
                    >
                      {achievement.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-h3 text-ink">{achievement.title}</h3>
                      <div className="sm:text-right">
                        <p className="text-h4 text-accent">
                          {achievement.position}
                        </p>
                        <p className="text-label text-muted">
                          {achievement.highlight}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-body text-muted">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
