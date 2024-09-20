import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Particulas from "../Particulas";

import { SunIcon } from '@chakra-ui/icons'
import {MoonIcon} from '@chakra-ui/icons'

import ParticulasCleanMode from "./ParticulasCleanMode";
import PlanoDeFundoJupiter from "../assets/planodeFundoJupiter.png";
import PlanoDeFundoMarte from "../assets/planodeFundoMarte.png";
import PlanoDeFundoMercurio from "../assets/planodeFundoMercurio.png";
import PlanoDeFundoTerra from "../assets/EarthPlanoDefundo.png";
import PlanoDeFundoSaturno from "../assets/planodeFundoSaturno.png";
import PlanoDeFundoNetuno from "../assets/planodeFundoNetuno.png";
import PlanoDeFundoUrano from "../assets/planodeFundoUrano.png";
import PlanoDeFundoVenus from "../assets/planodeFundoVenus.png";

export default function DetalhePlanetas() {
  const { id } = useParams();
  const apiKey = "tApNSWFfNsyKQ1WeW5R69g==kj9Q3QtJ3iPG813a";
  const [renderizarImagemFundo, setRenderizarImagemFundo] = useState([{}]);
  const [respostaApi, setResposta] = useState([]);
  const [classeTheme, setClasseTheme] = useState("font-Planets text-white  text-4xl lg:text-6xl ");
  const[toggleTheme, setToggleTheme] = useState(true)


  useEffect(() => {
    async function chamadaAPI() {
      try {
        await axios
          .get(`https://api.api-ninjas.com/v1/planets?name=${id}`, {
            headers: { "x-Api-Key": apiKey },
          })
          .then((response) => {
            setResposta(response.data);

            const dadosAdicionais = [
              { id: 1, nome: "Earth", planoFundo: PlanoDeFundoTerra },
              { id: 2, nome: "Jupiter", planoFundo: PlanoDeFundoJupiter },
              { id: 3, nome: "Saturn", planoFundo: PlanoDeFundoSaturno },
              { id: 4, nome: "Mercury", planoFundo: PlanoDeFundoMercurio },
              { id: 5, nome: "Venus", planoFundo: PlanoDeFundoVenus },
              { id: 6, nome: "Uran", planoFundo: PlanoDeFundoUrano },
              { id: 7, nome: "Neptune", planoFundo: PlanoDeFundoNetuno },
              { id: 8, nome: "Mars", planoFundo: PlanoDeFundoMarte },
            ];

            const arrayFiltrado = dadosAdicionais.filter(
              (item) => item.nome.toLowerCase() === id.toLowerCase()
            );
            const novoArray = [...arrayFiltrado, ...response.data];

            setRenderizarImagemFundo(novoArray);
          });
      } catch (error) {
        console.error(error);
      }
    }

    chamadaAPI();
  }, [id]);



  function alterarTema()
  {
  setToggleTheme(!toggleTheme)
  setClasseTheme( toggleTheme ? "font-Planets text-[#1a1f4a] text-4xl  lg:text-6xl"   :  "font-Planets text-white text-4xl  lg:text-6xl")

  }


  return (
    <>
      <div className="fixed z-[-1] w-[100%]">
        
        {
           toggleTheme ?  <Particulas /> : <ParticulasCleanMode/>

        }
       
      </div>

      <div className="relative z-[1] p-5 m-0 ">
        
      <span className="flex items-center justify-between cursor-pointer">
      
      
     
          <h1 className={classeTheme}>{id}</h1> 

      
     
      {
        toggleTheme ?  <SunIcon onClick={alterarTema} boxSize={8} color="white" /> : <MoonIcon onClick={alterarTema} boxSize={8} color="#06020f"/> 
      }
     
      </span>
     
     
        {renderizarImagemFundo.map((item) => {
          return (
            <>
          
            <img
                className=" rounded-lg mt-6 w-[97%] lg:w-[50%]"
                src={item.planoFundo}
                alt=""
              />
       
             
            </>
          );
        })}

        {respostaApi.map((item) => {
          return (
            <>
              

              <div key={item.id} className="flex gap-5 flex-col lg:flex-row">
                <span className=" rounded-[10px] w-full p-3 h-full bg-[#1a1f4a] border-solid-[#fff] border border-fff-600 lg:w-[200px]">
                  <h1 className="font-Poppins text-xl font-semibold text-white">Mass</h1>
                  <h2 className="font-Poppins text-[15px] text-white">{item.mass}</h2>
                </span>

                <span className=" rounded-[10px] w-full p-3 h-full bg-[#1a1f4a] border-solid-[#fff] border border-fff-600 lg:w-[200px]"  >
                  <h1 className="font-Poppins text-xl font-semibold text-white">Temperature</h1>
                  <h2 className="font-Poppins text-[15px] text-white">{item.temperature}</h2>
                </span>

                <span className=" rounded-[10px] w-full p-3 h-full bg-[#1a1f4a] border-solid-[#fff] border border-fff-600 lg:w-[200px]" >
                  <h1 className="font-Poppins text-xl font-semibold text-white">Radius</h1>
                  <h2 className="font-Poppins text-[15px] text-white">{item.radius}</h2>
                </span>

                <span className=" rounded-[10px] w-full p-3 h-full bg-[#1a1f4a] border-solid-[#fff] border border-fff-600 lg:w-[200px]" >
                  <h1 className="font-Poppins text-xl font-semibold text-white">Distance</h1>
                  <h2 className="font-Poppins text-[15px] text-white">{item.distance_light_year}</h2>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
