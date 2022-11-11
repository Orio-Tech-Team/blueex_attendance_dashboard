'use client';

import MyAppBar from '@ui/MyAppBar';
import Sidebar from '@ui/Sidebar';
import * as React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <main>
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <div className="main__layout">
        <MyAppBar />
        {children}
      </div>
    </main>
  );
}
