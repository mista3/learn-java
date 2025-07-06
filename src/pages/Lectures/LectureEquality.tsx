import { Typography } from 'antd';
import { CodeBlock } from '../../components';
const { Title, Paragraph, Text } = Typography;

export const LectureEquality = () => {
  return <>
    <Title level={2}>Условные выражения</Title>
    <Paragraph>
      Условные выражения представляют собой некоторое условие и возвращают значение типа <Text strong>boolean</Text>, то есть значение <Text strong>true</Text> (если условие истинно), или значение <Text strong>false</Text> (если условие ложно).
      К условным выражениям относятся операции сравнения и логические операции.
    </Paragraph>
    <Title level={3}>Операции сравнения</Title>
    <Paragraph>В операциях сравнения сравниваются два операнда.</Paragraph>
      <ul>
        <li>
          <Text><Text code strong>==</Text> – сравнивает два операнда и возвращает <Text strong>true</Text>, если операнды равны, и <Text strong>false</Text>, если операнды не равны</Text><br/><br/>
          <CodeBlock>
      {`int a = 10;
int b = 4;
boolean c = a == b;   // false
boolean d = a == 10;  // true`}
          </CodeBlock>
        </li>
        <li>
          <Text><Text code strong>!=</Text> – сравнивает два операнда и возвращает <Text strong>true</Text>, если операнды не равны, и <Text strong>false</Text>, если операнды равны</Text><br/><br/>
          <CodeBlock>
      {`int a = 10;
int b = 4;
boolean c = a != b;   // true
boolean d = a != 10;  // false`}
          </CodeBlock>
        </li>
        <li>
          <Text><Text code strong>{'<'}</Text> (меньше чем) – возвращает <Text strong>true</Text>, если первый операнд меньше второго, иначе возвращает <Text strong>false</Text></Text><br/><br/>
          <CodeBlock>
      {`int a = 10;
int b = 4;
boolean c = a < b;  // false`}
          </CodeBlock>
        </li>
        <li>
          <Text><Text code strong>{'>'}</Text> (больше чем) – возвращает <Text strong>true</Text>, если первый операнд больше второго, иначе возвращает <Text strong>false</Text></Text><br/><br/>
          <CodeBlock>
      {`int a = 10;
int b = 4;
boolean c = a > b;  // true`}
          </CodeBlock>
        </li>
        <li>
          <Text><Text code strong>{'>='}</Text> (больше или равно) – возвращает <Text strong>true</Text>, если первый операнд больше второго или равен второму, иначе возвращает <Text strong>false</Text></Text><br/><br/>
          <CodeBlock>
      {`boolean c = 10 >= 10;  // true
boolean b = 10 >= 4;   // true
boolean d = 10 >= 20;  // false`}
          </CodeBlock>
        </li>
        <li>
          <Text><Text code strong>{'<='}</Text> (меньше или равно) – возвращает <Text strong>true</Text>, если первый операнд меньше второго или равен второму, иначе возвращает <Text strong>false</Text></Text><br/><br/>
          <CodeBlock>
      {`boolean c = 10 <= 10;  // true
boolean b = 10 <= 4;   // false
boolean d = 10 <= 20;  // true`}
          </CodeBlock>
        </li>
      </ul>
    <Title level={3}>Логические операции</Title>
    <Paragraph>
      В Java есть логические операции, которые также представляют условие и возвращают <Text strong>true</Text> или <Text strong>false</Text> и обычно объединяют несколько операций сравнения. К логическим операциям относят следующие:
    </Paragraph>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <Paragraph><Text keyboard strong>|</Text> – логическое или: <Text code>c = a | b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если либо <Text strong>a</Text>, либо <Text strong>b</Text>, либо <Text strong>a</Text> и <Text strong>b</Text> одновременно равны <Text strong>true</Text>, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`boolean a1 = (63 > 51) | (15 < 20); // 63 > 51 – true, 15 < 20 – true, оба выражения верны, поэтому возвращается true
boolean a2 = (63 > 51) | (15 > 20); // 63 > 51 – true, 15 > 20 – false, одно выражение верно,  поэтому возвращается true`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>&</Text> – логическое и:  <Text code>c = a & b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если и <Text strong>a</Text>, и <Text strong>b</Text>  равны <Text strong>true</Text>, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`boolean b1 = (20 < 25) & (32 > 28); // 20 < 25 – true, 32 > 28 – true, оба выражения верны, поэтому возвращается true
boolean b2 = (32 > 28) & (20 > 25); // 32 > 28 – true, 20 > 25 – false, только одно выражение верно,  поэтому возвращается false`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>!</Text> – логическое отрицание: <Text code>c = !b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если <Text strong>b</Text> равно <Text strong>false</Text>, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`int c1 = 37;
boolean c1 != 18;  // 37 != 18 – true, поэтому возвращается true
int c2 = 18;
boolean c2 != 18;  // 18 != 18 – false, поэтому возвращается false`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>^</Text> – исключающее или: <Text code>c = a ^ b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если <Text strong>a</Text> и <Text strong>b</Text> имеют разные значения, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`boolean d1 = (23 > 89) ^ (11 < 50); // 23 > 89 - false, 11 < 50 - true, поэтому возвращается true
boolean d2 = (23 < 89) ^ (11 < 50); // 23 > 89 - true, 11 < 50 - true, поэтому возвращается false`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>||</Text> – условное или: <Text code>c = a || b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если либо <Text strong>a</Text>, либо <Text strong>b</Text> (либо и <Text strong>a</Text>, и <Text strong>b</Text>) равны <Text strong>true</Text>, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`boolean e1 = (19 > 22) || (11 < 22); // 19 > 22 - false, 11 < 22 - true, поэтому возвращается true
boolean e2 = (19 > 22) || (11 > 22); // 19 > 22 - false, 11 > 22 - false, поэтому возвращается false`}
          </CodeBlock>
        </li>
        <li>
          <Paragraph><Text keyboard strong>&&</Text> – условное и: <Text code>c = a && b;</Text> (<Text strong>c</Text> равно <Text strong>true</Text>, если и <Text strong>a</Text>, и <Text strong>b</Text> равны <Text strong>true</Text>, иначе <Text strong>c</Text> будет равно <Text strong>false</Text>)</Paragraph>
          <Paragraph>Пример:</Paragraph>
          <CodeBlock>
            {`boolean f1 = (19 > 22) && (11 < 22); // 19 > 22 - false, поэтому возвращается false (11 < 22 - true, но не вычисляется)
boolean f2 = (22 > 11) && (4 / 2 < 3); // 22 > 11 - true, 4/2 < 3 - true, поэтому возвращается true`}
          </CodeBlock>
        </li>
      </ul>
    <Paragraph>Две пары операций <Text strong>|</Text> и <Text strong>||</Text> (<Text strong>&</Text> и <Text strong>&&</Text>) выполняют похожие действия, однако же они не равнозначны. </Paragraph>
    <Paragraph>Выражение <Text code>c = a | b;</Text> будет вычислять сначала <Text strong>оба значения - a и b</Text> и на их основе выводить результат. </Paragraph>
    <Paragraph>В выражении же <Text code>c = a || b;</Text> сначала будет вычисляться значение <Text strong>a</Text>, и если оно равно <Text strong>true</Text>, то вычисление значения <Text strong>b</Text> уже смысла не имеет, так как у нас в любом случае уже <Text strong>c</Text> будет равно <Text strong>true</Text>. Значение <Text strong>b</Text> будет вычисляться только в том случае, если <Text strong>a</Text> равно <Text strong>false</Text>.</Paragraph>
    <Paragraph>То же самое касается пары операций <Text strong>&</Text> / <Text strong>&&</Text>. В выражении <Text code>c = a & b;</Text> будут вычисляться оба значения - <Text strong>a</Text> и <Text strong>b</Text>.</Paragraph>
    <Paragraph>В выражении же <Text code>c = a && b;</Text> сначала будет вычисляться значение <Text strong>a</Text>, и если оно равно <Text strong>false</Text>, то вычисление значения <Text strong>b</Text> уже не имеет смысла, так как значение c в любом случае равно <Text strong>false</Text>. Значение <Text strong>b</Text> будет вычисляться только в том случае, если <Text strong>a</Text> равно <Text strong>true</Text>.</Paragraph>
    <Paragraph>Таким образом, операции <Text strong>||</Text> и <Text strong>&&</Text> более удобны в вычислениях, позволяя сократить время на вычисление значения выражения и тем самым повышая производительность.</Paragraph>
  </>
}