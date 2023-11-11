import React from 'react';

interface ImageProps {
  src: string;
  width?: number;
  style?: CSSStyleRule;
}

const Image = (props: ImageProps) => {
  const { src } = props;
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default Image;
