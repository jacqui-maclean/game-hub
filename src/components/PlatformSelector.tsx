import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useData";
import { GameQuery } from "../App";
interface Props {
  onSelect: (platform: Platform) => void;
  gameQuery: GameQuery;
}
const PlatformSelector = ({ onSelect, gameQuery }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery.platform?.name || "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default PlatformSelector;
