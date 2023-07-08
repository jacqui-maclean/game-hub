import { Input, InputGroup, InputLeftAddon, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <InputGroup>
    <InputLeftAddon>
      <BsSearch />
    </InputLeftAddon>
    <Input variant="filled" placeholder="Search games" borderRadius={20} />
  </InputGroup>
);

export default SearchInput;
