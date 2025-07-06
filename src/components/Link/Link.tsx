import { Typography } from 'antd';
import { LinkProps } from './Link.types';

export const Link = ({
  size = '14px',
  weight = 400,
  children,
  ...props
}:LinkProps) => (
  <Typography.Link
    style={{
      fontSize: size,
      fontWeight: weight,
    }}
    {...props}
  >
    {children}
  </Typography.Link>
);
