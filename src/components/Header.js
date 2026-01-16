import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { IoSearch } from 'react-icons/io5';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  const handleGPTSearchClick = () => {
    // Toggle GPT search visibility
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

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
          }),
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

  return (
    <div className=" fixed top-0 left-0 w-full p-0 md:px-8 bg-gradient-to-b from-black z-50 flex flex-row justify-between">
      <img
        className="w-36 md:w-44 cursor-pointer active:scale-95 hover:opacity-80 md:mx-0"
        src={LOGO}
        alt="Logo"
        onClick={handleGPTSearchClick}
      />

      {user && (
        <div className="flex p-0 md:p-2">
          <button onClick={handleGPTSearchClick} className="active:scale-95">
            <IoSearch className="text-white size-5 mr-3" />
          </button>
          {showGptSearch && (
            <select
              className="mr-3 px-2 h-8 mt-3 bg-red-700 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.identifier.slice(0, 2).toUpperCase()}
                </option>
              ))}
            </select>
          )}

          <img
            alt="userIcon"
            src={user?.photoURL}
            className="w-8 h-8 md:w-10 md:h-10 mr-3 mt-3 md:mt-2 rounded-sm"
          />
          <button className="text-white mr-2 md:mr-0" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
