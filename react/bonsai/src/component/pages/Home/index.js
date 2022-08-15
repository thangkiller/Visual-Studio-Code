import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import { sidebar, rates } from '~/asset/component/Home';
import {
  succeed,
  With__Bonsai,
  Without__Bonsai,
  network_1,
  network_2,
} from '~/asset/images';
import { ChevronRight } from '~/asset/images/sidebar';
import { icon__comment } from '~/asset/images/rates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const $ = styles;

function Home() {
  const initialIndex = 0;
  const [sidebarShift, setSidebarShift] = useState(initialIndex);
  const [cirleShift, setCirleShift] = useState(initialIndex);
  const currentContent = sidebar[sidebarShift].content;
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
          <img src={succeed} alt="Bonsai" />
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
              alt="Without__Bonsai"
            />
          </div>
          <div className={$.illustration__item}>
            <h3>With Bonsai</h3>
            <img src={With__Bonsai} alt="With__Bonsai" />
          </div>
        </div>
      </div>
      <div className={$.sidebar}>
        <div className={cx('blue_shape', 'blue_shape--sidebar')}></div>
        <nav className={$.menu}>
          {sidebar.map((shift, i) => {
            const menu = shift.menu;
            const selectionStyle = cx($.selection, {
              selection_checked: i === sidebarShift,
            });
            return (
              <div
                className={selectionStyle}
                key={i}
                onClick={() => setSidebarShift(i)}
              >
                <div>{menu.icon}</div>
                <h2>{menu.name}</h2>
                {i === sidebarShift && <ChevronRight className={$.arrow} />}
              </div>
            );
          })}
        </nav>
        <div className={$.content}>
          <div className={$.text}>
            <h2>{currentContent.title}</h2>
            <p>{currentContent.decrip}</p>
            <Link to={currentContent.to}>
              <span>{`EXPLORE ${currentContent.more}`}</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </div>
          <div className={$.photo}>
            <img src={currentContent.image} alt="Bonsai" />
          </div>
        </div>
      </div>
      <div className={$.network}>
        <div className={cx('blue_shape', 'blue_shape--network')}></div>
        <div className={$.header}>
          <h1>Trusted by 500k + self-employed worked and small business</h1>
          <p>
            Whether you're just getting started or your business is booming,
            Bonsai has you covered.
          </p>
        </div>
        <div className={$.types}>
          <div className={$.type}>
            <img src={network_1} alt="network" />
            <h4>Built for All Work Types</h4>
            <p>
              We proudly back people with wide-ranging business - from design
              and maketing to development, writing, and photography.
            </p>
          </div>
          <div className={$.type}>
            <img src={network_2} alt="network" />
            <h4>Built for Global Business</h4>
            <p>
              Bonsai has international coverage across the United States,
              Canada, Australia and more with 180 currencies supported.
            </p>
          </div>
        </div>
      </div>
      <div className={$.rates}>
        <h1>Don't just take it from us.</h1>
        <div className={$.rate_container}>
          {rates.map((rate, index) => {
            const isAppearPair =
              index === 2 * cirleShift || index === 2 * cirleShift + 1;
            const rateStyle = cx('rate', {
              disappear: !isAppearPair,
            });
            return (
              <div className={rateStyle} key={index}>
                <div className={$.image}>
                  <img className={$.avatar} src={rate.avatar} alt="rate" />
                  <img className={$.icon} src={icon__comment} alt="rate" />
                </div>
                <div className={$.comment}>{`"${rate.comment}"`}</div>
                <div className={$.name}>{rate.name}</div>
                <div className={$.job}>{rate.job}</div>
              </div>
            );
          })}
        </div>
        <div className={$.more}>
          {Array(rates.length / 2)
            .fill()
            .map((_, index) => {
              const cirleStyle = cx('circle', {
                circle__unchecked: index !== cirleShift,
              });
              return (
                <div
                  key={index}
                  className={cirleStyle}
                  onClick={() => setCirleShift(index)}
                ></div>
              );
            })}
        </div>
      </div>
      <div className={$.business}>
        <p>
          It’s <span>your</span> business.
          <br /> We’re here to help it grow.
        </p>
        <div>
          <Button>START FREE</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
