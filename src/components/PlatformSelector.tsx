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
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  console.log("selectedPlatform ", selectedPlatform);
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platform"}
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
