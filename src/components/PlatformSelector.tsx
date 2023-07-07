import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useData";
interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatformName: string | undefined;
}
const PlatformSelector = ({ onSelect, selectedPlatformName }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatformName || "Platforms"}
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
