import { useParams } from 'react-router-dom'
import s from './LecturePage.module.scss';
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowIcon } from '../../assets/icons';
import { addLectureToRead } from '../../helpers';
import { ReactNode } from 'react';
import { lectures } from '../../lectures';
import { lectureMap } from '../Lectures';

export const LecturePage = () => {
  const [isCtrl, setCtrl] = useState(false);
  
  const { id } = useParams();

  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const currentLecture = useMemo(() => id ? lectureMap[id] : null, [id])
  const isPrev = useMemo(() => id ? +id > 1 : false, [id])
  const isNext = useMemo(() => id ? +id < lectures.length : false, [id])

  useEffect(() => {
    if (id) addLectureToRead(id);
    if (ref.current) {
      ref.current.scrollTo(0, 0);
      ref.current.focus();
    }
  }, [id])

  const LeftButton = ({ children }: { children?: ReactNode }) => (
    <Button
      icon={<ArrowIcon />}
      style={{ opacity: isPrev ? 1 : 0 }}
      onClick={() => id && navigate(`/lectures/${+id - 1}`)}
      className={`${children ? s.desktop : s.mobile} ${isPrev ? '' : s.hidden }`}
    >
      {children}
    </Button>
  )

  const RightButton = ({ children, icon }: { children?: ReactNode, icon?: ReactNode }) => (
    <Button
      icon={icon}
      style={{ opacity: isNext ? 1 : 0 }}
      onClick={() => id && navigate(`/lectures/${+id + 1}`)}
      className={`${children ? s.desktop : s.mobile} ${isNext ? '' : s.hidden }`}
    >
      {children}
    </Button>
  )

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    setCtrl(event.ctrlKey);
    if (isCtrl && id) {
      if (isNext && event.code === 'ArrowRight') { 
        navigate(`/lectures/${+id + 1}`)
      }
      if (isPrev && event.code === 'ArrowLeft') { 
        navigate(`/lectures/${+id - 1}`)
      }
    }
  }

  const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    setCtrl(event.ctrlKey);
  }

  return <div
    className={s.lecture_page}
    ref={ref}
    onKeyDown={onKeyDown}
    onKeyUp={onKeyUp}
    tabIndex={0}
  >
    <Button
      icon={<ArrowIcon />}
      size='small'
      onClick={() => navigate('/')}
      className={s.back_button}
    >
      На главную
    </Button>
    {currentLecture ?
      <div className={s.content}>
        {currentLecture}
        <div className={s.buttons}>
          <LeftButton>
            <span>Предыдущая лекция</span></LeftButton>
          <LeftButton/>
          <RightButton>
            <span className={s.button_text}>Следующая лекция</span><ArrowIcon style={{ rotate: '180deg' }} />
          </RightButton>
          <RightButton icon={<ArrowIcon style={{ rotate: '180deg' }}/>}/>
        </div>
      </div> : 
      <Result
        status="404"
        title="404"
        subTitle="Лекция не найдена"
        extra={<Button type="primary" onClick={()=>navigate('/')}>На главную</Button>}
      />}
  </div>
}