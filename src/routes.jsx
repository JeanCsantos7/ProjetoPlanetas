import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalhePlanetas from "./components/detalhesPlanetas";
import { ChakraProvider } from "@chakra-ui/react";
import Error404 from "./pages/Erro404";
import Home from "./pages/Home";



export default function Rotas() {
  
  
  
  return (
    <>
      
      <ChakraProvider>
     

   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
          <Route path="/DetalhesPlanetas/:id" element={<DetalhePlanetas/>}></Route>
          
        
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
   

    </>
  );
}
