import { Typography } from 'antd';
import { CodeBlock, ConsoleOutput} from '../../components';
import { InfoIcon } from '../../assets/icons';

const { Title, Paragraph, Text } = Typography;

export const LectureMethods = () => {
  return <>
    <Title level={2}>Методы</Title>
    <Paragraph>
      Если переменные и константы хранят некоторые значения, то методы содержат набор операторов, которые выполняют определенные действия.
      Методы необходимы, когда требуется выполнить одни и те же действия в разных частях кода.
      Чтобы не было повторяющегося кода, используют методы.
    </Paragraph>
    <Paragraph>Общее определение методов выглядит следующим образом:</Paragraph>
    <CodeBlock>
      {`<модификаторы> <тип возвращаемого значения> <название метода> (<формальные параметры*>){
    // тело метода
}`}
    </CodeBlock>
    <Paragraph>
      Формальные параметры – параметры, указанные при определении метода.
      Эти параметры необязательны.
    </Paragraph>
    <Paragraph>По умолчанию главный класс любой программы на Java содержит метод <Text strong>main</Text>, который служит точкой входа в программу:</Paragraph>
    <CodeBlock>
      {`public static void main(String[] args) {
    System.out.println("Hello World!");
}`}
    </CodeBlock>
    <Paragraph>
      Ключевые слова <Text strong>public</Text> и <Text strong>static</Text> являются модификаторами.
      Далее идет тип возвращаемого значения.
      Ключевое слово <Text strong>void</Text> указывает на то, что метод ничего не возвращает.
      Затем идут название метода - <Text strong>main</Text> и в скобках параметры метода - <Text code strong>String[] args</Text> (массив строк).
      В фигурные скобки заключено тело метода - все действия, которые он выполняет.
    </Paragraph>
    <Paragraph>
      Если тип указанного значения не void, то необходимо в конце метода вернуть значение указанного типа с помощью оператора return.
    </Paragraph>
    <CodeBlock>
      {`static int one() {
    return 1;
}`}
    </CodeBlock>
    <Paragraph>
      Для примера создадим еще несколько методов.
      Метод <Text strong>hello</Text>, который будет выводить на консоль <Text italic>"Hello"</Text>, метод <Text strong>welcome</Text>, который будет выводить <Text italic>"Welcome to Java"</Text>.
    </Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main (String args[]){
    }
    static void hello (String strHello){
        System.out.println(strHello);
    }
    static void welcome(){
        System.out.println("Welcome to Java");
    }
}`}
    </CodeBlock>
    <Paragraph>
      Методы определяются внутри класса - в данном случае внутри класса <Text strong>Example</Text>, в котором определен метод <Text strong>main</Text>.
    </Paragraph>
    <Paragraph>
      Если скомпилировать и запустить данную программу, то ничего не напечатается на консоли.
      Выше были определены два метода, но они не были вызваны.
    </Paragraph>
    <Paragraph>Вызов происходит таким образом:</Paragraph>
    <CodeBlock>
      {`<имя метода> (фактические параметры);`}
    </CodeBlock>
    <Paragraph>
      <InfoIcon/> <Text strong>Фактические параметры</Text> – параметры, которые передаются в метод при его вызове.
      Типы передаваемых параметров должны соответствовать указанным при определении метода (формальным).
    </Paragraph>
    <Paragraph>Например:</Paragraph>
    <CodeBlock>
      {`public class Example {
    public static void main (String args[]) {
        String str ="Hello";
        hello(str);
        welcome();
        welcome();
    }
    static void hello (String strHello) {
        System.out.println(strHello);
    }
    static void welcome(){
        System.out.println("Welcome to Java");
    }
}`}
    </CodeBlock>
    <Paragraph>
      В методе <Text strong>main</Text> вызывается один раз метод <Text strong>hello</Text> и два раза метод <Text strong>welcome</Text>.
      В этом и заключается одно из преимуществ методов: можно вынести общие действия в отдельный метод, а затем вызывать многократно их в различных местах программы.
      Поскольку метод <Text strong>welcome</Text> не имеет никаких параметров, то после его названия при вызове ставятся пустые скобки.
      Метод <Text strong>hello</Text> принимает параметр типа <Text strong>String</Text>, поэтому при вызове данного метода необходимо в скобках указать передаваемую строку.
    </Paragraph>
    <Paragraph>
      Также следует отметить, чтобы вызвать в методе <Text strong>main</Text> другие методы, которые определены в одном классе с методом <Text strong>main</Text>, они должны иметь модификатор <Text strong>static</Text>, так как сам <Text strong>main</Text> является статическим методом.
    </Paragraph>
    <Paragraph>После выполнения выше написанного кода на консоли будет выведено:</Paragraph>
    <ConsoleOutput>
      {`Hello
Welcome to Java`}
    </ConsoleOutput>
  </>
}