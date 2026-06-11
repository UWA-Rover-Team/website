import Reveal from './Reveal';

export default function Recruitment() {
  return (
    <section id="recruitment" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-2 text-label font-semibold tracking-widest text-accent uppercase">
            Join us
          </p>
          <h2 className="text-h2 text-ink">We're Recruiting</h2>
        </Reveal>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-4 text-body-lg text-muted">
              Are you passionate about engineering, robotics, and space exploration? WARP is always looking for talented students across all disciplines to join our team.
            </p>
            <p className="mb-6 text-body text-muted">
              Whether you're interested in mechanical design, electronics, software development, autonomy, or project management — there's a place for you. Experience isn't required, just enthusiasm and a willingness to learn.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="shrink-0 text-accent font-bold">✓</div>
                <p className="text-body text-muted">Work on cutting-edge planetary rover technology</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-accent font-bold">✓</div>
                <p className="text-body text-muted">Collaborate with 40+ passionate engineers</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-accent font-bold">✓</div>
                <p className="text-body text-muted">Compete at the national Australian Rover Challenge</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-accent font-bold">✓</div>
                <p className="text-body text-muted">Develop real-world engineering skills</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="rounded-lg bg-gradient-to-br from-accent-tint to-violet-100 p-8 md:p-12 dark:to-violet-500/10">
            <h3 className="mb-4 text-h3 text-ink">Get Started</h3>
            <p className="mb-6 text-body text-muted">
              Join our Discord community to learn more, ask questions, and connect with the team. We welcome students of all skill levels and disciplines.
            </p>
            <a
              href="https://discord.gg/Tytvwmn5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-body font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join our Discord
            </a>
            <p className="mt-6 text-body-sm text-muted">
              Questions? Reach out to us at{' '}
              <a
                href="mailto:admin@rover.uwarobotics.com.au"
                className="text-accent hover:underline"
              >
                admin@rover.uwarobotics.com.au
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
