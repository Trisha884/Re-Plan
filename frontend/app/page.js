import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1>RePlan.</h1>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>

      <div>
        <p>YOUR JOURNEY, YOUR RULES</p>

        <h2>
          Stop Waiting.
          <br />
          Start Progressing.
        </h2>

        <p>
          Turn your goals into achievable roadmaps.
          Take small steps, meet your milestones and
          make progress one day at a time.
        </p>
        <Link href="/login">Get Started →</Link>
      </div>

      <div>
        <h2>A Better Way to Reach Your Goals.</h2>

        <p>Everything you need to turn intentions into action.</p>

        <div>
          <div>
            <h3>Plan It</h3>
            <p>Break your big goals into smaller and achievable steps.</p>
          </div>

          <div>
            <h3>Track It</h3>
            <p>Keep track of your milestones and stay on your roadmap.</p>
          </div>

          <div>
            <h3>Achieve It</h3>
            <p>Celebrate every little victory as you move forward.</p>
          </div>
        </div>
      </div>

      <div>
        <p>Make Every Step Count. | RePlan.</p>
      </div>

    </div>
  );
}