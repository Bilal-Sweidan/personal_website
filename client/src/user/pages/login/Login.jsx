import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import './style.css';

// context
import authContext from '../../../context/authContext';

// auth api
import auth from '../../../api/auth';

const Login = () => {
    // context
    const { setUser } = useContext(authContext.AuthContext);

    // navigate
    const navigate = useNavigate();

    // form data
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // show password
    const [showPassword, setShowPassword] = useState(false);

    // errors
    const [errors, setErrors] = useState({});

    // is loading
    const [isLoading, setIsLoading] = useState(false);

    // login mutation
    const queryClient = useQueryClient()
    const loginMutation = useMutation({
        mutationKey: ["admin"],
        mutationFn: () => auth.login(formData.username, formData.password),
        onSuccess: (data) => {
            console.log(data);
            setUser(data.data.user);
            queryClient.invalidateQueries(["currentUser"]);
            setTimeout(() => navigate("/admin"), 1000);
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });
    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            const data = loginMutation.mutate();
            setIsLoading(false);
        
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Please login to your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <div className="input-group">
                                {/* <FontAwesomeIcon icon={faUser} className="input-icon" /> */}
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={errors.username ? 'error' : ''}
                                />
                            </div>
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>

                        <div className="form-group">
                            <div className="input-group">
                                {/* <FontAwesomeIcon icon={faLock} className="input-icon" /> */}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? 'error' : ''}
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <span>Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="forgot-password">
                                Forgot Password?
                            </Link>
                        </div>

                        {errors.submit && (
                            <div className="error-message" style={{ textAlign: 'center' }}>
                                {errors.submit}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="loading-spinner"></div>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
