import Particulas from "../Particulas";
import Navbar from "../components/Navbar";
import PrimeiroConteudo from "../components/primeiroConteudo";
import Cards from "../components/card";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    
       setTimeout(() => {
        setLoading(false)
       }, 5300);


    setLoading(true);
  }, []);

  return (
    <>
   
        {
         loading ? <div className="flex items-center justify-center max-h-full">
         <Loading />
       </div> : <div>
       <div className="fixed z-[-1]">
        <Particulas />
      </div>

      <div className="relative z-[1] p-5 m-0">
        <Navbar />
        <PrimeiroConteudo />
        <Cards/>
       
     
      </div>

       </div>

        }
        
        
        
    

    
    </>
  );
}
