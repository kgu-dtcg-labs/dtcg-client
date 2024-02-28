import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="mx-auto flex flex-col items-center overflow-auto">
      {children}
    </main>
  );
};

export default Layout;
