import { useRouter } from 'next/router';
import React, { useContext, Suspense, useEffect, lazy } from 'react';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import { SidebarContext } from 'context/SidebarContext';

export default function NavbarComponent({ children }) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useRouter();

  useEffect(() => {
    closeSidebar();
  }, [location.asPath]);

  const { asPath } = useRouter();
  if (asPath.includes('/app')) {
    return (
      <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
          isSidebarOpen && 'overflow-hidden'
        }`}
      >
        <Sidebar></Sidebar>

        <div className='flex flex-col flex-1 w-full py-10 px-7 overflow-y-auto	'>
          {/* <Header /> */}
          <>{children}</>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
