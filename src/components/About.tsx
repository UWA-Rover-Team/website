import Image from 'next/image';
import Reveal from './Reveal';

const blocks = [
  {
    title: 'Who We Are',
    text: 'WARP is a multidisciplinary student engineering team at the University of Western Australia comprising 40+ passionate engineers and makers. We design, build, and test fully custom planetary rovers to compete in the Australian Rover Challenge.',
  },
  {
    title: 'What We Do',
    text: 'We tackle complex engineering challenges in mechanical design, electrical systems, autonomous navigation, and software development. Our rovers are built from scratch each year, incorporating the latest innovations in robotics and autonomous systems.',
  },
  {
    title: 'Our Mission',
    text: 'To design and build cutting-edge planetary rovers while developing the next generation of engineers. We push the boundaries of what is possible in student robotics and create real-world solutions to space exploration challenges.',
  },
];

const stats = [
  { value: '40+', label: 'Team members', color: 'text-accent' },
  { value: '4', label: 'Engineering disciplines', color: 'text-teal-600 dark:text-teal-400' },
  { value: '2', label: 'National competitions', color: 'text-violet-600 dark:text-violet-400' },
  { value: '1st', label: 'WA team at ARCh', color: 'text-amber-600 dark:text-amber-400' },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Who we are
          </p>
          <h2 className="text-h2 text-ink">About WARP</h2>
        </Reveal>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-8">
            {blocks.map((block) => (
              <div key={block.title}>
                <h3 className="mb-2 text-h4 text-ink">{block.title}</h3>
                <p className="text-body text-muted">{block.text}</p>
              </div>
            ))}
            <p className="border-l-2 border-accent pl-4 text-body-sm text-muted">
              Supported by the UWA School of Engineering and the
              International Space Centre (ISC).
            </p>
          </Reveal>

          <Reveal delay={150} className="overflow-hidden rounded-lg border border-line">
            <Image
              src="/images/team-pic.jpg"
              alt="WARP team members operating the rover from the control station"
              width={968}
              height={648}
              className="h-full w-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-12 md:mt-16 md:grid-cols-4 md:pt-16">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className={`text-h2 ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-body-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
