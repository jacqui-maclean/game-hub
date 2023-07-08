import { Input, InputGroup, InputLeftAddon, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (searchTerm: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event?) => {
        event?.preventDefault();
        if (ref.current?.value) {
          onSubmit(ref.current?.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftAddon>
          <BsSearch />
        </InputLeftAddon>
        <Input
          ref={ref}
          variant="filled"
          placeholder="Search games"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
