import React, { useEffect, useRef, useState } from 'react';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import AppComponent from 'AngularMfe/App';

const AngularAppLazy = React.lazy(() => import("AngularMfe/App"));

const AngularMFE = () => {
  const angularRef = useRef(null);
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (!angularRef) return;
    angularRef.current.innerHTML = "<app-root></app-root>";
    setRender(true);
  
    return () => {
      setRender(false);
    }
  }, [angularRef])
  
  /*
  console.log("AppComponent", AppComponent)

  useEffect(() => {
    platformBrowserDynamic().bootstrapModule(AppComponent)
      .catch(err => console.error(err));
  }, []);
  */

  console.log("first")

  return (<>
    <div ref={angularRef} />
    {render && <React.Suspense fallback={<div>Loading...</div>}>
      <AngularAppLazy />
    </React.Suspense>}
  </>);
};

export default AngularMFE;