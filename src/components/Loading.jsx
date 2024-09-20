import { Spinner } from "@chakra-ui/react";

import planetaLoading from "../assets/planetaLoading.png";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#06020f] h-screen w-full animate-float ">
      <img  src={planetaLoading} alt="Planeta Loading" className="w-60 mb-4" />
      <h1  className="text-white text-2xl mb-4">Carregando...</h1>
      <Spinner
          thickness="3px"
          speed="0.75s"
          emptyColor="#06020f"
          color="white"
          size="xl"
        />




      
    </div>



  );
}
