import notFound from "@/app/not-found";
import NotFound from "./not-found";

export default function reviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if(parseInt(params.reviewId)>1000){
   return NotFound()
  }
  return (
    <>
      <h1>Review {params.reviewId} for product {params.productId}</h1>
    </>
  );
}
