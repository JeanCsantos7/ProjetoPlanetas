import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const apiKey = "tApNSWFfNsyKQ1WeW5R69g==kj9Q3QtJ3iPG813a";
  const nomePlanets = [
    { id: 1, nome: "Earth", imagem: "https://static.vecteezy.com/system/resources/thumbnails/009/314/440/small_2x/earth-globe-clip-art-vector-illustration-isolated-free-png.png", url: 'ab' },
    { id: 2, nome: "Neptune", imagem:"https://cdn-icons-png.flaticon.com/512/3590/3590275.png", url: 'abc'  },
    { id: 3, nome: "Saturn", imagem: "https://cdn-icons-png.flaticon.com/512/167/167365.png", url: 'abcd'   },
    { id: 4, nome: "Uran", imagem: "https://cdn-icons-png.flaticon.com/512/124/124560.png", url: 'abcde'  }, 
    { id: 5, nome: "Venus", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2kNF9hMpF47HbBCb_dswMnpj2aov0bcsUw&s", url: 'abcdef'  }, 
    { id: 6, nome: "Mars", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi0LUeRU-KXk5TgiBEzJttaCDPUtDxxQX9A&s", url: 'abcdefg'  }, 
    { id: 6, nome: "Jupiter", imagem: "https://cdn-icons-png.flaticon.com/512/124/124558.png", url: 'abcdefgh'  }, 
    { id: 7, nome: "Mercury", imagem: "https://cdn-icons-png.flaticon.com/512/1086/1086121.png", url: 'abcdefghi' }, 
  ];

 const[renderizarPlanetas, setRenderizarPlanetas] = useState([])

 const navigate = useNavigate("")
 async  function planetAPI() {
   

     

       

        

          try {
            
            const chamadaAPI = nomePlanets.map((item) => 
            
             axios.get(`https://api.api-ninjas.com/v1/planets?name=${item.nome}`, {

              headers: {'x-Api-Key' : apiKey}
             })
            
            )

            const respostaAPI = await Promise.all(chamadaAPI)

            const resultadoAPI = respostaAPI.map((item, id) => ({
              
             ...item.data[0],
            
             imagem: nomePlanets[id].imagem
             

            }))

            setRenderizarPlanetas(resultadoAPI)

          } catch (error) {
            
             console.error(error)

          }

        

           

      
   

  }

  function navegarCard(id)
  { 
   
    navigate(`/DetalhesPlanetas/${id}`)
  }


  useEffect(() => {
    planetAPI();
  }, []);

  return (
    <div className="flex items-center   flex-wrap lg:p-5 gap-6">
      {renderizarPlanetas.map((item, index) => (
        <Card key={index}  className="mt-8 max-w-lg  h-full">
          <CardBody>
            <Image
              src={item.imagem}
              className="lg:w-[65%] m-auto w-[69%]"
              alt={item.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              
              <div className="flex items-center justify-between">
              <Heading size='lg'>{item.name}</Heading>
            
                <h1 onClick={() => navegarCard(item.name)} className="cursor-pointer text-[16px] font-bold flex flex-col max-w-[38%] p-2 text-[#06020f]">Ver informações</h1>
            
              </div>
            
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae placeat dolorum corporis ad architecto maxime deserunt ullam, tenetur eveniet atque tempora veritatis ea esse, possimus officiis deleniti, soluta aspernatur.
               
              </p>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button _hover="none" color="#FFF" bg="#06020f" className=" flex flex-col max-w-[24%]  p-6 lg:max-w-[25%]">
               <h1>Massa</h1>

               {item.mass}
              </Button>

              <Button _hover="none" color="#FFF" bg="#06020f" className="flex flex-col  h-5 p-6 max-w-[35%] lg:max-w-[40%]">
               <h1>Temperatura</h1>

               {item.temperature}
              </Button>

              <Button _hover="none" color="#FFF" bg="#06020f" className="flex flex-col max-w-[25%] p-6 lg:max-w-[45%]">
               <h1>Distância</h1>

               {item.distance_light_year}
              </Button>
            
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
