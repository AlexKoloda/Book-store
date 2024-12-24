
import { poppins } from './ui/fonts';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;