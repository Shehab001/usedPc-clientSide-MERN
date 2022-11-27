import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const [state, setState] = useState(true);
  const [dbuser, setDbuser] = useState({});
  console.log(dbuser);

  const providerLogin = (provider) => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const fetchUser = () => {
    console.log("hola", user);
    // fetch(`http://localhost:5000/user/${user.uid}`)
    //   .then((res) => res.json())
    //   .then((data) => setDbuser(data[0]));
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      setUser(currentUser);

      fetch(`http://localhost:5000/user/${currentUser.uid}`)
        .then((res) => res.json())
        .then((data) => setDbuser(data[0]));
      // fetchUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    loading,
    hide,
    setHide,
    state,
    setState,
    fetchUser,
    dbuser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
