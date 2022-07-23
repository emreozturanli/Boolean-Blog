import { createContext, useState, useEffect} from "react";
import { auth} from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [user, setUser] = useState('');

    // when the page is opened, setting user to the currentusers info
    useEffect(() => {
        currentUser(setUser)
    }, [])

    //resetting input fields after register
    const resetInputs = () => {
        setEmail('')
        setPassword('')
        setFname('')
        setLname('')
    }


// registering a new user with firebase
 const register = async (e,navigate) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password, fname, lname)
      const displayName = `${fname} ${lname}`
      await updateProfile(auth.currentUser, {displayName: displayName})
      toast.success('User succesfully registered')
      navigate("/")
      resetInputs();
      
    } catch (err) {
      toast.error(err.message)
    }
  }
  
  //logging in a user with firebase with email and password
  const login = async (e,navigate) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('user succesfully logged in')
      navigate("/")
      resetInputs();
      
    } catch (err) {
      toast.error(err.message)
    }
  }
  
  //logging out the user 
const logout = async (navigate) => {
    try {
      await signOut(auth)
      toast.success('Logged out succesfully')
      navigate("/")
    } catch (err) {
      toast.error(err.message)
    }
  }
  
  //For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.
  // Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer.
  const currentUser = async (setUser)=>{
    try{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          setUser(user)
        }else{
          setUser('')
        }
      })
    }catch(err){
      toast.error(err.message)
    }
  }
  
  // enabling signing in with google account
 const provider = new GoogleAuthProvider();
  
const  googleSignIn = (e,navigate)=>{
  e.preventDefault();
    try{
       signInWithPopup(auth, provider)
      .then(()=>{
        navigate('/')
      })
  
    }catch(err){
      toast.error(err)
    }
  }


return (
        <AuthContext.Provider value={{
            logout,
            email, 
            password, 
            setEmail, 
            setPassword, 
            login, 
            register,
            fname, 
            lname, 
            setFname, 
            setLname,
            googleSignIn,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider