import React, { useEffect } from "react";
import { useState } from "react";

const AngularMfe = ({pathname, navigateShell}) => {
  const [module, setRender] = useState(null)
  useEffect(() => {
    import("AngularMfe/App").then(c=> {
      setRender(c.default);
      c.default.mount(navigateShell);
    });
  }, []);
  useEffect(() => {
    console.log(pathname, module)
    module && module.mount(navigateShell);
  }, [pathname]);
  return (
    <div className="remote-module">
      <app-root></app-root>
    </div>
  );
};

export default AngularMfe;