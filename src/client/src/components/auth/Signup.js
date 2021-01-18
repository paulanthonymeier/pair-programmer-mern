import React, { useState, useContext, useEffect } from 'react';
import '../../pages/assets/scss/pages.scss';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Register = (props) => {

	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated, loadUser } = authContext;

	useEffect(() => {
		console.log('isAuthenticated', isAuthenticated);
		if(isAuthenticated === null){
			loadUser();
    }
    
    if(isAuthenticated){
      props.history.push('/dashboard');
    }

		if(error === 'User already exists'){
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	
	// Component level state
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
    email: '',
    password: '',
		password2: '',
		institutename: '',
    institutelocation: ''
	})

	const { firstname, lastname, email, password, password2, institutename, institutelocation } = user;

	const onSubmit = (e) => {
		e.preventDefault();
		if(firstname === '' || lastname === '' || email === '' || password === '' || institutename === '' || institutelocation === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger')
		} else {
			register({
				firstname,
				lastname,
				email,
				password,
				institutename,
				institutelocation
			});
    }
    console.log(register);
	}

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	return (
    <section className="page-container signup">
      <div className="page-wrapper signup-page">
        <div className='form-container'>
          <h1>create your account</h1>
          <form className="signup-login" onSubmit={onSubmit}>
            <div className="field-row title">
              <h3>Enter your account details</h3>
            </div>
            <div className="field-row input name">
              <div className="width-50">
                <input type="text" name="firstname" value={firstname} onChange={onChange} autoComplete="off" placeholder="First Name" required/>
              </div>
              <div className="width-50">
                <input type="text" name="lastname" value={lastname} onChange={onChange} autoComplete="off" placeholder="Surname" required/>
              </div>
            </div>
            <div className="field-row input">
              <input type="email" name="email" value={email} onChange={onChange} autoComplete="off" placeholder="Email Address" required/>
            </div>
            <div className="field-row input">
              <input type="password" name="password" value={password} onChange={onChange} autoComplete="off" placeholder="Create Password" minLength="6" required/>
            </div>
            <div className="field-row input">
              <input type="password" name="password2" value={password2} onChange={onChange} autoComplete="off" placeholder="Confirm Your Password" minLength="6" required/>
            </div>
            <div className="field-row title">
              <h3>Create your Company or Institution</h3>
            </div>
            <div className="field-row input">
              <input type="text" name="institutename" value={institutename} onChange={onChange} autoComplete="off" placeholder="Company / Institute Name" required/>
            </div>
            <div className="field-row input">
              <input type="text" name="institutelocation" value={institutelocation} onChange={onChange} autoComplete="off" placeholder="Company / Institute Location" required/>
            </div>
            <div className="field-row button">
              <button type="submit" value="Register"> create account </button>
            </div>
          </form>
        </div>
      </div>
    </section>
	)
}

export default Register;