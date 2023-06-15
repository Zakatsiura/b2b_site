import React from 'react';

interface GifComponentProps {
    src: string;
    alt: string;
}

const GifComponent: React.FC<GifComponentProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
};

export { GifComponent };
