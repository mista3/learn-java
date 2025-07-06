import { useState } from 'react';
import Highlight from 'react-highlight'
import { Button, notification } from 'antd';
import { ClipboardIcon } from '../../assets/icons';

import s from './CodeBlock.module.scss';

export const CodeBlock = ({
  children,
  hover: hoverOverwrite,
}: {
    children: string;
    hover?: boolean;
}) => {
  const [hover, setHover] = useState(false);

  return <div
    className={s.code_block_wrapper}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
  >
    <Highlight className={`java ${s.code} ${s.code_block}`}>{children}</Highlight>
    <Button
      className={`${s.clipboard_button} ${ hoverOverwrite ?? hover ? s.visible : ''}`}
      icon={<ClipboardIcon />}
      size='small'
      type='text'
      onClick={() => {
        navigator.clipboard.writeText(children).then(() => {
          notification.success({
            message: 'Скопировано в буфер обмена',
          });
        });
      }}
    />
  </div>
}