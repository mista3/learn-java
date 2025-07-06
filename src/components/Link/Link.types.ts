import { CSSProperties } from 'react';
import { LinkProps as AntLinkProps } from 'antd/es/typography/Link';

export interface LinkProps extends AntLinkProps {
  size?: CSSProperties['fontSize'];
  weight?: CSSProperties['fontWeight'];
}
