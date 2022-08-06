import Button from '~/component/Button';
import { succeed } from '~/asset/images';
import styles from './Home.module.scss';

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
    </div>
  );
}

export default Home;
