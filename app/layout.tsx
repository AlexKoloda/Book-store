import './global.css';
import clsx from 'clsx';
import style from './page.module.scss';
import { poppins } from './ui/fonts';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';
import ContextDataServerInitialization from './lib/contexts/ContextDataServerInitialization';
import { ToastContainer } from 'react-toastify';

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en' className={clsx(poppins.className, style.body)}>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <body className={style.body}>
      <ToastContainer
      position="top-right"
      hideProgressBar
      autoClose={1500}    
      />
        <ContextDataServerInitialization>
          <div className={style.wrapper__inner}>
            <Header />
            {children}
          </div>
          <Footer />
        </ContextDataServerInitialization>
      </body>
    </html>
  );
};

export default RootLayout;
