import Router from 'next/router'; 
import { useEffect } from 'react';

export default function goHome() {
    useEffect(() => {
        Router.push('/inicio');
    }, []);

    return <div></div>
}

