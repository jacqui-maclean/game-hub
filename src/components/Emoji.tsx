import { Image, ImageProps } from "@chakra-ui/react";
import Meh from "../assets/meh.webp";
import Thumb from "../assets/thumbs-up.webp";
import Bull from "../assets/bulls-eye.webp";

interface Props {
  rating_top: number;
}
const Emoji = ({ rating_top }: Props) => {
  const iconMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: Thumb, alt: "recommended", boxSize: "20px" },
    5: { src: Bull, alt: "exceptional", boxSize: "30px" },
  };
  if (rating_top < 3) return null;
  return <Image {...iconMap[rating_top]} marginTop={1} />;
};

export default Emoji;
