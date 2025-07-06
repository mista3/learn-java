import { Typography } from 'antd';
import { CodeBlock, InfoText} from '../../components';

const { Title, Paragraph, Text } = Typography;

export const LectureWorkWithVars = () => {
  return <>
    <Title level={2}>Работа с переменными</Title>
    <Title level={3}>Арифметические операции</Title>
    <Paragraph>
      Есть унарные операции (выполняются над одним операндом), бинарные - над двумя операндами, а также тернарные - выполняются над тремя<InfoText
        description={<>
          <Text strong>Операнд</Text> - переменная или значение (например, число), участвующее в операции.
        </>}
      >операндами</InfoText>. 
    </Paragraph>
    <Paragraph>Рассмотрим все виды операций.</Paragraph>
    <Title level={3}>Бинарные операции</Title>
      <ul>
        <li><Text><Text keyboard strong>+</Text> — операция сложения двух чисел</Text></li>
        <li><Text><Text keyboard strong>-</Text> — операция вычитания двух чисел</Text></li>
        <li><Text><Text keyboard strong>*</Text> — операция умножения двух чисел</Text></li>
      <li>
        <Text>
          <Text keyboard strong>/</Text> — операция деления двух чисел.
          При делении стоит учитывать, что если в операции участвуют два целых числа, то результат деления будет округляться до целого числа, даже если результат присваивается переменной <Text strong>float</Text> или <Text strong>double</Text>.
          Чтобы результат представлял число с плавающей точкой, хотя бы один из операндов также должен представлять число с плавающей точкой.
        </Text>
      </li>
      <li><Text><Text keyboard strong>%</Text> — получение остатка от деления двух чисел</Text></li>
    </ul><br/>
    <Paragraph>Примеры:</Paragraph>
    <Title level={5}>Сложение (+)</Title>
    <CodeBlock>
      {`int a = 10;
int b = 7;
int c = a + b;  // 17
int d = 4 + b;  // 11`}
    </CodeBlock>
    <Title level={5}>Вычитание (-)</Title>
    <CodeBlock>
      {`int a = 10;
int b = 7;
int c = a - b;  // 3
int d = 4 - a;  // -6`}
    </CodeBlock>
    <Title level={5}>Умножение (*)</Title>
    <CodeBlock>
      {`int a = 10;
int b = 7;
int c = a * b;  // 70
int d = b * 5;  // 35`}
    </CodeBlock>
    <Title level={5}>Деление (/)</Title>
    <CodeBlock>
      {`int a = 20;
int b = 5;
int c = a / b;  // 4
double d = 22.5 / 4.5;  // 5.0`}
    </CodeBlock>
    <Title level={5}>Получение остатка от деления (%)</Title>
    <CodeBlock>
      {`int a = 33;
int b = 5;
int c = a % b;  // 3
int d = 22 % 4; // 2`}
    </CodeBlock>
    <Title level={3}>Унарные операции</Title>
    <Paragraph>
      Есть две унарные арифметические операции, которые производятся над одним числом: ++ (инкремент) и -- (декремент).
      Каждая из операций имеет две разновидности: префиксная и постфиксная:
    </Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Text keyboard>++</Text> (префиксный инкремент).
            Предполагает увеличение переменной на единицу.
          </Paragraph>
          <Paragraph>Пример: <Text code>value = ++a;</Text></Paragraph>
          <Paragraph>Сначала значение переменной <Text strong>а</Text> увеличивается на единицу, потом это значение присваивается переменной <Text strong>value</Text>.</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`int a = 8;
int b = ++a;
System.out.println(a); // 9
System.out.println(b); // 9`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph>
            <Text keyboard>++</Text> (постфиксный инкремент). 
            Также представляет увеличение переменной на единицу. 
          </Paragraph>
          <Paragraph>Пример: <Text code>value = a++;</Text></Paragraph>
          <Paragraph>Сначала значение переменной <Text strong>а</Text> присваивается переменной <Text strong>value</Text>, а потом увеличивается значение переменной <Text strong>а</Text> на единицу.</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`int a = 8;
int b = a++;
System.out.println(a); // 9
System.out.println(b); // 8`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph>
            <Text keyboard>--</Text> (префиксный декремент).
            Предполагает уменьшение переменной на единицу.
          </Paragraph>
          <Paragraph>Пример: <Text code>value = --a;</Text></Paragraph>
          <Paragraph>Сначала значение переменной <Text strong>а</Text> уменьшается на единицу, и после этого уже измененное значение присваивается переменной <Text strong>value</Text>.</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`int a = 8;
int b = --a;
System.out.println(a); // 7
System.out.println(b); // 7`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph>
            <Text keyboard>--</Text> (постфиксный декремент). 
            Также уменьшает значение на единицу. 
          </Paragraph>
          <Paragraph>Пример: <Text code>value = a--;</Text></Paragraph>
          <Paragraph>Сначала значение переменной <Text strong>а</Text> присваивается переменной <Text strong>value</Text>, затем значение <Text strong>а</Text> уменьшается на единицу.</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`int a = 8;
int b = a--;
System.out.println(a); // 7
System.out.println(b); // 8`}
          </CodeBlock>
        </li>
      </ul>
    <Title level={3}>Приоритет арифметических операций</Title>
    <Paragraph>
      Одни операции имеют больший приоритет и выполняются раньше.
      Ниже представлен список операций в порядке уменьшения приоритета:
      <ol>
        <li><Text strong>++</Text> (постфиксный инкремент), <Text strong>--</Text> (постфиксный декремент)</li>
        <li><Text strong>++</Text> (префиксный инкремент), <Text strong>--</Text> (префиксный декремент)</li>
        <li><Text strong>*</Text> (умножение), <Text strong>/</Text> (деление), <Text strong>%</Text> (остаток от деления)</li>
        <li><Text strong>+</Text> (сложение), <Text strong>-</Text> (вычитание)</li>
      </ol>
    </Paragraph>
    <Paragraph>
      <Text strong>Скобки</Text> могут переопределить порядок вычислений.
      Действие, заключенное в скобки, будет выполняться первым.
    </Paragraph>
  </>
}