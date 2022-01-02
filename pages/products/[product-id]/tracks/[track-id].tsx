import Layout from "@/components/templates/Layout";
import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Track() {
  return (
    <Layout>
      <Box width="70%" m="auto" py={4}>
        <Table variant="simple" mt={4}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </Box>
    </Layout>
  );
}
