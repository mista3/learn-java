import { ReactNode } from 'react'
import s from './ConsoleOutput.module.scss';
import { Typography } from 'antd';

const { Text } = Typography;

export const ConsoleOutput = ({
  children,
}: {
    children: ReactNode;
}) => {
  return <pre className={s.console_output}>
    <Text>{children}</Text>
  </pre>
}