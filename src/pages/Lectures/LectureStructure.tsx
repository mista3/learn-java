import { Typography } from 'antd';
import { CodeBlock, InfoText } from '../../components';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureStructure = () => {
  return <>
  <Title level={2}>Структура программы</Title>
    <Paragraph>
      Основным строительным блоком программы на языке Java являются инструкции (statement).
      Каждая инструкция выполняет некоторое действие, например, вызовы методов, объявление переменных и присваивание им значений.
      После завершения инструкции в Java ставится точка с запятой <Text keyboard>;</Text>.
      Данный знак указывает компилятору на конец инструкции.
      Например:
    </Paragraph>
    <CodeBlock>
      {`System.out.println("Hello World!");`}
    </CodeBlock>
    <Paragraph>
      В данной строке происходит вызов метода, который выводит на консоль строку <Text italic>"Hello World!"</Text>.
      В этом случае вызов является инструкцией, поэтому в конце стоит точка с запятой.
    </Paragraph>
    <Paragraph>
      Распространенной конструкцией является блок кода. 
      Блок кода содержит набор инструкций, который заключается в фигурные скобки. 
      Внутри скобок помещаются сами инструкции. 
    </Paragraph>
    <CodeBlock>
      {`{
    System.out.println("Hello!");
    System.out.println("Welcome to Java!");
}`}
    </CodeBlock>
    <Paragraph>
      Так как Java<InfoText description={<>
        <Text strong>Объектно-ориентированное программирование</Text> – методология программирования с использованием объектов и классов.
      </>}>объектно-ориентированный язык</InfoText>, всю программу можно представить как набор взаимодействующих классов. 
      В одном из классов должен быть основной метод <Text strong>main</Text>. 
      Этот метод является входной точкой в программу. 
      Метод <Text strong>main</Text> выглядит так: 
    </Paragraph>
    <CodeBlock>
      {`public static void main (String args[]) {
}`}
    </CodeBlock>
    <Paragraph>
      <Text strong>public</Text> - модификатор доступа;<br/>
      <Text strong>static</Text> указывает на то, что метод является статическим;<br/>
      <Text strong>void</Text> указывает, что метод не возвращает никакого значения;<br/>
      <Text strong>String args[]</Text> - параметры метода, а именно массив <Text strong>args</Text> типа <Text strong>String</Text> (строки).<br/>
    </Paragraph>
    <Paragraph></Paragraph>
    <Paragraph></Paragraph>
    <Paragraph></Paragraph>
    <Paragraph>Более подробно рассматривать данный материал следует позже.</Paragraph>
    <Title level={3}>Первая программа</Title>
    <Paragraph>
      Обычно первой программой на любом языке программирования является вывод на экран фразы "Hello World".
      Не будем изменять традициям и тоже напишем такую программу.
    </Paragraph>
    <Paragraph>
      <WarningIcon/> Имя файла должно быть в точности таким же, как и имя класса, в котором присутствует метод <Text strong>main</Text>.
      Например: если класс называется Hello, то имя файла должно быть тоже Hello.
    </Paragraph>
    <CodeBlock>
      {`public class Hello { 
    public static void main (String args[]){
         System.out.println("Hello World!");
    }
}`}
    </CodeBlock>
    <Paragraph>
      Есть класс <Text strong>Hello</Text>, содержащий основной метод <Text strong>main</Text>.
      По итогу исполнения данной программы в консоли будет выведена строка Hello World.
    </Paragraph>
    <Title level={3}>Комментарии</Title>
    <Paragraph>
      Код программы может содержать комментарии.
      Комментарии позволяют понять смысл программы, что делают те или иные ее части.
      При компиляции комментарии игнорируются и не оказывают никакого влияния на работу приложения и на его размер.
    </Paragraph>
    <Paragraph>
      В Java есть два типа комментариев: однострочный и многострочный.
      Однострочный комментарий размещается на одной строке после двойного слеша //.
      А многострочный комментарий заключается между символами <Text strong>/* текст комментария */</Text>.
      Он может размещаться на нескольких строках.
    </Paragraph>
    <Paragraph>Пример:</Paragraph>
    <CodeBlock>{`/*
    многострочный комментарий
    Объявление нового класса,
    который содержит код программы
*/
public class Example {   // начало объявления класса Example
    // определение метода main
    public static void main (String args[]){    // объявление нового метода
         System.out.println("Hello World!");     // вывод строки на консоль
    }   // конец объявления нового метода
} // конец объявления класса Example `}
    </CodeBlock>
  </>
}