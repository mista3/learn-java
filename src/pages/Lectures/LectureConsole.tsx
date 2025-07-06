import { Divider, Typography } from 'antd';
import { CodeBlock, Compiler, ConsoleOutput, InfoText, Solution, TasksLabel} from '../../components';
import s from '../../components/ConsoleOutput/ConsoleOutput.module.scss';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureConsole = () => {
  return <>
    <Title level={2}>Консольный ввод / вывод</Title>
    <Paragraph>
      Наиболее простой способ взаимодействия с пользователем представляет консоль: можно выводить какую-либо информацию на консоль или считывать с консоли некоторые данные.
      Для взаимодействия с консолью в Java применяется класс <Text strong>System</Text>, а его функциональность обеспечивает консольный ввод и вывод. 
    </Paragraph>
    <Title level={3}>Вывод на консоль</Title>
    <Paragraph>
      Для создания потока вывода в классе <Text strong>System</Text> определен объект <Text strong>out</Text>.
      В этом объекте определено несколько методов
    </Paragraph>
    <Paragraph>
      <ol>
        <li><Text code>println</Text> – позволяет вывести на консоль значение с последующим переводом курсора на следующую строку</li>
        <li><Text code>print</Text> – аналогичен предыдущему. Отличие в том, что курсор остается на той же строке</li>
        <li><Text code>printf</Text> – предоставляет возможность форматировать выводимую информацию с помощью специальных обозначений</li>
      </ol>
    </Paragraph>
    <Title level={5}>System.out.println()</Title>
    <Paragraph>
      В метод println передается любое значение, которое нужно вывести на консоль. Пример:
    </Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main(String[] args) {   
        System.out.println("Hello world!");
        System.out.println("Bye world...");
    }
}`}
    </CodeBlock>
    <Compiler/>
    <Paragraph>После запуска программы будет выведено:</Paragraph>
    <ConsoleOutput>
      {`Hello world!
