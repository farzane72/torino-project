"use client";

import AuthForm from "../template/auth/AuthForm";
import Menu from "../template/menu/Menu";
import Logo from "../modules/Logo";
function Header() {
  return (
    <>
      <header className="relative">
        <div className="flex justify-between  items-center container mx-auto  p-4   sticky top-0 bg-white">
          <Logo />
          <Menu />
          <AuthForm />
        </div>
        
      </header>
    </>
  );
}

export default Header;
