import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto flex flex-col items-center overflow-auto px-4 py-8">
      {children}
    </main>
  );
};

export default Layout;
