import Jupiter from "../assets/Jupiter.png";
import Saturno from "../assets/Saturn.png";
import Terra from "../assets/Earth.png";
import Urano from "../assets/Uranus.png";
import Venus from "../assets/Venus.png";
import Sol from "../assets/Sun.png";
import Mercurio from "../assets/Mercury.png";
import Marte from "../assets/Mars.png";
import Netuno from "../assets/Neptune.png";
import Plutao from "../assets/Pluto.png";
import { div } from "framer-motion/client";

export default function PrimeiroConteudo() {
  const imagensPlanetas = [
    { id: 1, imagem: Sol },
    { id: 2, imagem: Mercurio },
    { id: 3, imagem: Venus },
    { id: 4, imagem: Terra },
    { id: 5, imagem: Marte },
    { id: 6, imagem: Jupiter },
    { id: 7, imagem: Saturno },
    { id: 8, imagem: Urano },
    { id: 9, imagem: Netuno },
    { id: 10, imagem: Plutao },
  ];
  return (
    <>
      
      <div className="flex flex-col justify-start text-white ml-8 mt-9">
      <h1 className="font-Planets text-3xl">Sistema Solar</h1>
      <p className="font-Poppins text-sm lg:text-lg">
        Nosso sistema solar é composto por 1 estrela, 8 planetas, 146 luas{" "}
        <br />, numerosos cometas, asteróides, rochas espaciais, gelo e vários
        planetas anões (Plutão).
      </p>
      </div>
    

      <div className=" items-center mt-12 hidden lg:flex">
        {imagensPlanetas.map((item) => {
          
          
          return(
            <>
            <div className="flex items-center justify-center gap-8 " key={item.id}>
            <img className="w-[86%]" src={item.imagem} alt="" />
            </div>
           
            </>
          )

        })}
      </div>
    </>
  );
}
