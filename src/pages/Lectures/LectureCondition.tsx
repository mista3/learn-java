import { Divider, Typography } from 'antd';
import { CodeBlock, Compiler, Solution, TasksLabel } from '../../components';

const { Title, Paragraph, Text } = Typography;

export const LectureCondition = () => {
  return <>
    <Title level={2}>Условные конструкции</Title>
    <Paragraph>
      Условные конструкции являются одним из фундаментальных элементов многих языков программирования.
      Данные конструкции позволяют направить работу программы по одному из путей в зависимости от определенных условий.
    </Paragraph>
    <Paragraph>
      В языке Java используются следующие условные конструкции: <Text strong>if/else</Text> и <Text strong>switch/case</Text>.
    </Paragraph>
    <Title level={3}>Конструкция if/else</Title>
    <Paragraph>Выражение if/else проверяет истинность некоторого условия и в зависимости от результатов проверки выполняет определенный код:</Paragraph>
    <CodeBlock>
      {`int num1 = 6;
int num2 = 4;
if (num1 > num2) {
    System.out.println("Первое число больше второго"); 
}`}
    </CodeBlock>
    <Paragraph>После ключевого слова if ставится условие. Если это условие верно, то срабатывает код, который помещен в блоке, заключенный в фигурные скобки.</Paragraph>
    <Paragraph>
      Так как, в данном случае первое число больше второго, то выражение <Text strong>num1</Text> {'>'} <Text strong>num2</Text> истинно и возвращает значение <Text strong>true</Text>. 
      Следовательно, управление переходит в блок кода в фигурных скобках и начинает выполнять содержащиеся там инструкции, а конкретно метод <Text code>System.out.println("Первое число больше второго");</Text>. 
      Если бы первое число было меньше второго или равно ему, то инструкции в блоке <Text strong>if</Text> не выполнялись бы. 
    </Paragraph>
    <Paragraph>Если потребуется, чтобы при несоблюдении условия также выполнялись какие-либо действия, можно добавить блок <Text strong>else</Text>:</Paragraph>
    <CodeBlock>
      {`int num1 = 6;
int num2 = 4;
if(num1 > num2) {
    System.out.println("Первое число больше второго"); 
}
else {
    System.out.println("Первое число меньше второго");
}`}
    </CodeBlock>
    <Paragraph>В этом случае, если условие в <Text strong>if</Text> окажется ложным, начнет выполняться блок <Text strong>else</Text>:</Paragraph>
    <Paragraph>
      При сравнении чисел можно насчитать три состояния: первое число больше второго, первое число меньше второго и числа равны.
      С помощью выражения <Text strong>else if</Text>, можно обрабатывать дополнительные условия:
    </Paragraph>
    <CodeBlock>
      {`int num1 = 6;
int num2 = 4;
if(num1 > num2){
    System.out.println("Первое число больше второго"); 
}
else if (num1 < num2){
    System.out.println("Первое число меньше второго");
}
else {
    System.out.println("Числа равны");
}`}
    </CodeBlock>
    <Paragraph>Если требуется проверить несколько условий, то эти условия можно объединять.</Paragraph>
    <Title level={3}>Конструкция switch</Title>
    <Paragraph>
      Конструкция <Text strong>switch/case</Text> аналогична конструкции <Text strong>if/else</Text>, так как позволяет обработать сразу несколько условий.
      После ключевого слова <Text strong>switch</Text> в скобках идет сравниваемое выражение.
      Значение этого выражения последовательно сравнивается со значениями, помещенными после операторов <Text strong>сase</Text>.
      Если совпадение найдено, то будет выполняет соответствующий блок <Text strong>сase</Text>.
    </Paragraph>
    <Paragraph>
      В конце блока <Text strong>сase</Text> ставится оператор <Text strong>break</Text>, чтобы избежать выполнения других блоков.
    </Paragraph>
    <Paragraph>
      Если требуется также обработать ситуацию, когда совпадения будет не найдено, то можно добавить блок <Text strong>default</Text> (этот блок не является обязательным).
    </Paragraph>
    <CodeBlock>
      {`int num = 5;
switch(num){
    case 1: 
        System.out.println("число равно 1");
        break;
    case 5: 
        System.out.println("число равно 8");
        num++;
        break;
    case 9: 
        System.out.println("число равно 9");
        break
    default:
        System.out.println("число не равно 1, 5, 9");
}`}
    </CodeBlock>
    <TasksLabel/>
    <Divider />
    <Title level={4}>Окончания</Title>
    <Paragraph>
      Напишите программу, которая согласует окончание названия предмета, исходя из введенного на консоли количества.
      Например: 1 тетрадь, 2 тетради, 5 тетрадей.
    </Paragraph>
    <Paragraph>
      Дополнительные сведения:
      <ul>
        <li>Число делится на 3, если сумма его цифр делится на 3.</li>
      </ul>
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        Scanner in = new Scanner(System.in);
        System.out.print("Введите количество: ");
        int amount = in.nextInt();

        int remainder10 = amount % 10;
        int remainder100 = amount % 100;

        if (remainder100 >= 5 && remainder100 <= 20) {
            System.out.println(amount + " тетрадей");
        }
        else if (remainder10 == 1) {
            System.out.println(amount + " тетрадь");
        }
        else if (remainder10 >= 2 && remainder10 <= 4) {
            System.out.println(amount + " тетради");
        }
        else System.out.println(amount + " тетрадей");
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>Четность и делимость на 3</Title>
    <Paragraph>
      Напишите программу, которая получает на вход от пользователя четырехзначное целое число.
      Это число проверяется на четность и на делимость на 3.
      Вывести на консоль делится ли число на 3 и какие оно является (четное / нечетное).
    </Paragraph>
    <Paragraph>
      Дополнительные сведения:
      <ul>
        <li>Число делится на 3, если сумма его цифр делится на 3.</li>
      </ul>
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        Scanner in = new Scanner(System.in);
        System.out.print("Введите число: ");
        int number = in.nextInt();
        int numberCopy = number;

        int sum = 0;
        for (; number > 0;){
            sum += number % 10;
            number /= 10;
        }

        if ((sum % 3 == 0) && (numberCopy % 2 == 0)){
            System.out.println("Число делится на 3 и является четным");
        }
        else if ((sum % 3 == 0) && (numberCopy % 2 > 0)) {
            System.out.println("Число делится на 3 и является нечетным");
        }
        else System.out.println("Число не делится на 3");
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>🦧 Калькулятор</Title>
    <Paragraph>
      Напишите калькулятор с такими функциями:
      <ul>
        <li>сложение</li>
        <li>вычитание</li>
        <li>умножение</li>
        <li>деление</li>
        <li>нахождение остатка от деления</li>
      </ul>
    </Paragraph>
    <Paragraph>
      Пользователь вводит 2 числа. Далее он сам выбирает, какое действие с числами нужно произвести (здесь можно использовать конструкцию switch…case).
      На консоль выводится результат выбранного действия.
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        Scanner in = new Scanner(System.in);
        System.out.println("\\t\\t\\t Калькулятор");
        System.out.println("Введите 2 числа: ");
        int num1 = in.nextInt();
        int num2 = in.nextInt();
        System.out.println("1. Сложение\\n2. Вычитание\\n3. Умножение\\n4. Деление\\n5. Нахождение остатка от деления");
        System.out.print("\\nВведите номер пункта для выбора операции: ");

        int result;
        int item = in.nextInt();
        switch (item){
            case 1:
                result = num1 + num2;
                System.out.println("Сумма чисел: " + result);
                break;
            case 2:
                result = num1 - num2;
                System.out.println("Разность чисел: " + result);
                break;
            case 3:
                result = num1 * num2;
                System.out.println("Произведение чисел: " + result);
                break;
            case 4:
                result = num1 / num2;
                System.out.println("Частное чисел: " + result);
                break;
            case 5:
                result = num1 % num2;
                System.out.println("Остаток от деления чисел: " + result);
                break;
            default:
                System.out.println("Неверно введен пункт");
        }
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
  </>
}