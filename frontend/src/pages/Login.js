import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Eye, EyeOff } from 'lucide-react'; // make sure to install lucide-react
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      // alert('Login successful!');
      Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Login successful!',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      navigate('/');
    } catch (err) {
      // alert('Login failed. Check your credentials.');
      Swal.fire({
        toast: true,
        icon: 'danger',
        title: 'Login failed. Check your credentials.',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 drop-shadow">
          Welcome Back
        </h2>


        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg outline-blue-400 focus:ring-2 ring-blue-300 transition"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type={showPwd ? 'text' : 'password'}
            className="w-full p-3 border rounded-lg outline-blue-400 focus:ring-2 ring-blue-300 transition pr-10"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="absolute right-3 top-10 cursor-pointer text-gray-500 hover:text-blue-600"
            onClick={() => setShowPwd((prev) => !prev)}
          >
            {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Log In
        </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;