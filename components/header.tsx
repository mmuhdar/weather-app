import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  
  return (
    <header className="flex flex-row">
      <FaArrowLeft
        className={
          pathname == '/' ? 'hidden' : 'cursor-pointer mr-3'
        }
        onClick={() => router.back()}
      />
      <span>Weather App</span>
    </header>
  );
}
