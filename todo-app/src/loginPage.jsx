import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleClick = async (event) => {
        event.preventDefault();
        // Perform login logic here

        // await is used to wait for the response before continuing
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                })
            })

            if (response.ok) {
                setError('')
                navigate('/app')
            } else {
                const {error} = await response.json()
                setError(error)
            }
        } catch (error) {
            setError('Please try again.')
            console.log(error)
        }
        // Navigate to the ToDoAppPage
        // navigate('/app');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-64">
                <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    {error && <div className='text-red-500 mb-4'>{error}</div>}
                    <div className="flex items-ce   nter justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            id="login-button"
                            onClick={handleClick}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default LoginPage

