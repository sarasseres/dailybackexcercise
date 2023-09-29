'use client';
import { Input, Button } from '@nextui-org/react';

export const AuthRegister = () => {
  return (
    <main className="h-screen w-full  grid grid-cols-2">
      <div className="bg-rose-500 "></div>
      <div className="flex justify-center items-center ">
        <div className="max-w-[320px] space-y-2">
          <Input label="name" variant="bordered" placeholder="Enter your name" className="" />
          <Input label="email" variant="bordered" placeholder="Enter your email" className="" />
          <Input label="Password" variant="bordered" placeholder="Enter your password" className="" />
          <Button className="">Register</Button>
        </div>
      </div>
    </main>
  );
};
