import Image from 'next/image';
import Reveal from './Reveal';

const tasks = [
  {
    number: '01',
    color: 'text-blue-600 dark:text-blue-400',
    title: 'Post-Landing',
    description:
      'Assess and document the landing site, analyze geological conditions, and transmit findings.',
  },
  {
    number: '02',
    color: 'text-teal-600 dark:text-teal-400',
    title: 'Space Resources',
    description:
      'Locate and extract valuable resources, test extraction equipment, and verify resource viability.',
  },
  {
    number: '03',
    color: 'text-violet-600 dark:text-violet-400',
    title: 'Excavation & Construction',
    description:
      'Perform precision excavation, move materials, and construct structures on the terrain.',
  },
  {
    number: '04',
    color: 'text-amber-600 dark:text-amber-400',
    title: 'Autonomous Navigation',
    description:
      'Navigate autonomously to GPS waypoints, map the area, and complete tasks without remote control.',
  },
];

export default function Competition() {
  return (
    <section id="competition" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
              The competition
            </p>
            <h2 className="text-h2 text-ink">
              The Australian Rover Challenge
            </h2>
            <p className="mt-4 text-body text-muted">
              Held annually at the University of Adelaide&apos;s Roseworthy
              Campus, the Australian Rover Challenge (ARCh) is an engineering
              competition where university teams complete simulated space
              exploration missions on a lunar test field.
            </p>
            <p className="mt-4 text-body text-muted">
              ARCh requires rovers that can handle extreme terrain, uncertain
              conditions, and complex tasks. WARP is proud to be the first
              Western Australian team to compete, and we return every year
              aiming higher.
            </p>
          </Reveal>

          <Reveal delay={150} className="overflow-hidden rounded-lg border border-line">
            <Image
              src="/images/DSC_0854.JPG"
              alt="The WARP rover navigating the competition arena at ARCh"
              width={595}
              height={398}
              className="h-full w-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {tasks.map((task, i) => (
            <Reveal key={task.number} delay={i * 75} className="h-full">
              <div className="h-full rounded-lg border border-line bg-card p-6 shadow-sm">
                <p className={`text-h3 font-bold ${task.color}`}>
                  {task.number}
                </p>
                <h3 className="mt-2 mb-2 text-h4 text-ink">{task.title}</h3>
                <p className="text-body-sm text-muted">{task.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
