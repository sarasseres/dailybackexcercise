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
      <div className="bg-rose-500 "></div>
      <div className="flex justify-center items-center ">
        <div className="max-w-[320px] space-y-2">
          <Input name="email" label="email" variant="bordered" placeholder="Enter your email" className="" onChange={handleChange} />
          <Input name="password" label="Password" variant="bordered" placeholder="Enter your password" className="" onChange={handleChange} />
          <Button onClick={handleSubmitlogin} className="">
            Login
          </Button>
        </div>
      </div>
    </main>
  );
};
