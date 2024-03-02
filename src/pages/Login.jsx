import { useState, useEffect } from "react";

//import API
import {login} from "../api/Api";

//import js cookie
import Cookies from "js-cookie";

//import react router dom
import { useNavigate } from "react-router-dom";

//import toast
import toast from "react-hot-toast";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  document.title = "Login";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(email, password);

      Cookies.set("token", response.token);
      Cookies.set("user", JSON.stringify(response.user));
      Cookies.set("permissions", JSON.stringify(response.permissions));

      toast.success("Login Successfully!", {
        position: "top-right",
        duration: 4000,
      });

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        console.error("An error occurred:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <section className="w-full h-full bg-blue-400 flex -mt-8 pb-[24rem] sm:pb-[5.5rem]">
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
       </ul>
     )}
        <div className="mx-auto grid border my-20 sm:my-24 sm:py-16 py-8 sm:px-12 rounded-lg gap-3 bg-slate-50 sm:w-[25rem] w-80">
          <h1 className="mx-auto capitalize text-2xl sm:text-3xl font-bold">
            sign in
          </h1>
          <h2 className="mx-auto text-lg sm:text-xl">dont have an account?</h2>
          <form onSubmit={handleLogin} className="mx-auto">
          <div className="mx-auto">
            <label htmlFor="email">
              <h1 className="mb-3 text-lg font-semibold">Email</h1>
              <input
                type="email"
                value={email}
                className="px-2 py-2 rounded-md sm:w-80 w-64 bg-slate-200"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mx-auto ">
            <label htmlFor="password">
              <h1 className="mb-3 font-semibold text-lg">Password</h1>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="py-2 px-2 rounded-md sm:w-80 w-64 bg-slate-200"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mx-auto mt-5">
          <button type="submit" disabled={loading} className="rounded-md bg-cyan-700 px-10 py-2 items-center">
  <span className="text-lg text-slate-100 items-center font-semibold" >Sign in</span>
</button>
            
          </div>
          </form>
        </div>
      </section>
    </>
  );
}
