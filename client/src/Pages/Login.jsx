import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending:", user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        console.log("Login successful, server response:", data);

        // Store token in localStorage
        if (data.token) {
          localStorage.setItem("token", data.token);
        } else {
          console.warn("No token received from server!");
        }

        // Clear form
        setUser({
          email: "",
          password: "",
        });

        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.msg || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to login. Please try again later.");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="secction-login">
            <div className="container grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="a girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
