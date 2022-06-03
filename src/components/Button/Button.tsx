import './Button.scss';

import Text from 'components/Text';
import React from 'react';
interface IButtonProps {
  children: React.ReactNode;
}
const Button = ({children}: IButtonProps) => {
  return (
    <button className="button">
      <Text textStyle="title-1" textColor="white">
        {children}
      </Text>
    </button>
  );
};

export default Button;
