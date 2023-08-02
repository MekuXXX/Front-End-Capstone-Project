/* eslint-disable no-empty-pattern */
import LemonDessert from '../../assets/lemon dessert.jpg';
import GreekSalad from '../../assets/greek salad.jpg';
import Bruchetta from '../../assets/bruchetta.svg';
import './Specials.scss';
type Props = {};
export default function Specials({}: Props) {
  return (
    <section className='specials'>
      <div className='heading'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className='special-items'>
        <div className='col'>
          <div className='img-cont'>
            <img src={GreekSalad} alt='Item' />
          </div>
          <div className='col-cont'>
            {' '}
            <div className='item-head'>
              <h4>Greek salad</h4>
              <p>$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ipsa sit. Atque nihil neque ipsum libero tempora vero
              architecto, consequuntur, debitis eveniet, iste blanditiis et
              obcaecati veritatis hic qui unde!
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className='col'>
          <div className='img-cont'>
            <img src={Bruchetta} alt='Item' />
          </div>
          <div className='col-cont'>
            {' '}
            <div className='item-head'>
              <h4>Brachetta</h4>
              <p>$5.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ipsa sit. Atque nihil neque ipsum libero tempora vero
              architecto, consequuntur, debitis eveniet, iste blanditiis et
              obcaecati veritatis hic qui unde!
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className='col'>
          <div className='img-cont'>
            <img src={LemonDessert} alt='Item' />
          </div>
          <div className='col-cont'>
            {' '}
            <div className='item-head'>
              <h4>Lemon Dessert</h4>
              <p>$5.00</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ipsa sit. Atque nihil neque ipsum libero tempora vero
              architecto, consequuntur, debitis eveniet, iste blanditiis et
              obcaecati veritatis hic qui unde!
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
      </div>
    </section>
  );
}
