import { mount } from 'mfe2/RoutesMFE2'
import React, { useRef, useEffect } from 'react'


export default ({pathname, navigateShell}) => {
    const ref = useRef(null);


    useEffect(() => {
        mount(ref.current, "/microfrontend2", pathname, navigateShell);
    }, [pathname])

    return <div ref={ref} />
}