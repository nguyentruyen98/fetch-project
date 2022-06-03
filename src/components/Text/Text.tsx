import './Text.scss';

import clsx from 'clsx';
import React from 'react';
interface ITextProps {
  children: React.ReactNode;
  textStyle?:
    | 'header-1'
    | 'header-3'
    | 'paragraph-1'
    | 'paragraph-3'
    | 'title-1'
    | 'title-2'
    | 'title-3';
  className?: string;
  textColor?: 'blue-dark' | 'white' | 'grey-1';
  textAlign?: 'center';
}
const Text = ({
  textStyle = 'header-3',
  children,
  className,
  textColor,
  textAlign,
}: ITextProps) => {
  return (
    <div
      className={clsx(
        className,
        textStyle,
        textColor,
        textAlign,
        'custom-text',
      )}
    >
      {children}
    </div>
  );
};

export default Text;
