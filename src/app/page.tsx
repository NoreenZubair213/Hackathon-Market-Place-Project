 
import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Side from "./components/Side";
import Top from "./components/Top";
import Hot from "./components/Hot";
import Blog from "./components/Blog";
import Insta from "./components/Insta";
// import SanityConfig from '@/sanity.config';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Side />
      <Top />
      <Hot />
      <Blog />
      <Insta />
      {/* <SanityConfig /> */}
      {/* <ShopProduct /> */}
      <Image 
        src="/example.png" // Public folder ke andar image ka path
        alt="Example Image" // Image ka description
        width={300} // Image ka width
        height={200} // Image ka height
      />
    </div>
  );
}
