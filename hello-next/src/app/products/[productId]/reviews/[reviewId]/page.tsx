export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      Review of Product: {params.productId} and Review id is: {params.reviewId}
    </h1>
  );
}
