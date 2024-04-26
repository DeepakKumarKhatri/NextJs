import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>This is the Inner Layout</h1>
      {children}
    </>
  );
}
