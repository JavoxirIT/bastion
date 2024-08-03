import one from '../images/mainCardImage/1.png';
import two from '../images/mainCardImage/2.png';
import three from '../images/mainCardImage/3.png';
import four from '../images/mainCardImage/4.png';

export const mainCatd = [
  {
    id: 1,
    title: (() => (
      <>
        Найдем <span style={{ color: 'red' }}>компромисс</span> с любым
        заказчиком
      </>
    ))(),
    img: one,
  },
  {
    id: 2,
    title: (() => (
      <>
        Весь <span style={{ color: 'red' }}>комплекс</span> подрядных услуг
      </>
    ))(),
    img: two,
  },
  {
    id: 3,
    title: (() => (
      <>
        Финансовые гарантии от{' '}
        <span style={{ color: 'red' }}>«Альфа банка»</span>
      </>
    ))(),
    img: three,
  },
  {
    id: 4,
    title: (() => (
      <>
        <span style={{ color: 'red' }}>Доставка</span> в любой регион
      </>
    ))(),
    img: four,
  },
];
