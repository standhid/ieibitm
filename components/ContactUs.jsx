import React, { useState } from "react";
import { validateEmail} from "../utils/validation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
function Heading() {
  return (
    <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16">
      Contact Us
      </div>
  );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    setLoading(true);
    if (name === "" || email === "" || message === "") {
      setLoading(false);
      return alert("Please fill all the fields");
    } else if (validateEmail(email) === false) {
      setLoading(false);
      return alert("Please enter a valid email address");
    }
    const data = {
      name,
      email,
      message,
    };
    try {
      const res = await setDoc(doc(db, "contact-data", `${email}`), data);
      console.log(res);
      setName("");
      setEmail("");
      setMessage("");
      alert("Your message has been sent successfully");
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
  return (
     <div className="relative h-max" id="contact">
      <div className="relative container py-12 px-6 mx-auto">
        <div className="relative bg-[#000] p-8 rounded-md">
        
        <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-300 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
              Contact Us
            </div>
          <div className="flex flex-col text-center w-full my-8">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              Do contact us for any queries or Sponsorship related queries.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-blue-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-blue-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-blue-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={sendData} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 transition-all duration-300 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-blue-500">Email: bitmesraieicivil@gmail.com</a>
                <p className="leading-normal my-5 text-white">
                Phone: +91 9694079406
                </p>
                <p className="leading-normal my-5 text-white">
                  Address: Birla Institute of Technology, Mesra, Ranchi, Jharkhand
                </p>
              </div>
            </div>
          </div>
        
      </div></div>
     </div>
  );
};

export default Contact;
