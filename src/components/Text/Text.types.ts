import { CSSProperties } from 'react';
import { TextProps as AntTextProps } from 'antd/es/typography/Text';

export interface TextProps extends AntTextProps {
  size?: CSSProperties['fontSize'];
  weight?: CSSProperties['fontWeight'];
}
