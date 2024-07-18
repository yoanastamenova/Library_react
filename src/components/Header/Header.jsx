import React from 'react';
import { useState } from 'react';

export const Header = () => {
  const [isLogged, setIsLogged] = useState(true)
  return (
    <>
    {
      isLogged
      ? "logged"
      : "header"
    }
    </>
  )
}
