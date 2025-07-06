import { Typography } from 'antd';
import { TextProps } from './Text.types';

export const Text = ({
  size = '14px',
  weight = 400,
  children,
  ...props
}:TextProps) => (
  <Typography.Text
    style={{
      fontSize: size,
      fontWeight: weight,
    }}
    {...props}
  >
    {children}
  </Typography.Text>
);
