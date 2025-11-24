// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const DUMMY_PASSWORD = "admin123"; // dev-only

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // Login flow: check dummy password
      if (password === DUMMY_PASSWORD) {
        localStorage.setItem("cb_auth", "true");
        // optionally store an object: localStorage.setItem('cb_user', JSON.stringify({email}))
        navigate("/dashboard");
      } else {
        setError("Incorrect password. (dev password is admin123)");
      }
      return;
    }

    // Signup flow (demo): you can add validation here
    if (!fullname || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    // In a real app you'd post to backend here. For demo, just "create" and navigate.
    localStorage.setItem("cb_auth", "true");
    localStorage.setItem("cb_user", JSON.stringify({ fullname, email }));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Your Account 🚀"}
        </h2>

        {error && <div className="text-sm text-red-600 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <p className="text-xs text-gray-400 mt-2">
              For demo: use <span className="font-medium">admin123</span> to login.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="text-blue-600 font-semibold hover:underline">
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="text-blue-600 font-semibold hover:underline">
                Login
              </button>
            </>
          )}
        </p>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
       <Footer />
    </div>
  );
}
