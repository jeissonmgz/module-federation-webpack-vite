import { mount } from 'microFrontendReact/MicroFrontendReactApp'
import React, { useRef, useEffect } from 'react'


export default ({pathname, navigateShell}) => {
    const ref = useRef(null);


    useEffect(() => {
        mount(ref.current, "/microfrontend", pathname, navigateShell);
    }, [pathname])

    return <div ref={ref} />
}