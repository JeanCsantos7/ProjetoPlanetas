import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function MenuMobile() {
 
  const navigate = useNavigate("")
  
  return (
    <Menu >
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon w={5} h={5} color='#fff' />}
        variant="outline"
        _hover="none"
        
     
      />
      <MenuList h={300} bg="#06020f">
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Earth")} bg="#06020f">Terra</MenuItem>
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Mercury")} bg="#06020f">Mercúrio</MenuItem>
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Venus")} bg="#06020f" >Vênus</MenuItem>
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Saturn") } bg="#06020f">Saturno</MenuItem>
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Uran")} bg="#06020f">Urano</MenuItem>
        <MenuItem className="font-Poppins font-medium text-[16px]" onClick={() => navigate("/DetalhesPlanetas/Jupiter")} bg="#06020f">Júpiter</MenuItem>
      </MenuList>
    </Menu>
  );
}
