import { Divider, Typography } from 'antd';
import { CodeBlock, Compiler, ConsoleOutput, InfoText, Solution, TasksLabel} from '../../components';
import { WarningIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureArrays = () => {
  return <>
    <Title level={2}>Массивы</Title>
    <Title level={3}>Одномерные массивы</Title>
    <Paragraph>
      Массив представляет набор однотипных значений.
      Объявление массива похоже на объявление обычной переменной, которая хранит одиночное значение, причем есть два способа объявления массива:
    </Paragraph>
    <CodeBlock>
      {`<тип данных> <название массива>[];
//либо
<тип данных>[] <название массива>;`}
    </CodeBlock>
    <Paragraph>Например, определим массив чисел:</Paragraph>
    <CodeBlock>
      {`int nums[];
int[] nums2;`}
    </CodeBlock>
    <Paragraph>После объявления массива его можно инициализировать:</Paragraph>
    <CodeBlock>
      {`int nums[];
nums = new int[4];  // массив из 4 чисел`}
    </CodeBlock>
    <Paragraph>
      Создание массива производится с помощью следующей конструкции: <Text code strong>new {`<тип данных>`}[количество элементов]</Text>, где <Text strong>new</Text> - ключевое слово, выделяющее память для указанного в скобках количества элементов.
      Например, <Text code strong>nums = new int[4];</Text> - в этом выражении создается массив из четырех элементов типа <Text strong>int</Text>, и каждый элемент будет иметь значение по умолчанию - число 0.
    </Paragraph>
    <Paragraph>Также можно сразу при объявлении массива инициализировать его:</Paragraph>
    <CodeBlock>
      {`int nums[] = new int[4];    // массив из 4 чисел
int[] nums2 = new int[5];   // массив из 5 чисел`}
    </CodeBlock>
    <Paragraph>
      При подобной инициализации все элементы массива имеют значение по умолчанию. 
      Для числовых типов (в том числе для типа char) это число 0, для типа <Text strong>boolean</Text> это значение <Text strong>false</Text>, а для остальных объектов это значение <Text strong>null</Text>. 
      Выше определенные массивы будут состоять из нулей. 
    </Paragraph>
    <Paragraph>Однако также можно задать конкретные значения для элементов массива при его создании:</Paragraph>
    <CodeBlock>
      {`// эти два способа равноценны
int[] nums = new int[] { 1, 2, 3, 5 };
int[] nums2 = { 1, 2, 3, 5 };`}
    </CodeBlock>
    <Paragraph>
      <WarningIcon/> Стоит отметить, что в этом случае в квадратных скобках не указывается размер массива, так как он вычисляется по количеству элементов в фигурных скобках. 
    </Paragraph>
    <Paragraph>
      После создания массива можно обратиться к любому его элементу по<InfoText description={
        <><Text strong>Индекс</Text> – число, указывающее место элемента в массиве</>
      }>индексу</InfoText>:
    </Paragraph>
    <CodeBlock>
      {`int[] nums = new int[4];
// устанавливаем значения элементов массива
nums[0] = 1;
nums[1] = 2;
nums[2] = 4;
nums[3] = 100;
// получаем значение третьего элемента массива
System.out.println(nums[2]);    // 4`}
    </CodeBlock>
    <Paragraph>
      Индексация элементов массива начинается с 0, поэтому в данном случае, чтобы обратиться к четвертому элементу в массиве, надо использовать выражение <Text code>nums[3]</Text>.
    </Paragraph>
    <Paragraph>Длина массива</Paragraph>
    <Paragraph>
      Важнейшее свойство, которым обладают массивы, является свойство length, которое возвращает длину массива, то есть количество его элементов:
    </Paragraph>
    <CodeBlock>
      {`int[] nums = {1, 2, 3, 4, 5};
int length = nums.length;   // 5`}
    </CodeBlock>
    <Title level={3}>Многомерные массивы</Title>
    <Paragraph>
      Кроме одномерных массивов также бывают и многомерными Многомерный массив представляет собой массив массивов.
      Наиболее известный многомерный массив - двумерный:
    </Paragraph>
    <CodeBlock>
      {`int[][] nums1 = { { 0, 1, 2 }, { 3, 4, 5 } };`}
    </CodeBlock>
    <Paragraph>
      Поскольку массив <Text strong>nums</Text> двухмерный, он представляет собой таблицу.
      Его также можно было создать следующим образом: 
    </Paragraph>
    <CodeBlock>
      {`int[][] nums2 = new int[2][3];`}
    </CodeBlock>
    <Paragraph>
      Количество квадратных скобок указывает на размерность массива.
      Числа в скобках – количество строк и столбцов.
    </Paragraph>
    <Paragraph>Пример:</Paragraph>
    <CodeBlock>
      {`int[][] nums2 = new int[2][3];
// установим элемент первого столбца второй строки
nums2[1][0]=44;
System.out.println(nums2[1][0]);  // 44`}
    </CodeBlock>
    <Title level={3}>Ввод и вывод элементов массива</Title>
    <Title level={4}>Заполнение массива</Title>
    <Paragraph>
      Иногда может потребоваться заполнить массив вручную.
      В таком случае это можно сделать с помощью консоли. С помощью рассмотренного консольного ввода и будут вводиться элементы массива.
      Также для того, чтобы заполнить каждый элемент потребуется цикл.
    </Paragraph>
    <Paragraph>
      Для заполнения мы можем воспользоваться циклом <Text strong>for</Text> или <Text strong>foreach</Text>.
      Так будет выглядеть заполнение массива:
    </Paragraph>
    <Paragraph>Заполнение с использованием цикла <Text strong>for</Text>:</Paragraph>
    <CodeBlock>
      {`import java.util.Scanner;

public class Example {

    public static void main (String args[]){
        int[] nums = new int[5];
        Scanner in = new Scanner(System.in);
        for(int i = 0; i < nums.length; i++){
            nums[i] = in.nextInt();
        }
    }
}`}
    </CodeBlock>
    <Paragraph>Заполнение с использованием цикла <Text strong>foreach</Text> :</Paragraph>
    <CodeBlock>
      {`import java.util.Scanner;

public class Example {

    public static void main (String args[]){
        int[] nums = new int[5];
        Scanner in = new Scanner(System.in);
        for(int num : nums){
            num = in.nextInt();
        }
    }
}`}
    </CodeBlock>
    <Paragraph>
      Как было рассмотрено в одной из предыдущих лекций, для ввода с клавиатуры необходимо импортировать класс <Text strong>Scanner</Text>.
      Далее инициализируем счетчик, который в дальнейшем будет играть роль индекса. По условию, цикл будет работать от нуля до 5 (так как создан массив из 5 элементов).
      В теле цикла элементу с индексом <Text strong>i</Text> будет присваиваться то значение, которое будет введено пользователем.
    </Paragraph>
    <Paragraph>
      В цикле foreach происходит проход по всему массиву.
      С помощью итерационной переменной каждому элементу присваивается значение.
    </Paragraph>
    <Title level={4}>Вывод элементов массива</Title>
    <Paragraph>
      Для вывода элементов массива также используются циклы <Text strong>for</Text> и <Text strong>foreach</Text>.
      Циклы будут схожи с теми, что были для ввода. Разница заключается в теле цикла. В нем уже прописывается вывод элементов. Вывод можно сделать так, чтобы было удобно просматривать.
      Это возможно осуществить с помощью форматированного вывода.
    </Paragraph>
    <Paragraph>
      Так будет выглядеть программа с вводом и выводом элементов с использованием цикла for:
    </Paragraph>
    <CodeBlock>
      {`import java.util.Scanner;

public class Example {

    public static void main (String args[]){
        int[] nums = new int[5];
        Scanner in = new Scanner(System.in);
        for(int i = 0; i < nums.length; i++){
            nums[i] = in.nextInt();
        }
        for(int i = 0; i < nums.length; i++){
            System.out.printf("nums[%d] = %d \\n",i , nums[i]);
        }
    }
}`}
    </CodeBlock>
    <Paragraph>
      <Text code strong>\n</Text> - используется для перехода на следующую строку после того, как печатается элемент.
    </Paragraph>
    <Paragraph>Результат:</Paragraph>
    <ConsoleOutput>
      {`nums[0] = 6
nums[1] = 8
nums[2] = 2
nums[3] = 9
nums[4] = 5`}
    </ConsoleOutput>
    <TasksLabel/>
    <Divider />
    <Title level={4}>Сумма нечетных элементов</Title>
    <Paragraph>
      Найдите сумму нечетных элементов целочисленного массива.
      Например: <Text code strong>{`{1, 2, 3, 4, 5}`}; 1 + 3 + 5 = 9;</Text> Заполнение массива может выполняться любым из пройденных методов.
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`public class Example {
    public static void main (String args[]){
        int[] nums = {1, 2, 0, 3, 5, 8, 7, 9};

        int sum = 0;
        for (int num : nums) {
            if (num % 2 > 0) {
                sum += num;
            }
        }
        System.out.println("Сумма нечетных элементов: " + sum);
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
    <Title level={4}>Max и min</Title>
    <Paragraph>
      Найдите максимальный и минимальный элементы в массиве.
      Заполнение массива может выполняться любым из пройденных методов.
    </Paragraph>
    <Compiler />
    <Solution>
      <CodeBlock>
        {`public class Example {
    public static void main (String args[]){
        int[] nums = {1, -2, 0, 3, 5, 15, 7, 9};

        int maxValue = nums[0];
        int minValue = nums[0];
        for (int num : nums) {
            if (num > maxValue) {
                maxValue = num;
            }
            if (num < minValue){
                minValue = num;
            }
        }
        System.out.println("Максимальный элемент массива: " + maxValue);
        System.out.println("Минимальный элемент массива: " + minValue);
    }
}`}
      </CodeBlock>
    </Solution>
    <Divider />
  </>
}