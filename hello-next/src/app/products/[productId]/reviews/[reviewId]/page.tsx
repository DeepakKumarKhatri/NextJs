import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  } else {
    return (
      <h1>
        Review of Product: {params.productId} and Review id is:{" "}
        {params.reviewId}
      </h1>
    );
  }
}
