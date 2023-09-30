'use client';
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';

export const AuthRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitregister = async () => {
    const res = await fetch('api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <main className="h-screen w-full  grid grid-cols-2">
      <div className="bg-rose-500 "></div>
      <div className="flex justify-center items-center ">
        <div className="max-w-[320px] space-y-2">
          <Input name="name" label="name" variant="bordered" placeholder="Enter your name" className="" onChange={handleChange} />
          <Input name="email" label="email" variant="bordered" placeholder="Enter your email" className="" onChange={handleChange} />
          <Input name="password" label="password" variant="bordered" placeholder="Enter your password" className="" type="password" onChange={handleChange} />
          <Button className="" onClick={handleSubmitregister}>
            Register
          </Button>
        </div>
      </div>
    </main>
  );
};
