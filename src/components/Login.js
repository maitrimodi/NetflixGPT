import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    // Implement toggle logic here
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //  Validate the form data
    let msg = '';
    if (isSignInForm) {
      msg = checkValidData(email.current.value, password.current.value);
    } else {
      msg = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }

    setErrorMessage(msg);

    if (!msg) {
      // Create a new user or sign in the user
      if (!isSignInForm) {
        // SignUp logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: 'https://avatars.githubusercontent.com/u/38577874?v=4',
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate('/browse');
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage);
            // ..
          });
      } else {
        // SignIn logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/browse');

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/US-en-20260105-TRIFECTA-perspective_036b5cbc-d76f-49ac-af5e-93bb0d612737_large.jpg"
        className="w-full fixed object-cover"
        alt="Login Background"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-16 bg-black absolute w-[30%] my-36 mx-auto right-0 left-0 text-white justify-center align-center bg-opacity-80 items-center"
      >
        <h1 className="text-white text-3xl mb-10 font-bold">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md mb-5"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 mb-5 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 bg-black text-grey border border-white justify-center align-center w-[100%] rounded-md"
        />
        <p className="text-red-500 mt-5">{errorMessage}</p>
        <button
          className="p-4 bg-red-700 w-full mt-10 rounded-md block"
          onClick={handleButtonClick}
        >
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
        <p className="mt-5 text-md flex flex-row cursor-pointer">
          <span className="text-gray-500 mr-2">
            {isSignInForm ? 'New to Netflix?' : 'Already have an account?'}
          </span>
          <p onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign up now' : 'Sign in now'}
          </p>
        </p>
        <p className="text-gray-500 mt-5 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <p className="text-gray-500 text-sm">
          <Link href="#" className="text-blue-700 underline">
            Learn more.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
