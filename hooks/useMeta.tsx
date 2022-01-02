import { useRouter } from "next/router";
import constant from "@/constant";

interface MetaData {
  title: string;
  metaData: {
    name: string;
    content: string;
  }[];
  favicon: string;
}

export function useMeta() {
  const router = useRouter();
  const urls = router.pathname.replace("/", "").split("/");
  if (urls.join("/") in metaMap) {
    return metaMap[urls.join("/").trim()];
  }

  return {
    title: constant.APP_NAME,
    metaData: [],
    favicon: constant.APP_FAVICON_PATH,
  } as MetaData;
}

const metaMap: { [key: string]: MetaData } = {
  products: {
    title: "プロダクト一覧",
    metaData: [],
    favicon: constant.APP_FAVICON_PATH,
  },
  "products/[id]": {
    title: constant.APP_NAME + " / プロダクト",
    metaData: [],
    favicon: constant.APP_FAVICON_PATH,
  },
};
