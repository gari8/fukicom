import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { abridge } from "@/utils/format";

export interface Track {
  number: number;
  title: string;
  count: number;
  content: string;
  ocp: boolean;
  publish: boolean;
}

export default function TrackBox(props: Track) {
  return (
    <Box p={4} mt={2} mb={8} boxShadow={"0.5px 0 1.5px gray"} borderRadius={4}>
      <Heading textAlign={"center"} as={"h4"} size={"md"} color={"gray"} mb={2}>
        {props.title}
      </Heading>
      <Heading textAlign={"center"} as={"h4"} size={"sm"}>
        - Track {props.number} -
      </Heading>
      <Text color={"gray.600"} my={10} mx={8} textAlign={"center"}>
        {abridge(props.content, 300)}
      </Text>
      <Flex justify={"center"} mt={20}>
        <Button color={"gray"} mx={2} _focus={{ outline: 0 }}>
          詳細情報
        </Button>
        {props.ocp && (
          <Button color={"green"} mx={2} _focus={{ outline: 0 }}>
            音声投稿
          </Button>
        )}
      </Flex>
    </Box>
  );
}
