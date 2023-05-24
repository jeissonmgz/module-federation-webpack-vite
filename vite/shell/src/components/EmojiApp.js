
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Button from 'remoteApp/Button';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, '/comprar')
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}