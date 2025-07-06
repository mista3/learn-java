import { Typography } from 'antd';
import { CodeBlock} from '../../components';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureAssignment = () => {
  return <>
    <Title level={2}>Операции присваивания</Title>
    <Paragraph>
      Рассмотрим операции присваивания, которые представляют комбинацию простого присваивания с другими арифметическими операциями: 
    </Paragraph>
      <ul>
        <li>
          <Paragraph><Text keyboard strong>=</Text> — простое присваивание значения какой-либо переменной</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`int a = 10;
int b = 7;
int c = a + b;  // 17
int d = 4 + b;  // 11`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>+=</Text> : Переменной присваивается результат сложения ее значения и значения, написанного после знака +=</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`int c = 5;
int b = 4;
c += b; // равносильно выражению c = c + b;
System.out.println(c); // 9`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>-=</Text> : Переменной присваивается результат вычитания ее значения и значения, стоящего после знака -=</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`int c = 15;
int b = 5;
c -= b; // равносильно выражению c = c - b;
System.out.println(c); // 10`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>*=</Text> : Переменной присваивается результат умножения ее значения на значение, стоящее после знака *=</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`c *= b;
int c = 6;
int b = 5;
c *= b; // равносильно выражению c = c * b;
System.out.println(c); // 30`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>/=</Text> : Переменной присваивается результат деления ее значения на значение, стоящее после знака /=</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`int c = 57;
int b = 5;
c /= b; // равносильно выражению c = c / b;
System.out.println(c); // 11, так как данная операция производит деление нацело.`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>%=</Text> : Переменной присваивается результат нахождения остатка от деления ее значения на значение, стоящее после знака %=</Paragraph>
          <Paragraph>Примеры:</Paragraph>
          <CodeBlock>
            {`int c = 76;
int b = 11;
c %= b;
System.out.println(c); // 10`}
          </CodeBlock>
        </li>
      </ul>
    <Paragraph><WarningIcon/>Перечисленные операторы пишутся слитно</Paragraph>
  </>
}