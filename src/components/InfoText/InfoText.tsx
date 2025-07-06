import { Popover, Typography } from 'antd'
import { InfoIcon } from '../../assets/icons';
import { ReactNode } from 'react';
import s from './InfoText.module.scss';

const { Text } = Typography;

export const InfoText = ({
  description,
  children,
}: {
    description: ReactNode;
    children: ReactNode;
}) => {
  return <Popover
    placement='topRight'
    content={
      <div className={s.content}>
        <Text>
          <InfoIcon className={s.info_icon}/>{description}
        </Text>
      </div>
    }>
      <Text className={s.text}>{` ${children} `}</Text>
  </Popover>
}