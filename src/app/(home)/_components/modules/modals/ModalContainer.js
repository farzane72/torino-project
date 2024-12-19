import React from "react";

function ModalContainer({ children, modalName, setState }) {
  // if (!isOpen) return;

  if (modalName === "auth")
    return (
      <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10  backdrop-blur-none  md:backdrop-blur-sm  ">
        <div className="w-full h-full flex items-center justify-center">
          <div className="min-w-10 min-h-10">{children}</div>
        </div>
      </div>
    );
  if (modalName === "nav")
    return (
      <>
        <div
          className="fixed top-0 right-0 w-1/2 h-screen teransition-all duration-200 ease-in-out z-[1000]
           bg-white rounded-2xl md:hidden"
        >
          {children}
        </div>

        <div
          className= " fixed w-full h-screen  top-0 right-0 left-0 z-[500]  bg-black/25 backdrop-blur-none  md:backdrop-blur-[2px] md:hidden"
          onClick={() => setState(false)}
        ></div>
      </>
    );
}

export default ModalContainer;
