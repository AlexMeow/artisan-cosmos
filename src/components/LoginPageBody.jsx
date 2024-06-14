import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import bcrypt from 'bcryptjs';

const LoginPageBody = () => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [isMinLengthValid, setMinLengthValid] = useState(false);
    const [isDigitAndLetterRequiredValid, setDigitAndLetterRequiredValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [eyeClicked, setEyeClicked] = useState(false);
    const [passwordHasInput, setPasswordHasInput] = useState(false);

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // Triggered when user inputing password.
    const handlePasswordChange = (e) => {
        // Get user input and update state.
        const value = e.target.value;
        // setPassword(e.target.value);

        // Check if password is valid.
        const hasMinLength = value.length >= 8;
        // Regular expression test for containing at least one digit, one lower case and one upper case letter.
        const hasDigitAndLetterRequired = (/\d/.test(value) && /[A-Z]/.test(value) && /[a-z]/.test(value));

        // Check if password has been input, if not, placeholder will be default style.
        if (value)
            setPasswordHasInput(true);
        else
            setPasswordHasInput(false);

        // Update state.
        setMinLengthValid(hasMinLength);
        setDigitAndLetterRequiredValid(hasDigitAndLetterRequired);
        setRegisterData({ ...registerData, password: value });
    };

    // When password visibility button has been clicked, show password and change button icon.
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeClicked(!eyeClicked);
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(registerData.password, salt);
            const dataToSend = {
                ...registerData,
                password: hashedPassword,
            };
            // 發送dataToSend到後端
            console.log('Register Data:', dataToSend);
        } catch (error) {
            console.error('Error hashing password:', error);
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(loginData.password, salt);
            const dataToSend = {
                ...loginData,
                password: hashedPassword,
            };
            // 發送dataToSend到後端
            console.log('Login Data:', dataToSend);
        } catch (error) {
            console.error('Error hashing password:', error);
        }
    };


    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="login-page-body">
                    <h3>Login with Social Media</h3>
                    <div className="social-login">
                        <button className="social-btn" onClick={(e) => { 
                                e.preventDefault();
                                alert("Coming Soon!");
                            }}>
                            <FontAwesomeIcon size="xl" icon={faGoogle} />
                        </button>
                        <button className="social-btn" onClick={(e) => { 
                                e.preventDefault();
                                alert("Coming Soon!");
                            }}>
                            <FontAwesomeIcon size="xl" icon={faFacebookF} />
                        </button>
                        <button className="social-btn" onClick={(e) => { 
                                e.preventDefault();
                                alert("Coming Soon!");
                            }}>
                            <FontAwesomeIcon size="xl" icon={faTwitter} />
                        </button>
                        <button className="social-btn" onClick={(e) => { 
                                e.preventDefault();
                                alert("Coming Soon!");
                            }}>
                            <FontAwesomeIcon size="xl" icon={faLinkedin} />
                        </button>
                    </div>
                    <div className="login-container">
                        <div className="login-section">
                            <h2>Login</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label htmlFor="loginEmail">Email</label>
                                    <input
                                        type="email"
                                        id="loginEmail"
                                        name="email"
                                        value={loginData.email}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loginPassword">Password</label>
                                    <input
                                        type="password"
                                        id="loginPassword"
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="form-button">Login</button>
                            </form>
                        </div>
                        <div className="register-section">
                            <h2>Register</h2>
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="form-group">
                                    <label htmlFor="registerUsername">Username</label>
                                    <input
                                        type="text"
                                        id="registerUsername"
                                        name="username"
                                        value={registerData.username}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registerEmail">Email</label>
                                    <input
                                        type="email"
                                        id="registerEmail"
                                        name="email"
                                        value={registerData.email}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">

                                    <label htmlFor="registerPassword">Password</label>
                                    <div className="inputPasswordArea">
                                        <input
                                            id="registerPassword"
                                            className="inputTextArea"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={registerData.password}
                                            onChange={handlePasswordChange}
                                            required
                                            style={{ width: "100%" }}
                                        />
                                        <FontAwesomeIcon
                                            style={{
                                                position: "absolute",
                                                zIndex: 1,
                                                right: "1rem"
                                            }}
                                            size="lg"
                                            onClick={togglePasswordVisibility}
                                            icon={eyeClicked ? faEye : faEyeSlash}
                                            color={eyeClicked ? "#000000" : "#A0A0A0"}
                                        />
                                    </div>
                                    <div style={{ marginTop: "1rem", fontSize: "12px", textAlign: "start", display: "flex", justifyContent: "space-between" }}>
                                        {
                                            isMinLengthValid ?
                                                (<span style={{ color: "white" }} ><FontAwesomeIcon color="mediumaquamarine" icon={faCircleCheck} /> 8 Characters min.</span>) :
                                                (<span style={{ color: "gray" }}><FontAwesomeIcon icon={faCircleCheck} /> 8 Characters min.</span>)
                                        }
                                        {
                                            isDigitAndLetterRequiredValid ?
                                                (<span style={{ color: "white" }} ><FontAwesomeIcon color="mediumaquamarine" icon={faCircleCheck} /> At least one digit, one lower case and one upper case letter.</span>) :
                                                (<span style={{ color: "gray" }}><FontAwesomeIcon icon={faCircleCheck} /> At least one digit, one lower case and one upper case letter.</span>)
                                        }
                                    </div>
                                </div>
                                <button type="submit" className="form-button">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageBody;