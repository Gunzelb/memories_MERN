import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import useStyles from './styles';

const GLogin = (props) => {
    const [user, loading, error] = useAuthState(auth);
    const { classes } = useStyles();
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
          }
          if (user) navigate("/");
        }, 
    );

    return (
        <button className={classes.googleButton} color='primary' fullWidth variant='contained' onClick={signInWithGoogle}>
          Login with Google
        </button>
    );
};

export default GLogin;