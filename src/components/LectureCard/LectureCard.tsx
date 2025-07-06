import { Text } from '..'
import { HatIcon } from '../../assets/icons';
import { getNoun } from '../../helpers';
import s from './LectureCard.module.scss';
import {
  useNavigate,
} from "react-router-dom";

export const LectureCard = ({
  id,
  name,
  tasks,
  read,
}: {
    id: string;
    name: string;
    tasks: number;
    read: boolean;
  }) => {
  const navigate = useNavigate();

  return <div className={s.lecture_card} onClick={() => navigate(`/lectures/${id}`)}>
    {read && <HatIcon className={s.hat} />}
    <div className={s.top}>
      <Text size={16}>Тема {id}</Text>
    </div>
    <Text className={s.text} size={14} weight={500}>
      {name}
    </Text>
    <div className={s.bottom}>
      <Text size={10} weight={700}>
        {tasks === 0 ? 'нет' : tasks} {getNoun(tasks, 'задача', 'задачи', 'задач')}
      </Text>
    </div>
  </div>
}

