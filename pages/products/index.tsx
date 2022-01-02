import Layout from "@/components/templates/Layout";
import { Box } from "@chakra-ui/react";
import ProductRow from "@/components/molecules/ProductRow";

export default function Products() {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <Layout>
      <Box width="70%" m="auto" py={4}>
        {products.map((_, index: number) => {
          return <ProductRow key={index} />;
        })}
      </Box>
    </Layout>
  );
}
