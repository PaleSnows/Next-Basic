export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product Details Page {params.productId}</h1>;
}
