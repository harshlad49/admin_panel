import { useState } from "react";
// import { useAuth } from "../store/auth";
// import { useEffect } from "react";
export const Contact = () => {
  const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};


  const [contact, setContact] = useState(defaultContactFormData);

  // const [userData, setUserData] = useState(true);

  // const { user, API } = useAuth();
  // useEffect(() => {
  //   if (user) {
  //     setContact({
  //       username: user.username,
  //       email: user.email,
  //       message: "",
  //     });
  //   }
  // }, [user]
// );
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; 

   const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch(`${API}/api/form/contact`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(contact),
    //   });

    //   if (response.ok) {
    //     setContact(defaultContactFormData);
    //     const data = await response.json();
    //     console.log(data);
    //     alert("Message send successfully");
    //   }
    // } catch (error) {
    //   alert("Message not send");
    //   console.log(error);
    // }
  };
  return   <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.453953547542!2d73.3396338!3d22.288329800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fdb7aad515c9d%3A0x4ad5d4da80842f61!2sCode%20Hostels%20-%20Maple%20House%20-Hostel%20Near%20Parul%20University%20(%20BOYS%20%26%20GIRLS%20PG)!5e0!3m2!1sen!2sin!4v1748271010845!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
};