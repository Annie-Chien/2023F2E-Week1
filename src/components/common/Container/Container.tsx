import React, { PropsWithChildren } from 'react';
import S from './Container.module.scss';

const Container = ({ children }: PropsWithChildren) => {
  return <div className={S.container}>{children}</div>;
};

export default Container;
