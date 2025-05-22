import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimage from "../assets/logo.png";
import backgroundBanner from "../assets/background_banner.jpg";
import { login, signup } from "../firebase";
import netflix_spinner from "../assets/netflix_spinner.gif";
const Login = () => {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleState = () => {
    setSignState(signState === "Login" ? "Sign Up" : "Login");
    setError("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "rememberMe":
        setRememberMe(type === "checkbox" ? checked : value);
        break;
      default:
        break;
    }
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Login") {
        await login(email, password);
        navigate("/");
      } else {
        await signup(name, email, password);
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication error: ", error);
      setError(error.message);
    }
    setLoading(false);
  };
  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={netflix_spinner} alt="" className="w-[60px]" />
    </div>
  ) : (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundBanner})`,
      }}
    >
      <img src={logoimage} alt="Netflix Logo" className="w-[10rem] p-4" />

      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-black/60 p-12 rounded-lg w-full max-w-md mt-20">
          <h1 className="text-4xl text-center mb-6 font-semibold">
            {signState}
          </h1>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            {signState === "Sign Up" && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded text-white"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded text-white"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded text-white"
              required
            />

            <button
              type="submit"
              className="bg-red-600 py-3 rounded-lg text-2xl font-semibold hover:bg-red-500 transition-colors"
            >
              {signState}
            </button>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Need Help?
              </a>
            </div>
          </form>

          <div className="mt-6 text-gray-400">
            <p className="flex items-center gap-1">
              {signState === "Login"
                ? "New to Netflix?"
                : "Already have an account?"}
              <button
                type="button"
                onClick={handleState}
                className="text-white font-semibold  cursor-pointer"
              >
                {signState === "Login" ? "Sign Up now" : "Login now"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
