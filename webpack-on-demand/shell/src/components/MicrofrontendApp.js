import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { importRemote } from "../mfe/importRemote";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    importRemote({
      url: "http://localhost:3010",
      scope: "microFrontendReact",
      module: "MicroFrontendReact",
    }).then(({ mount }) => {
      const { onParentNavigate } = mount(ref.current, "/microfrontend", history);
      history.listen(onParentNavigate);
    });
  }, []);

  return <div ref={ref} />;
};
