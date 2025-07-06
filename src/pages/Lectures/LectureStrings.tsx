import { Typography } from 'antd';
import { CodeBlock } from '../../components';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureStrings = () => {
  return <>
    <Title level={2}>Строки</Title>
    <Paragraph>
      Для работы со строками в Java предназначен класс <Text strong>String</Text>, который включает в себя ряд методов для различных действий со строками.
      Строки представляют собой последовательность символов.
      <Text strong>String</Text> представляет собой ссылку на область в памяти, в которой размещены символы.
    </Paragraph>
    <Paragraph>
      Для создания строки можно использовать один из способов:
    </Paragraph>
    <CodeBlock>
      {`String firstName = "Bob";
System.out.println(firstName); // Bob

String lastName = new String(new char[] {'S', 'm', 'i', 't', 'h'}); 
System.out.println(lastName); // Smith

String emptyString1 = new String(); // пустая строка
System.out.println(emptyString1); // строка пустая, поэтому ничего не выведется

String emptyString2 = "";
System.out.println(emptyString2); // строка пустая, поэтому ничего не выведется
`}
    </CodeBlock>
    <Paragraph><WarningIcon/>Объект String  является неизменяемым. При изменениях строки фактически будет создаваться новая строка</Paragraph>
    <Paragraph>Основные методы:</Paragraph>
    <ul>
      <li>
        <Paragraph>
          <Text code strong>length()</Text> – нахождение количества символов в строке, включая пробелы
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String firstName = "Bob";
System.out.println(firstName.length()); //3`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>isEmpty()</Text> – проверка строки на пустоту (если строка пустая возвращает <Text strong>true</Text>, иначе <Text strong>false</Text>)
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String emptyString1 = "";
System.out.println(firstName.isEmpty); //true`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>concat()</Text> – объединение строк. Стоит учитывать, что строки совмещаются без разделителя
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String firstName = "Bob";
String lastName = "Smith";
System.out.println(firstName.concat(lastName)); // BobSmith`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>join()</Text> – нахождение количества символов в строке, включая пробелы
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String firstName = "Bob";
String lastName = "Smith";
String result = String.join("_", firstName, lastName);
System.out.println(result); // Bob_Smith`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>charAt()</Text> – возвращает символ строки по индексу. Нумерация начинается с 0
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String city = “Saint Petersburg”;
System.out.println(city.charAt(6)); // P`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>equals()</Text> – сравнение строк с учетом регистра. Возвращает <Text strong>true</Text>, если строки полностью равны, иначе <Text strong>false</Text>
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String line1 = "Flower";
String line2 = "flower";
System.out.println(line1.equals(line2)); // false`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>toLowerCase()</Text> – перевод всей строки в нижний регистр
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String line1 = "Flower";
System.out.println(line1.toLowerCase()); // flower`}
        </CodeBlock>
      </li>
      <li>
        <Paragraph>
          <Text code strong>toUpperCase()</Text> – перевод всей строки в верхний регистр
        </Paragraph>
        <Paragraph>Пример:</Paragraph>
        <CodeBlock>
          {`String line1 = "Flower";
System.out.println(line1.toLowerCase()); // FLOWER`}
        </CodeBlock>
      </li>
    </ul>
  </>
}