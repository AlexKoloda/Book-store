import style from './page.module.scss'
import { poppins } from './ui/fonts';
import Footer from './ui/footer/footer';
import Header from './ui/header/header';

const RootLayout = ({ children }: Readonly<{children: React.ReactNode; }>) => {


  return (
    <html lang="en" className={poppins.className}>
      <body>
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