Bye world...`}
    </ConsoleOutput>
    <Title level={5}>System.out.println()</Title>
    <Paragraph>
      В метод println передается любое значение, которое нужно вывести на консоль. Пример:
    </Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main(String[] args) {   
        System.out.print("Welcome ");
        System.out.print("to Java");
    }
}`}
    </CodeBlock>
    <Paragraph>После запуска программы будет выведено:</Paragraph>
    <ConsoleOutput>
      {`Welcome to Java`}
    </ConsoleOutput>
    <Title level={5}>System.out.printf()</Title>
    <Paragraph>Часто необходимо подставлять в строку какие-нибудь данные. Это можно сделать так:</Paragraph>
    <CodeBlock>
      System.out.print("value1 = " + value1 + " value2 = " + value2);
    </CodeBlock>
    <Paragraph>
      Но в Java предусмотрен метод, с помощью которого можно переписать данный пример.
      Программа будет выглядеть таким образом:
    </Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main(String[] args) {   
        int value1 = 15;
        int value2 = 5;
        System.out.printf("value1 = %d; value2 = %d;", value1, value2);
    }
}`}
    </CodeBlock>
    <Paragraph>Результат:</Paragraph>
    <ConsoleOutput>
      value1 = 15; value2 = 5;
    </ConsoleOutput>
    <Paragraph>
      Теперь подробнее рассмотрим запись. 
      Запись <Text strong>%d</Text> обозначает<InfoText description={<>
        <Text strong>Спецификатор</Text> - специальные выражения, с помощью которых форматируется выводимое значение. Они начинаются со знака процента % и заканчиваются символом, указывающим тип аргумента, который нужно отформатировать
      </>}>спецификатор</InfoText>. 
      Вместо него подставляется один аргумент. 
      Спецификаторов и соответствующих аргументом может быть много. 
      В данном случае только два аргумента, поэтому вместо первого <Text strong>%d</Text> подставляет значение переменной <Text strong>value1</Text>, а вместо второго - значение переменной <Text strong>value2</Text>. 
      Данный спецификатор используется для вывода целочисленных значений. 
    </Paragraph>
    <Paragraph>
      Существует ряд спецификаторов для различных типов данных:
      <ul>
        <li><Text code strong>%d</Text> – для вывода целочисленных значений</li>
        <li><Text code strong>%x</Text> – для вывода шестнадцатеричных чисел</li>
        <li><Text code strong>%f</Text> – для вывода чисел с плавающей точкой</li>
        <li><Text code strong>%e</Text> – для вывода чисел в экспоненциальной форме, например, 1.3e+01</li>
        <li><Text code strong>%c</Text> – для вывода одиночного символа</li>
        <li><Text code strong>%s</Text> – для вывода строковых значений</li>
        <li><Text code strong>%n</Text> – разрыв строки и переход на новую</li>
      </ul>
    </Paragraph>
    <Paragraph>Пример программы, где используется несколько спецификаторов:</Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main(String[] args) {   
        float height = 6.7f;
        int width = 4;
        float square = height * width;
        System.out.printf("Height: %.1f  Width: %d  Square: %.2f \\n", height, width, square); 
    }
}
`}
    </CodeBlock>
    <Paragraph>
      Когда нужно вывести число с плавающей точкой, можно указать количество знаков после запятой <Text code strong>.2</Text>, в приведенном примере это 2 знака.
    </Paragraph>
    <Paragraph>Результат:</Paragraph>
    <ConsoleOutput>Height: 6,7 Width: 4 Square: 26,80</ConsoleOutput>
    <Title level={3}>Ввод с консоли</Title>
    <Paragraph>
      Для ввода с консоли в классе <Text strong>System</Text> определен объект <Text strong>in</Text>. 
      Обычно используют класс <Text strong>Scanner</Text>, который использует <Text strong>System.in</Text>. 
    </Paragraph>
    <Paragraph>
      Для использования класса необходимо импортировать пакет <Text strong>java.util.Scanner</Text>.
    </Paragraph>
    <Paragraph>
      Для создания самого объекта <Text strong>Scanner</Text>, в его конструктор передается объект <Text strong>System.in</Text>. После этого мы можем получать вводимые значения.
    </Paragraph>
    <Paragraph>
      Чтобы получить введенное значение, используются различные методы, которые возвращают введенное с клавиатуры значение.
    </Paragraph>
    <Paragraph>
      Класс <Text strong>Scanner</Text> имеет ряд методов, которые позволяют получить введенные пользователем значения. Для ввода значений каждого типа в классе Scanner определен свой метод:
      <ul>
        <li><Text code strong>next()</Text> – считывает введенную строку до первого пробела</li>
        <li><Text code strong>nextLine()</Text> – считывает всю введенную строку</li>
        <li><Text code strong>nextInt()</Text> – считывает введенное число <Text strong>int</Text></li>
        <li><Text code strong>nextDouble()</Text> – считывает введенное число <Text strong>double</Text></li>
        <li><Text code strong>nextBoolean()</Text> – считывает значение <Text strong>boolean</Text></li>
        <li><Text code strong>nextByte()</Text> – считывает введенное число <Text strong>byte</Text></li>
        <li><Text code strong>nextFloat()</Text> – считывает введенное число <Text strong>float</Text></li>
        <li><Text code strong>nextShort()</Text> – считывает введенное число <Text strong>short</Text></li>
      </ul>
    </Paragraph>
    <Paragraph>Пример программы с использованием консольного ввода и вывода:</Paragraph>
    <CodeBlock>
      {`import java.util.Scanner;
public class Example {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Input name: ");
        String name = in.nextLine();
        System.out.print("Input age: ");
        int age = in.nextInt();
        System.out.print("Input height: ");
        float height = in.nextFloat();
        System.out.println();
        System.out.printf("Name: %s %nAge: %d %nHeight: %.1f %n", name, age, height);
    }
}`}
    </CodeBlock>
    <Paragraph>Консоль:</Paragraph>
    <ConsoleOutput>
      {`Input name: `}<Text className={s.green}>Normam</Text><br/>
      {`Input age: `}<Text className={s.green}>45</Text><br/>
      {`Input height: `}<Text className={s.green}>180,7</Text><br/><br/>
      {`Name: `}<Text>Normam</Text><br/>
      {`Age: `}<Text>45</Text><br/>
      {`Height: `}<Text>180,7</Text><br/>
    </ConsoleOutput>
    <Paragraph><WarningIcon/>Обратите внимание. Для ввода чисел с плавающей точкой в качестве разделителя используется запятая <Text keyboard strong>,</Text></Paragraph>
    <TasksLabel/>
    <Divider />
    <Title level={4}>Площадь и периметр прямоугольника</Title>
    <Paragraph>
      Напишите программу, которая будет считать площадь и периметр прямоугольника.
      Стороны вводятся пользователем с консоли.
      Стороны являются целочисленными.
      При написании программы помните правила именования переменных. 
    </Paragraph>
    <Paragraph>
      Дополнительные сведения:
      <ul>
        <li>формула нахождения площади прямоугольника: S = a * b</li>
        <li>формула нахождения периметра прямоугольника: P = 2 * (a + b)</li>
      </ul>
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        Scanner in = new Scanner(System.in);
        System.out.print("Введите длину прямоугольника: ");
        int lengthRec = in.nextInt();
        System.out.print("Введите ширину прямоугольника: ");
        int widthRec = in.nextInt();

        int area;
        float perimeter;

        area = lengthRec * widthRec;
        perimeter = 2 * (lengthRec + widthRec);

        System.out.printf("Площадь прямоугольника равна: %d %n", area);
        System.out.printf("Периметр прямоугольника равен: %.2f %n", perimeter);
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>Сравнение строк</Title>
    <Paragraph>
      Вводится 2 строки с помощью консоли. Необходимо сравнить их содержимое, регист не учитывается.
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        Scanner in = new Scanner(System.in);

        String line1 = in.nextLine();
        String line2 = in.nextLine();

        line1 = line1.toLowerCase();
        line2 = line2.toLowerCase();

        System.out.println(line1.equals(line2));
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
  </>
}