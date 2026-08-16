import { Sora } from 'next/font/google';
import Header from './Header';
import Nav from './Nav';
import SiteHead from './SiteHead';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`site-shell ${sora.variable} font-sora`}>
      <SiteHead />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-ambient" aria-hidden="true" />
      <Header />
      <Nav />
      <main id="main-content" className="relative z-10 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
