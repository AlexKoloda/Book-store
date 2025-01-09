import clsx from 'clsx';
import style from './page.module.scss'
import { poppins } from './ui/fonts';
import Footer from './ui/footer/footer';
import Header from './ui/header/header';


const RootLayout = ({ children }: Readonly<{children: React.ReactNode; }>) => {


  return (
    <html lang="en" className={clsx(poppins.className, style.body)}>
      <body className={style.body}>
      <div className={style.wrapper__inner}>
        <Header />
        {children}
      </div> 
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;