import React from 'react'

const Header = () => {

  const scrollFromRightStyle = {
    animation: 'scrollRightToLeft 10s linear infinite', // Make it loop infinitely
  };

  const keyframes = `
    @keyframes scrollRightToLeft {
      0% {
        transform: translateX(100%); /* Start off-screen to the right */
      }
      100% {
        transform: translateX(-100%); /* Move to the left, off-screen */
      }
    }
  `;

  return (
    <div className='border-2 py-2 fixed top-0 left-0 z-50 w-full h-[4rem] bg-white'>
            <style>{keyframes}</style> {/* Inject keyframes styles */}

        <h1 className='h-[3rem] flex justify-center items-center text-4xl ' style={scrollFromRightStyle}>Saytımıza xoş gəlmişsiniz</h1>
    </div>
  )
}

export default Header