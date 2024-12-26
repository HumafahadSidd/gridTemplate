import React from 'react';

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <div className='bg-blue-500 text-white w-[200px] h-[60px] text-center justify-center pt-4 rounded'>
      <button>{label}</button>
    </div>
  );
}
