import { TasksIcon } from '../../assets/icons';
import { Typography } from 'antd';

const { Title } = Typography;

export const TasksLabel = () => (
  <Title level={3} style={{marginTop: 24}}><TasksIcon />Задачи</Title>
)