import { useState } from 'react';
import { Typography, Checkbox, Button, Radio } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import s from './Test.module.scss';

const { Paragraph } = Typography;

export const Test = ({ 
  answers,
  correct,
  radio,
}: {
    answers: string[];
    correct: number[];
    radio?: boolean;
  }) => {
  const [value, setValue] = useState<CheckboxValueType[]>([]);
  const [submited, setSubmited] = useState(false);

  return (
    <>
      {radio ?
        <Radio.Group>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group> :
        <Paragraph>
          <Checkbox.Group
            style={{ flexDirection: 'column' }}
            value={value}
            onChange={(value) => {
              if (!submited) setValue(value);
            }}
          >
            {answers.map((answer, index) =>               
              <Checkbox
                value={index}
                className={`
                  ${submited && value.includes(index) ? correct.includes(index) ? s.green : s.red : ''}
                `}
              >
                {answer}
              </Checkbox>
            )}
          </Checkbox.Group>
        </Paragraph>
      }
      <Button
        type='primary'
        onClick={() => setSubmited(true)}
        disabled={submited || value.length === 0}
      >
        Проверить
      </Button>
    </>
  )
}