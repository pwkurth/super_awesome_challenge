import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validForm, setValidForm] = useState(false);

  let parentCallBack = props?.parentCallBack;
  let openModal = false;

  const handleCallBack = () => parentCallBack(openModal);
  const handleClick = () => {
    navigate("/super_awesome_challenge/home");
  };

  const handleEmail = () => {
    setEmail(event.target.value);
    formValid();
  };

  const handlePassword = () => {
    setPassword(event.target.value);
    formValid();
  };

  const formValid = () => {
    if (password && email) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  };

  return (
    <div
      tabIndex="-1"
      className="absolute w-full p-4  md:inset-0 h-modal md:h-full "
    >
      <div className="relative font-poppins w-full h-full mx-auto mt-32 max-w-md md:h-auto ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => handleCallBack()}
            type="button"
            className="absolute top-3 right-2.5 text-green-400 bg-transparent hover:bg-slate-600 hover:text-green-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-white hover:text-green-400">
              Sign in to our platform
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={(event) => handleEmail(event)}
                  value={email}
                  id="email"
                  type="email"
                  className="text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="Jb.thegreatest@aol.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  onChange={(event) => handlePassword(event)}
                  value={password}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                onClick={() => (validForm ? handleClick() : null)}
                className={`w-full text-white 
               ${
                 validForm
                   ? "opacity-1 cursor-pointer"
                   : "opacity-60 cursor-not-allowed"
               }
                focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-800`}
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
