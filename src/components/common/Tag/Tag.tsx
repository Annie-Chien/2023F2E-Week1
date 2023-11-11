import { PropsWithChildren } from 'react';
import S from './Tag.module.scss';
const Tag = (props: PropsWithChildren) => {
  return <div className={S.tag}>{props.children}</div>;
};

export default Tag;
