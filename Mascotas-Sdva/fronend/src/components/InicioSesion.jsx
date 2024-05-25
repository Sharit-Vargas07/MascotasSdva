import React, { useRef, useState } from 'react';
import imgLogin from '../../public/img/imgLogin.jpg'; // Cambié la importación de la imagen para que sea más específica
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../services/axiosClient';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef(null); // Renombré la variable email a emailRef para que sea más descriptiva
    const passwordRef = useRef(null); // Renombré la variable password a passwordRef para que sea más descriptiva
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const emailValue = emailRef.current.value; // Usé la referencia emailRef en lugar de email
            const passwordValue = passwordRef.current.value; // Usé la referencia passwordRef en lugar de password

            const data = {
                email: emailValue,
                password: passwordValue,
            };

            axiosClient.post('http://localhost:3000/usuario/validar', data).then((response) => {
                console.log(response.data);

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    Swal.fire({
                        title: 'Usuario Correcto',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                    });
                    navigate('/dashboard');
                } else if (response.status === 404) {
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
        } catch (error) {
            console.error(error); // Agregué un mensaje de error en la consola en caso de que falle el try
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen"
            style={{ backgroundImage: `url(${imgLogin})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
            <form onSubmit={handleSubmit} className="w-full max-w-sm mt-96 pt-24">
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        placeholder="Correo electrónico"
                        ref={emailRef}
                        className="w-full bg-slate-300 px-3 py-2 rounded-3xl border border-gray-400 focus:outline-none ml-5"
                        style={{ height: '40px', width: '90%' }}
                        required
                    />
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            ref={passwordRef}
                            placeholder="Contraseña"
                            className="w-full bg-slate-300 px-3 py-2 rounded-3xl border border-gray-400 focus:outline-none ml-5"
                            style={{ height: '40px', width: '90%' }}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-950 rounded-3xl text-white py-2 ml-5 px-4" style={{ width: '90%' }}>Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
