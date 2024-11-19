import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import AuthContext from "../../contexts/AuthContext";



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        createNewUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;