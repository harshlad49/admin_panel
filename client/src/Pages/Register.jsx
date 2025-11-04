import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
   const URL = "http://localhost:5000/api/auth/register"
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending:", user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
         setUser({
            username: "",
            email: "",
            phone: "",
            password: "",
         })
         
        navigate("/login");
      } else {
        alert(data.msg || "Something went wrong.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register.");
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid-two-cols">
            <div className="registration-image">
              <img
                src="/images/register.png"
                alt="register"
                width="500"
                height="500"
              />
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
