import React, { useRef, useEffect, useState } from "react";

export default ({basename, pathname, navigateShell}) => {
  const ref = useRef(null);
  const [module, setRender] = useState(null)

  useEffect(() => {
    
    import("ReactMfe/MicroFrontendReact").then(c=> {
      setRender(c.default);
      c.default.mount(ref.current, basename, pathname, navigateShell);
    });
  }, []);
  useEffect(() => {
    module && module.mount(ref.current, basename, pathname, navigateShell);
  }, [pathname]);

  return <div ref={ref}></div>;
};
