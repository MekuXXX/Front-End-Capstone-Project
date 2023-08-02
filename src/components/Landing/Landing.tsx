/* eslint-disable no-empty-pattern */
import Chicago from '../../assets/restauranfood.jpg';
import './Landing.scss';
type Props = {};
export default function Landing({}: Props) {
  return (
    <main className='land'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iste
        commodi dignissimos ratione excepturi maiores vero consectetur
        voluptates corrupti dolorem? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Illum architecto maiores temporibus magni, ex ipsam
        eius voluptas nesciunt dolorum fugit.
      </p>
      <button>Reverse a Table</button>
      <div>
        <img src={Chicago} alt='Chicago' />
      </div>
    </main>
  );
}
