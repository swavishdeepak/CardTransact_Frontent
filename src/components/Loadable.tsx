// import React, { Suspense, ComponentType, ReactElement } from "react";
// import Loader from "./Loader";

// const Loadable = <Props extends {}>(
//   Component: ComponentType<Props>
// ): React.FC<Props> => {
//   return (props: Props): ReactElement => (
//     <Suspense fallback={<Loader />}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

// export default Loadable;


import React, { Suspense, ComponentType, ReactElement } from "react";
import Loader from "./Loader";

const Loadable = <Props extends {}>(
  Component: ComponentType<Props>
): React.FC<Props> => {
  return (props: Props): ReactElement => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;

