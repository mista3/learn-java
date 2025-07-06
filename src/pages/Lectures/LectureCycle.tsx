import { Divider, Typography } from 'antd';
import { CodeBlock, Compiler, ConsoleOutput, Solution, TasksLabel} from '../../components';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureCycle = () => {
  return <>
  <Title level={2}>Циклы</Title>
    <Paragraph>
      Одним из видов управляющих конструкций являются циклы.
      Циклы позволяют выполнять определенное действие множество раз в зависимости от определенных условий.
    </Paragraph>
    <Paragraph>
      В языке Java существуют следующие виды циклов:
      <ol>
        <li>for</li>
        <li>while</li>
        <li>do...while</li>
        <li>foreach</li>
      </ol>
    </Paragraph>
    <Title level={3}>Цикл for</Title>
    <Paragraph>Общий вид цикла <Text strong>for</Text> выглядит так:</Paragraph>
    <CodeBlock>
      {`for (<начальное действие>; <условие выполнения>; <действие после выполнения цикла>)
{
    <тело цикла>
}`}
    </CodeBlock>
    <Paragraph>Указанные действия и условия в круглых скобка называются параметрами.</Paragraph>
    <Paragraph>
      <Text code strong>{`<начальное действие>`}</Text> – обычно здесь объявляется счетчик цикла (переменная).
      Данное действие происходит один раз в начале цикла.
    </Paragraph>
    <Paragraph>
      <Text code strong>{`<условие выполнения>`}</Text> – здесь указывается выражение, при котором будет выполняться блок кода, находящийся в цикле. 
      Если результат выражения равен true, цикл выполняется, иначе цикл прерывается.
    </Paragraph>
    <Paragraph>
      <Text code strong>{`<действие после выполнения цикла>`}</Text> – здесь указывается выражение, которое будет исполняться после каждого выполнения цикла. 
      Обычно это изменение переменной, которая выступает в роли счетчика.
    </Paragraph>
    <Paragraph>Рассмотрим конкретный пример цикла <Text strong>for</Text>:</Paragraph>
    <CodeBlock>
      {`int num = 7;
int result;
for (int i = 1; i < 10; i++) {
    result = num * i;
    System.out.printf("%d * %d = %d %n", num, i, result);
}`}
    </CodeBlock>
    <Paragraph>Эта программа выводит таблицу умножения на 7.</Paragraph>
    <ConsoleOutput>
      {`7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63`}
    </ConsoleOutput>
    <Paragraph>
      <Text code strong>int i = 1;</Text> – создает и инициализирует счетчик <Text strong>i</Text>.
      Счетчик необязательно должен представлять тип <Text strong>int</Text>.
      Это может быть и любой другой числовой тип, например, <Text strong>float</Text>.
      Перед выполнением цикла значение счетчика будет равно 1.
    </Paragraph>
    <Paragraph>
      <Text code strong>{`i < 10;`}</Text> – условие, при котором будет выполняться цикл.
      В данном случае цикл будет выполняться, пока i не достигнет значение 10.
    </Paragraph>
    <Paragraph>
      <Text code strong>i++</Text> – приращение счетчика на единицу.
      Счетчик можно увеличивать и уменьшать на любое значение.
    </Paragraph>
    <Paragraph>В итоге блок цикла сработает 9 раз.</Paragraph>
    <Paragraph>
      <WarningIcon/> Переменная, которая объявлена в параметрах цикла (в данном случае <Text strong>i</Text>), доступна для использования только в теле цикла
    </Paragraph>
    <Paragraph>
      При объявлении цикла необязательно указывать все параметры. Например, можно написать так:
    </Paragraph>
    <CodeBlock>
      {`int num = 7;
int result;
int i = 1;
for (; ;) {
    result = num * i;
    System.out.printf("%d * %d = %d %n", num, i, result);
}`}
    </CodeBlock>
    <Paragraph>
      Цикл будет работать бесконечно, так как не указано условие работы цикла, нет изменения счетчика.
      При этом выводиться будет одна и та же строка.
    </Paragraph>
    <Paragraph>Также можно указать только один параметр:</Paragraph>
    <CodeBlock>
      {`int num = 7;
int result;
int i = 1;
for (; i < 10; i++) {
    result = num * i;
    System.out.printf("%d * %d = %d %n", num, i, result);
}`}
    </CodeBlock>
    <Paragraph>
      В данном примере имеется счетчик, указанный вне цикла (его можно будет использовать не только в теле цикла).
      В параметрах заданы условие и изменение счетчика.
      По результату работы цикла будет выведена та же информация, что и первом примере.
    </Paragraph>
    <Title level={3}>Цикл while</Title>
    <Paragraph>
      Цикл while работает при выполнении указанного условия. 
      Если условие истинно, тело цикла выполняется. 
      Цикл может не выполниться ни один раз, если условие ложно.
    </Paragraph>
    <Paragraph>Общий вид цикла:</Paragraph>
    <CodeBlock>
      {`while (<условие выполнения>) {
    //тело цикла
}`}
    </CodeBlock>
    <Paragraph>Пример цикла:</Paragraph>
    <CodeBlock>
      {`int i = 6;
while (i > 0) {
    System.out.println(i);
    i--;
}`}
    </CodeBlock>
    <Title level={3}>Цикл do...while</Title>
    <Paragraph>
      Цикл <Text strong>do...while</Text> сначала выполняет тело цикла, а потом проверяет условие в инструкции <Text strong>while</Text>.
      Пока это условие истинно, цикл повторяется.
    </Paragraph>
    <Paragraph>Общий вид цикла:</Paragraph>
    <CodeBlock>
      {`do {
    //тело цикла
}
while (<условие>)
`}
    </CodeBlock>
    <Paragraph>Пример цикла:</Paragraph>
    <CodeBlock>
      {`int i = 7;
do{
    System.out.println(i);
    i--;
}
while (i > 0);`}
    </CodeBlock>
    <Paragraph>В данном случае код цикла сработает 7 раз, пока <Text strong>i</Text> не равно нулю. Важно отметить, что цикл <Text strong>do</Text> гарантирует хотя бы однократное выполнение действий, даже если условие в инструкции <Text strong>while</Text> будет ложно.</Paragraph>
    <Title level={3}>Цикл foreach</Title>
    <Paragraph>
      Этот цикл является разновидностью цикла <Text strong>for</Text>.
      Его удобно использовать для работы со всеми элементами массива (массивы будут рассматриваться в следующей лекции).
    </Paragraph>
    <Paragraph>Общий вид цикла:</Paragraph>
    <CodeBlock>
      {`for (<тип итерационной переменной><имя переменной> : <массив>) {
    //тело цикла
}`}
    </CodeBlock>
    <Paragraph>
      В этом цикле счетчик не нужен. 
      В нем перебираются все элементы указанной структуры. 
      Итерационной переменной присваивается значение каждого элемента массива. 
      Далее выполняется блок кода. 
    </Paragraph>
    <Paragraph>Пример:</Paragraph>
    <CodeBlock>
      {`int nums[] = new int[4];
for (int num : nums) {
	  System.out.print(num + " ");
}`}
    </CodeBlock>
    <Paragraph>В данном случае выводятся все элементы массива через пробел.</Paragraph>
    <Title level={3}>Операторы continue и break</Title>
    <Paragraph>Оператор <Text strong>break</Text> позволяет выйти из цикла в любой его момент, даже если цикл не закончил свою работу:</Paragraph>
    <CodeBlock>
      {`for (int i = 0; i < 10; i++){
    if (i == 5)
        break;
    System.out.println(i);
}`}
    </CodeBlock>
    <Paragraph>Когда счетчик станет равным 5, сработает оператор <Text strong>break</Text>, и цикл завершится.</Paragraph>
    <Paragraph>
      Теперь сделаем так, чтобы если число равно 5, цикл не завершался, а просто переходил к следующей итерации.
      Для этого используем оператор <Text strong>continue</Text>:
    </Paragraph>
    <CodeBlock>
      {`for (int i = 0; i < 10; i++){
    if (i == 5)
        continue;
    System.out.println(i);
}`}
    </CodeBlock>
    <Paragraph>
      В этом случае, когда выполнение цикла дойдет до числа 5, программа просто пропустит это число и перейдет к следующему.
    </Paragraph>
    <TasksLabel/>
    <Divider />
    <Title level={4}>Сумма цифр</Title>
    <Paragraph>
      Напишите программу, которая считает сумму цифр введенного числа.
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

        int sum = 0;
        for (; number > 0 ;) {
            sum += number % 10;
            number /= 10;
        }
        System.out.println("Сумма цифр равна " + sum);
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>for на while</Title>
    <Paragraph>
      Перепишите данный цикл for на цикл while. С помощью этого цикла выводятся все цифры (0 - 9).
    </Paragraph>
      <CodeBlock>
        {`public class Example {
    public static void main (String args[]){
        for (int i = 0; i < 10; i++) {
            System.out.print("Number: " + i + " ");
        }
    }
}`}
      </CodeBlock>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`public class Example {
    public static void main (String args[]){
        int i = 0;
        while (i < 10) {
            System.out.print("Number: " + i + " ");
            i++;
        }
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>Вечный ввод</Title>
    <Paragraph>
      Напишите программу, которая выводит на консоль задачу (например, арифметический пример 3 * 5), которую необходимо решить. 
      Пользователь вводит ответы до тех пор, пока его ответ не окажется верным. 
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`import java.util.Scanner;

public class Example {
    public static void main (String args[]){
        System.out.println("Напишите ответ: 3 * 5 ");
        Scanner in = new Scanner(System.in);

        int number;
        do {
            number = in.nextInt();
        }
        while(number != 15);
        System.out.println("Верно!");
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
  </>
}