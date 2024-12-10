import React, { useState } from 'react';

function LoginSignup() {
    const [state, setState] = useState('Login');
    const [toast, setToast] = useState({ visible: false, type: '', message: '' });
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showToast = (type, message) => {
        setToast({ visible: true, type, message });
        setTimeout(() => setToast({ visible: false, type: '', message: '' }), 2000);
    };

    const login = async () => {
        console.log('Login function executed', formData);

        let responseData;

        await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => (responseData = data))
            .catch((error) => console.error('Error:', error));

        if (responseData && responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            showToast('success', 'Logged in successfully!');
            setTimeout(() => window.location.replace('/'), 2000);
        } else {
            showToast('error', 'Login failed. Please check your credentials.');
        }
    };

    const signup = async () => {
        console.log('Signup function executed', formData);

        let responseData;

        await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => (responseData = data))
            .catch((error) => console.error('Error:', error));

        if (responseData && responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            showToast('success', 'Signup successful!');
            setTimeout(() => window.location.replace('/'), 2000);
        } else {
            showToast('error', 'Signup failed. Email already exists.');
        }
    };

    return (
        <div className="w-[100%] h-auto bg-[#fce3fe] py-[50px]">
            <div className="w-[590px] h-[520px] bg-white m-auto pt-[20px] px-[60px]">
                <h1 className="my-[20px] mx-[0px] text-center text-[28px] font-semibold">{state}</h1>
                <div className="flex flex-col gap-[30px] mt-[30px]">
                    {state === 'Sign Up' ? (
                        <input
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            className="h-[52px] w-[100%] pl-[20px] border border-solid border-[#5c5c5c] text-[16px]"
                            type="text"
                            placeholder="Your Name"
                        />
                    ) : null}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        className="h-[52px] w-[100%] pl-[20px] border border-solid border-[#5c5c5c] text-[16px]"
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        className="h-[52px] w-[100%] pl-[20px] border border-solid border-[#5c5c5c] text-[16px]"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center gap-[20px] mt-[35px] text-[#5c5c5c] text-[15px] font-medium">
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <button
                    onClick={() => (state === 'Login' ? login() : signup())}
                    className="w-[500px] h-[48px] text-white bg-[#ff4141] mt-[10px] border-none text-[22px] font-medium cursor-pointer"
                >
                    Continue
                </button>
                {state === 'Sign Up' ? (
                    <p className="mt-[20px] text-[#5c5c5c] text-[16px] font-medium">
                        Already have an account?{' '}
                        <span
                            onClick={() => setState('Login')}
                            className="cursor-pointer text-[#ff4141] font-semibold"
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="mt-[20px] text-[#5c5c5c] text-[16px] font-medium">
                        Create an account?{' '}
                        <span
                            onClick={() => setState('Sign Up')}
                            className="cursor-pointer text-[#ff4141] font-semibold"
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>

            {/* Toast Message */}
            {toast.visible && (
                <div
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center max-w-[400px] w-full p-4 rounded-md shadow-lg ${
                        toast.type === 'success' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
                    }`}
                >
                    <div className="mr-4">
                        {toast.type === 'success' ? (
                            <span className="text-green-500 text-xl font-bold">✔</span>
                        ) : (
                            <span className="text-red-500 text-xl font-bold">✖</span>
                        )}
                    </div>
                    <div className="flex-1">
                        <h4
                            className={`text-lg font-semibold ${
                                toast.type === 'success' ? 'text-green-800' : 'text-red-800'
                            }`}
                        >
                            {toast.type === 'success' ? 'Success' : 'Error'}
                        </h4>
                        <p className="text-sm text-[#555]">{toast.message}</p>
                    </div>
                    <button
                        onClick={() => setToast({ visible: false, type: '', message: '' })}
                        className="text-[#555] ml-4 text-xl font-bold cursor-pointer"
                    >
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginSignup;
