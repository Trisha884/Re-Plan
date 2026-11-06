
export default function About() {
  return (
    <main className="min-h-screen bg-stone-950 px-8 py-16 text-stone-200">
      <div className="mx-auto max-w-5xl">

        <p className="mb-4 text-sm tracking-widest text-amber-400">
          GET TO KNOW US
        </p>

        <h1 className="mb-6 text-4xl font-bold text-amber-200 md:text-5xl">
          About RePlan.
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-stone-400">
          RePlan is a goal planning and progress tracking platform designed
          to help people turn their ambitions into achievable steps.
          It encourages users to stay consistent, track their progress
          and adjust their plans when things don't go as expected.
        </p>

        <section className="mt-14">
          <h2 className="mb-4 text-2xl font-semibold text-amber-200">
            The Problem
          </h2>

          <p className="leading-8 text-stone-400">
            We often set goals with excitement, but deadlines, unexpected
            challenges and busy schedules can make it difficult to stay
            consistent. Missing one deadline can sometimes make us feel
            like we have failed completely.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-amber-200">
            Our Solution
          </h2>

          <p className="leading-8 text-stone-400">
            RePlan makes goal management more flexible. Users can create
            goals, organise them by priority, follow their schedules and
            track completed work. When a deadline is missed, they can
            create a new plan and continue without losing their progress.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-semibold text-amber-200">
            How It Works
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["01", "Create Goals", "Add the goals you want to achieve."],
              ["02", "Set Priorities", "Organise your goals based on importance."],
              ["03", "Track Progress", "Follow your schedule and mark goals complete."],
              ["04", "Re-Plan", "Adjust missed deadlines and keep moving forward."]
            ].map((item) => (
              <div key={item[0]} className="rounded-xl bg-stone-900 p-6">
                <p className="mb-3 text-amber-400">{item[0]}</p>
                <h3 className="mb-2 text-xl font-semibold text-amber-200">
                  {item[1]}
                </h3>
                <p className="leading-7 text-stone-400">{item[2]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-stone-800 pt-8">
          <h2 className="mb-4 text-2xl font-semibold text-amber-200">
            Our Philosophy
          </h2>

          <p className="text-xl leading-8 text-stone-300">
            Progress is not about following a perfect plan.
            It's about finding a way forward, even when plans change.
          </p>
        </section>

      </div>
    </main>
  );
}