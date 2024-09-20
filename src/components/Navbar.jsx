
import { useNavigate } from "react-router-dom";
import MenuMobile from "./Menu";

export default function Navbar() {
  
    const navigate = useNavigate("")
  
    return (
    <>
      <nav className="flex items-center justify-between p-8 text-white">
        <h1 className="font-Planets text-xl">THE PLANETS</h1>
        <div className="block lg:hidden">
        <MenuMobile/>
        </div>
       
        <ul className=" gap-3 hidden lg:flex">
          
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Earth")}>Terra</li>
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Mercury")}>Mercúrio</li>
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Venus")}>Vênus</li>
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Saturn")}>Saturno</li>
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Uran")}>Urano</li>
          <li className="cursor-pointer" onClick={() => navigate("/DetalhesPlanetas/Jupiter")}>Júpiter</li>
        </ul>
      </nav>
    </>
  );
}
