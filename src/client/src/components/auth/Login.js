import React, { useState, useContext, useEffect } from 'react';
import '../../pages/assets/scss/pages.scss';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    
    const { setAlert } = alertContext;
    const { login, error, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    
    if(isAuthenticated === null){
      // console.log('attempt to load the user');
      loadUser();
    }
    
    if(isAuthenticated){
      props.history.push('/dashboard');
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser ] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user; //this is taken from the useState hook for user as seen above

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      })
    }
  }

  return (
    <section className="page-container login">
      <div className="page-wrapper login-page">
        <div className="form-container">
          <h1>login to your account</h1>
          <form className="signup-login" onSubmit={onSubmit}>
            <div className="field-row title">
              <h3>Enter your account details</h3>
            </div>
            <div className="field-row input">
              <input type="email" name="email" value={email} onChange={onChange} autoComplete="off" placeholder="Enter your email address" required/>
            </div>
            <div className="field-row input">
              <input type="password" name="password" value={password} onChange={onChange} autoComplete="off" placeholder="Enter your password" required/>
            </div>
            <div className="field-row button">
              <button type="submit" value="Login"> login </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;