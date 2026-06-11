import Reveal from './Reveal';

const leads = [
  { name: 'Edwin Mathew', role: 'Project Lead', avatar: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400' },
  { name: 'Prashan Wijesinghe', role: 'Electronics Lead', avatar: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400' },
  { name: 'Zac Cole', role: 'Drivetrain Lead', avatar: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400' },
  { name: 'Armaan Chawla', role: 'Science Lead', avatar: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400' },
  { name: 'Aaron Teo', role: 'Manipulator Lead', avatar: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400' },
  { name: 'Alex Valiukas', role: 'Autonomy Lead', avatar: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400' },
  { name: 'Jordan Lanagan', role: 'Communications Lead', avatar: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400' },
  { name: 'Jia Xin', role: 'Marketing Lead', avatar: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-400' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

export default function Team() {
  return (
    <section id="team" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            The people
          </p>
          <h2 className="text-h2 text-ink">Meet the Team</h2>
          <p className="mt-4 text-body-lg text-muted">
            The leads driving WARP forward, backed by a team of 40+ students
            across every engineering discipline.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {leads.map((lead, i) => (
            <Reveal key={lead.name} delay={i * 50} className="h-full">
              <div className="h-full rounded-lg border border-line bg-card p-6 text-center shadow-sm">
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-h4 ${lead.avatar}`}
                >
                  {initials(lead.name)}
                </div>
                <h3 className="text-body font-semibold text-ink">
                  {lead.name}
                </h3>
                <p className="mt-1 text-body-sm text-muted">{lead.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
