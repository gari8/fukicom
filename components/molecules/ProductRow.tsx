import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Text,
  Icon,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import { RiVoiceprintFill } from "react-icons/ri";
import { abridge } from "@/utils/format";

export default function ProductRow() {
  const items = [1, 2, 3, 4];
  const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.`;
  return (
    <Accordion my={4} borderX={"solid 1px lightgrey"} allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <Flex>
              <AccordionButton _focus={{ outline: 0 }}>
                {isExpanded ? (
                  <Icon color={"#0066FF"} as={VscTriangleDown} />
                ) : (
                  <Icon color={"#0066FF"} as={VscTriangleRight} />
                )}
                <Box flex="1" textAlign="left" mx={4}>
                  <Link
                    href={"/products" + "/afdafdfdsfads"}
                    fontWeight={"black"}
                    fontSize={"20px"}
                  >
                    {" "}
                    Click me to see a different style{" "}
                  </Link>
                  <Text fontSize={"14px"} color={"#807F7F"}>
                    {" "}
                    Click me to see a different style{" "}
                  </Text>
                </Box>
                <Flex flexDir={"column"} justify={"center"} mx={6}>
                  <Badge
                    variant="solid"
                    colorScheme="green"
                    px={3}
                    borderRadius={10}
                  >
                    募集中
                  </Badge>
                </Flex>
              </AccordionButton>
            </Flex>
            {items.map((_, index: number) => {
              return (
                <AccordionPanel
                  pb={2}
                  key={index}
                  style={{
                    backgroundColor: "rgba(218, 217, 217, 0.1)",
                    color: "#807F7F",
                    borderTop: "solid 0.5px rgba(218, 217, 217, 0.9)",
                  }}
                >
                  <Flex justify={"space-between"}>
                    <Box>
                      <Text
                        fontWeight={"black"}
                        color={"gray.700"}
                        fontSize={16}
                      >
                        track 1 / line 20
                      </Text>
                      <Flex flexDir={"column"} justify={"center"}>
                        <Text fontSize={14}>{abridge(sampleText, 80)}</Text>
                      </Flex>
                    </Box>
                    <IconButton
                      _focus={{ outline: 0 }}
                      aria-label={"send"}
                      icon={<Icon as={RiVoiceprintFill} color={"#0066FF"} />}
                    />
                  </Flex>
                </AccordionPanel>
              );
            })}
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
