import { Image } from "@chakra-ui/image";
import constant from "@/constant";
import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer
      style={{ height: "40px", backgroundColor: "lightgray", display: "flex" }}
    >
      <Image src={constant.APP_LOGO_PATH} />
      <Text>{constant.COPYRIGHT_TEXT}</Text>
    </footer>
  );
}
