import Button from '~/component/Button';
import { succeed, With__Bonsai, Without__Bonsai } from '~/asset/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const $ = styles;

function Home() {
  return (
    <div className={$.wrapper}>
      <div className={$.email}>
        <div className={$.blue_shape}></div>
        <div className={$.content}>
          <h1>Everything you need to run your business.</h1>
          <p>
            Bonsai's all-in-one product suite with smart automation lets you
            focus on your passion, not your paperwork.
          </p>
          <form className={$.log_in}>
            <input placeholder="Enter your email" />
            <Button className={$.btn}>start free</Button>
          </form>
        </div>
        <div className={$.image}>
          <img src={succeed} />
        </div>
      </div>
      <div className={$.benefit}>
        <div className={cx('blue_shape', 'blue_shape--benefit')}></div>
        <div className={$.slogan}>
          <h1>Make more, manage less</h1>
          <p>
            Bonsai integrates and automates every step of your business so it
            runs seamlessly - from proposal to tax season.
          </p>
        </div>
        <div className={$.illustration}>
          <div className={$.illustration__item}>
            <h3>Without Bonsai</h3>
            <img
              className={$.illustration__item_without}
              src={Without__Bonsai}
            />
          </div>
          <div className={$.illustration__item}>
            <h3>With Bonsai</h3>
            <img src={With__Bonsai} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
