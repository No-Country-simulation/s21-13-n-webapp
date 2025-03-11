// import CarouselPrueba from "@/components/CarouselPrueba";
import IceCreamCard from "@/components/UI/IceCreamCard";
import Carousel from "@/components/UI/Carousel";
import Subscribe from "@/components/UI/Subscribe";
import DividerCard from "@/components/UI/DividerCard";


export default function Home() {

  return (
    <>
      <IceCreamCard />
      <div className="flex justify-center items-center lg:mt-16 lg:mx-28">
        <Carousel />
      </div>

      <div className="lg:mx-28 lg:mt-16">
        <DividerCard />
      </div>
      
      <Subscribe />
      
    </>
  );

}