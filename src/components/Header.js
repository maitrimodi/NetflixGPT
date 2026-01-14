import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black px-8 flex justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <img
            alt="userIcon"
            src={user?.photoURL}
            className="mr-5 w-10 h-10 cursor-pointer m-4"
          />
          {/* <p className="mt-7 mr-3 text-bold text-white underline">
            {user?.displayName}
          </p> */}
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
