import React from "react";

export default function ProductDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    productId: string;
  };
}) {
  return (
    <>
      {children}
      <h1>Crousal for different Images of Product {params.productId}</h1>
    </>
  );
}
