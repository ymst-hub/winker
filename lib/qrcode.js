import React from 'react';
import { useQRCode } from 'next-qrcode';

function MakeURL({url}) {
    const { Canvas } = useQRCode();

    return (
        <Canvas
            text={url}
            options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#FFFFFB',
                    light: '#A5DEE4',
                },
            }}
        />
    );
}

export default MakeURL;