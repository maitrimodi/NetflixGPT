import { Link } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    // Implement toggle logic here
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/US-en-20260105-TRIFECTA-perspective_036b5cbc-d76f-49ac-af5e-93bb0d612737_large.jpg"
        className="w-full absolute"
        alt="Login Background"
      />

      <form className="p-16 bg-black absolute w-[30%] h-[85%] my-36 mx-auto right-0 left-0 text-white justify-center align-center bg-opacity-80 items-center">
        <h1 className="text-white text-4xl mb-10 font-bold">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md mb-5"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 mb-5 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md"
        />
        <button className="p-4 bg-red-700 w-full mt-10 rounded-md block">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <h3 className="text-center mt-5">OR</h3>
        <button className="p-4 w-full mt-5 rounded-md opacity-85 bg-gray-800 text-bold">
          Use a Sign-In Code
        </button>
        <button className="text-lg text-center block mt-5 underline underline-offset-4 bg-none border-none cursor-pointer p-0">
          Forgot Password?
        </button>
        <label className="flex items-center space-x-3 mt-7">
          <input type="checkbox" className="scale-150" />
          <span className="ml-2"> Remember me</span>
        </label>
        {}
        <h6 className="mt-5 text-xl flex flex-row cursor-pointer">
          <span className="text-gray-500 mr-2">
            {isSignInForm ? 'New to Netflix?' : 'Already have an account?'}
          </span>
          <p onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign up now' : 'Sign in now'}
          </p>
        </h6>
        <h6 className="text-gray-500 mt-10">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </h6>
        <h6>
          <Link href="#" className="text-blue-700 underline">
            Learn more.
          </Link>
        </h6>
      </form>
    </div>
  );
};

export default Login;
