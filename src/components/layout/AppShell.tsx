import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AppShellProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const AppShell: React.FC<AppShellProps> = ({ children, showFooter = false }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {showFooter ? <Footer /> : null}
    </div>
  );
};

export default AppShell;
