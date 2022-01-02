import Layout from "@/components/templates/Layout";
import { Box, Heading } from "@chakra-ui/react";
import TrackBox, { Track } from "@/components/molecules/TrackBox";

export default function Product() {
  const tracks: Track[] = [
    {
      number: 1,
      title: "SubTitle",
      count: 304,
      content: "fdafsdfafdadfafdfsfdafdfadfd",
      ocp: true,
      publish: true,
    },
    {
      number: 2,
      title: "SubTitle",
      count: 304,
      content:
        "fdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdf\nadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfdfdafsdfafdadfafdfsfdafdfadfd",
      ocp: true,
      publish: true,
    },
  ];

  return (
    <Layout>
      <Box width="70%" m="auto" py={4}>
        <Box p={4} mt={4} mb={8} borderRadius={3} backgroundColor={"lightgray"}>
          <Heading as={"h3"} size={"lg"}>
            Lorem ipsum
          </Heading>
          ここで説明・募集者情報が入る
        </Box>

        {tracks.map((track: Track, index: number) => {
          return (
            <TrackBox
              key={index}
              content={track.content}
              number={track.number}
              count={track.count}
              ocp={track.ocp}
              publish={track.publish}
              title={track.title}
            />
          );
        })}
      </Box>
    </Layout>
  );
}
