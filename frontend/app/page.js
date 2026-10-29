export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Project1!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is our first Next.js project.
      </p>

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Get Started
      </button>
    </main>
  );
}
