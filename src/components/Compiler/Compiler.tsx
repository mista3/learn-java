import { useState } from 'react';
import { Button, Input, notification } from 'antd'
import { CodeBlock, ConsoleOutput } from '..'
import { LoadingIcon, PlayIcon } from '../../assets/icons'
import { api } from '../../service';

import s from './Compiler.module.scss';
import s_CodeBlock from '../CodeBlock/CodeBlock.module.scss';

const { TextArea } = Input;

export const Compiler = () => {
  const [hover, setHover] = useState(false);
  const [code, setCode] = useState(`public class Task { 
    public static void main (String args[]) {
        // Код программы
    }
}`);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('...');
  
  const runCode = async () => {
    setLoading(true);
    const data = await api.compile(code);
    if (data) {
      setOutput(data.output);
      if (data.error) {
        notification.error({
          type: 'error',
          placement: 'bottomLeft',
          message: 'Ошибка в коде',
          description: data.error,
        });
      }
    }
    setLoading(false);
  }
  return <div className={s.compiler}>
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
      <CodeBlock hover={hover}>{code}</CodeBlock>
      <TextArea
        className={`${s_CodeBlock.code} ${s.input}`}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        bordered={false}
        autoSize
      />
      <Button
        className={`${s.run_button} ${ hover ? s_CodeBlock.visible : ''}`}
        icon={<PlayIcon />}
        size='small'
        type='text'
        loading={loading}
        onClick={runCode}
      />
    </div>
    <ConsoleOutput>{
      loading ?
        <div className={s.loading_icon_wrapper}>
          <LoadingIcon className={s.loading_icon}/>
        </div> :
        output}
    </ConsoleOutput>
  </div>
}