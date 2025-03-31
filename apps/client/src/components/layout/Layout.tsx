import { ReactNode } from 'react';

import NavBar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;
