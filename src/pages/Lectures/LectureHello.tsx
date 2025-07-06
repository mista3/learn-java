import { Typography } from 'antd';
import {
  start1Png,
  start2Png,
  start3Png,
  start4Png,
  start5Png,
  start6Png,
  start7Png,
  start8Png,
  start9Png,
} from '../../assets/photos';
import { CodeBlock, ImageBlock } from '../../components';

const { Title, Paragraph, Text } = Typography;

export const LectureHello = () => {
  return <>
    <Title level={2}>Hello World!</Title>
    <Paragraph>После установки запускаем среду разработки. В открывшимся окне приветствия нажимаем <Text strong>New Project</Text></Paragraph>
    <ImageBlock src={start1Png}/>
    <Paragraph>В списке языков выбираем <Text strong>Java</Text> и нажимаем <Text strong>Next</Text></Paragraph>
    <ImageBlock src={start2Png}/>
    <Paragraph>Эту страницу пропускаем и нажимаем <Text strong>Next</Text></Paragraph>
    <ImageBlock src={start3Png}/>
    <Paragraph>Указываем имя проекта, путь и нажимаем <Text strong>Finish</Text></Paragraph>
    <ImageBlock src={start4Png}/>
    <Paragraph>Создается проект с такой структурой. Нас интересует папка <Text strong>src</Text></Paragraph>
    <ImageBlock src={start5Png}/>
    <Paragraph>Нажимаем правой кнопкой и создаем класс как показано на скриншоте</Paragraph>
    <ImageBlock src={start6Png}/>
    <Paragraph>Указываем имя класса и нажимаем <Text keyboard strong>Enter</Text></Paragraph>
    <ImageBlock src={start7Png}/>
    <Paragraph>Пишем свой первый класс с методом <Text strong>Hello World</Text></Paragraph>
    <CodeBlock>
      {`public class Test { 

    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}`}
    </CodeBlock>
    <Paragraph>Запустить написанный нами метод можно нажав на зеленую стрелку слева от него</Paragraph>
    <ImageBlock src={start8Png}/>
    <Paragraph>Также можно запустить весь класс целиком нажав на зеленую стрелку справа сверху</Paragraph>
    <ImageBlock src={start9Png}/>
    <Paragraph><Text strong>Поздравляем!</Text> Вы запустили свою первую программу на Java 🔥</Paragraph>
  </>
}