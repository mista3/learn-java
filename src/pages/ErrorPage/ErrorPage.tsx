import { Button, Result } from 'antd'
import { useNavigate } from "react-router-dom";
import { ROOT_PATH } from '../../router';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return <Result
    status="404"
    title="404"
    subTitle="Страница не найдена"
    extra={<Button type="primary" onClick={()=>navigate(ROOT_PATH)}>На главную</Button>}
  />

}