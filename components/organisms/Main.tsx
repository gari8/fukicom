import constant from "@/constant";

export default function Main({ children }) {
  return (
    <main
      style={{
        minHeight: `calc(100vh - ${constant.APP_HEADER_HEIGHT}px - ${constant.APP_FOOTER_HEIGHT}px)`,
      }}
    >
      {children}
    </main>
  );
}
