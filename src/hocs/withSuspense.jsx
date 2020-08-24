import React, { Suspense } from "react";

export default function withSuspense(Component) {
  function hoc(props) {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component {...props} />
      </Suspense>
    );
  }

  hoc.displayName = `withSuspense(${Component.displayName || Component.name})`;

  return hoc;
}
