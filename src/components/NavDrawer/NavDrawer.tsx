import { Button, Drawer, List } from 'antd';
import { lectures } from '../../lectures';
import {
  useNavigate,
  matchPath,
} from "react-router-dom";
import { useMemo } from 'react';
import { CloseIcon } from '../../assets/icons';

export const NavDrawer = ({
  open,
  onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
  const navigate = useNavigate();

  const match = matchPath( {
    path: "/lectures/:id",
  }, location.pathname);

  const currentId = useMemo(()=>match?.params?.id, [match])

  const list = useMemo(() => <List
    size='small'
    dataSource={lectures}
    renderItem={({ id: lectureId, name }) => {
      return <List.Item>
          <Button type={currentId === `${lectureId}` ? 'primary' : 'text'} onClick={() => navigate(`/lectures/${lectureId}`)}>{lectureId}. {name}</Button>
        </List.Item>
      }
    }
  />, [currentId, navigate])

  return <Drawer
    title="Навигация"
    placement='left'
    width={300}
    onClose={onClose}
    open={open}
    closeIcon={<CloseIcon />}
  >
    {list}
  </Drawer>
}