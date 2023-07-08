import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSubmit: (searchTerm: string) => void;
}

const NavBar = ({ onSubmit }: Props) => {
  const handleSubmit = (searchTerm: string) => onSubmit(searchTerm);
  return (
    <HStack padding="2px">
      <Image src={Logo} boxSize="60px" />
      <SearchInput onSubmit={handleSubmit} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
