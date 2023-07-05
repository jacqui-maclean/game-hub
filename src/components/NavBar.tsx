import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
      <Text>Some Text</Text>
    </HStack>
  );
};

export default NavBar;
