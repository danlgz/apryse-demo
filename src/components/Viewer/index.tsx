'use client'

import {useEffect, useRef, useState} from 'react'
import WebViewer from "@pdftron/webviewer";

const Viewer = () => {
    const viewer = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        WebViewer({
            path: '/webviewer/lib',
            initialDoc: 'https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
            licenseKey: 'demo:1690813932217:7c449d510300000000dec922cbce5803de549dd0037a7ab2e06af49e76',
        // @ts-ignore
        }, viewer.current).then((instance) => {
            console.log({ instance })
        })
    }, [])

    return <div ref={viewer} style={{height: '100vh', width: '100%', background: 'red'}}></div>
}

export default Viewer;
