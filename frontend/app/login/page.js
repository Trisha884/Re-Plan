import Link from "next/link";
export default function Login() {
  return (
    <div className=" bg-gray-100 text-gray-800">
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <h1 className="text-2xl font-bold">RePlan.</h1>
        <Link href="/" className="text-gray-600">
          ← Back to Home
        </Link>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-gray-500 mt-2">
          Continue your journey. One step at a time.
        </p>
      </div>
      <div className="bg-white w-96 mx-auto mt-8 p-8 rounded-lg shadow">
        <div className="mb-5">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded">
          Login
        </button>

        <p className="text-center mt-6 text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}