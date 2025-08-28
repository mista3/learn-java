import { Button } from 'antd';
import s from './Header.module.scss';
import { Text, NavDrawer } from '..';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BurgerIcon } from '../../assets/icons';
import { ROOT_PATH } from '../../router';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  

  return <div className={s.header}>
    <Button className={s.burger} type="ghost" icon={<BurgerIcon />} onClick={() => setOpen(true)}/>
    <Text size={32} weight={700} className={s.title} onClick={()=>navigate(ROOT_PATH)}>LearnJava</Text>
    <div className={s.burger_shadow}/>
    <NavDrawer open={open} onClose={() => setOpen(false)}/>
  </div>
}