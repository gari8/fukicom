import { Image } from "@chakra-ui/image";
import constant from "@/constant";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header
      style={{
        height: `${constant.APP_HEADER_HEIGHT}px`,
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Image
        src={constant.APP_LOGO_PATH}
        height={`${constant.APP_HEADER_HEIGHT}px`}
        onClick={() => router.push("/")}
      />
    </header>
  );
}
