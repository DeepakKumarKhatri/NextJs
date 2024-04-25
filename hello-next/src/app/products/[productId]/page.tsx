export default function ProductDetail({
  params,
}: {
  params: {
    productId: number;
  };
}) {
  return <h1>Product Detail Page of Product: {params.productId}</h1>;
}
