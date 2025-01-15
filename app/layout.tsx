import clsx from 'clsx';
import style from './page.module.scss';
import { poppins } from './ui/fonts';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';
import ContextDataServerInitialization from './lib/contexts/ContextDataServerInitialization';

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en' className={clsx(poppins.className, style.body)}>
      <body className={style.body}>
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
