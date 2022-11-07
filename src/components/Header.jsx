import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 bg-gray-100">
      {/* for PC */}
      <div className="hidden md:flex w-full h-full  p-4 items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2 ">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8">
            <li
              className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => {
                setIsMenu(false);
              }}>
              Home
            </li>
            <li
              className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => {
                setIsMenu(false);
              }}>
              Menu
            </li>
            <li
              className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => {
                setIsMenu(false);
              }}>
              About Us
            </li>
            <li
              className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out"
              onClick={() => {
                setIsMenu(false);
              }}>
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-700 flex item justify-center">
              <p className="text-xs text-white font-semibold ">2</p>
            </div>
          </div>

          <div className="relative ">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40] h-10 min-h-[40] drop-shadow-2xl cursor-pointer rounded-full"
              alt="userProfile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {user && user?.user?.email === "dovantuan1404@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out
                      text-base"
                      onClick={() => {
                        setIsMenu(false);
                      }}>
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out
                    text-base"
                  onClick={logout}>
                  Logout <MdLogout />{" "}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-700 flex item justify-center">
            <p className="text-xs text-white font-semibold ">2</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2 ">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40] h-10 min-h-[40] drop-shadow-2xl cursor-pointer rounded-full"
            alt="userProfile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col 
              absolute top-12 right-0">
              {user && user?.user?.email === "dovantuan1404@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center
                    cursor-pointer hover:bg-slate-200 transition-all 
                    duration-100 ease-in-out
                      text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex flex-col">
                <li className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2">
                  Home
                </li>
                <li className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2">
                  Menu
                </li>
                <li className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2">
                  About Us
                </li>
                <li className="text-base text-Color hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2">
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 hover:bg-gray-300 gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out
                    text-base
                    "
                onClick={logout}>
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
