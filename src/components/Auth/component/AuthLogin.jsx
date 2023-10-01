'use client';
import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

export const AuthLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitlogin = async () => {
    const res = await fetch('api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <main className="h-screen w-full  grid grid-cols-2">
      <div className="bg-indigo-700 "></div>

      <div className="flex flex-col justify-center items-center space-y-2  bg-slate-900">
        <p className="text-left text-white font-bold">Login</p>
        <p className="text-white">Welcome Back again</p>
        <div className="max-w-[800px] space-y-2">
          <Input name="email" label="email" placeholder="Enter your email" className="" onChange={handleChange} />
          <Input name="password" label="Password" color="default" placeholder="Enter your password" className="bg-transparent" onChange={handleChange} />
          <Button onClick={handleSubmitlogin} className="w-full bg-indigo-700 font-bold text-white">
            Login
          </Button>
        </div>
      </div>
    </main>
  );
};
