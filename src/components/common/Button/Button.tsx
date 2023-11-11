import { PropsWithChildren } from 'react';
/** Style */
import S from './Button.module.scss';

/* ------------------------ Types ----------------------- */
interface ButtonProps {
  type?: 'primary' | 'text' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
}

/* ------------------ Default Component ----------------- */
const Button = ({
  onClick,
  children,
  size = 'md',
  type = 'primary',
}: ButtonProps & PropsWithChildren) => {
  return (
    <button className={`${S.button} ${S[type]} ${S[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
