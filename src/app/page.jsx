import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image 
          src="/banner.png"
          width="300"  
          height="100"        
          alt="banner logo"
        />

        <HomeSearch />
      </div>
    </>
  )
}
