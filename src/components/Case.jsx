import React from "react";

export default function Case({ children }) {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-12 sm:col-start-1">{children}</section>
    </div>
  );
}
