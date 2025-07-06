import { LectureCard, Text } from '../../components';
import { getReadLectures } from '../../helpers';
import { lectures } from '../../lectures';
import s from './MainPage.module.scss';

export const MainPage = () => {
  const readLectures = getReadLectures();

  return <div className={s.main_page}>
    <div className={s.top}>
      <div className={s.upper}>
        <Text size={36} weight={600}>
          Учебник Java
        </Text>
        <Text size={12} weight={600} className={s.lecture_count}>
          Просмотрено тем: {readLectures.length} / {lectures.length}
        </Text>
      </div>
      <Text size={20}>
        Базовые темы по программированию на языке Java
      </Text>
    </div>
    <div className={s.divider}/>
    <div className={s.link_block}>
      {lectures.map(({id, name, tasks}) =>   
        <LectureCard
          key={id}
          id={id}
          name={name}
          tasks={tasks}
          read={readLectures.includes(id)}
        />
      )}
    </div>
  </div>
}