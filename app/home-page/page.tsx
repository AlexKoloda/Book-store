import { Metadata } from 'next';
import Hero from '../ui/hero/hero';
import Catalog from '../ui/catalog/catalog';
import Banner from '../ui/banner/banner';


export const metadata: Metadata = {
  title: 'Home page', 
}

const Page: React.FC = () => {
  return (
    <>
    <Hero />
    <Catalog />
    <Banner />
    </>
  )
}

export default Page;