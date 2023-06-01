import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const VueMfe = ({basename, pathname, navigateShell}) => {
  const [router, setRouter] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    import("VueMfe/App").then(c=> {
      const { history } = navigate;
      const newRouter = c.default.mount("#app", history, basename, navigateShell);
      setRouter(newRouter);
    });
  }, []);
  useEffect(() => {
    if(!router) return;
    router.push(pathname)
  }, [pathname]);
  return (
    <div id="app">
    </div>
  );
};

export default VueMfe;