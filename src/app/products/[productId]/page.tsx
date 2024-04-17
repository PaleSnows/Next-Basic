import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const genearateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product Details Page {params.productId}</h1>;
}
