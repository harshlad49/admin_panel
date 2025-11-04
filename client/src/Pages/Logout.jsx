import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate(); 
  const URL = "http://localhost:5000/api/auth/logout";

  useEffect(() => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/"); 
        }
      });
  }, [navigate]);

  return null;
};
