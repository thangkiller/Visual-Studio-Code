import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Pricing.module.scss';
import Button from '~/component/Button';
import { packs, add_ons, frequestions } from '~/asset/component/Pricing';
import { endow, tick } from '~/asset/images';

const cx = classNames.bind(styles);
const $ = styles;

function Pricing() {
  const monthly = false;
  const [option, setOption] = useState(monthly);
  const optionStyle = cx('option', { option_yearly: option });
  const monthStyle = cx('selection_month', {
    selection_month_unchecked: option,
  });
  const yearStyle = cx('selection_year', { selection_year_checked: option });

  const initialFrequestStates = Array(frequestions.length).fill(false);
  const [frequestStates, setFrequestStates] = useState(initialFrequestStates);
  return (
    <div className={$.wrapper}>
      <div className={$.packs}>
        <div className={$.header}>
          <h1>Plans & Pricing</h1>
          <div className={$.selections}>
            <div className={monthStyle}>monthly</div>
            <div className={$.switch} onClick={() => setOption(!option)}>
              <div className={optionStyle}></div>
            </div>
            <div className={yearStyle}>yearly</div>
            <div className={$.year_more}>
              <img src={endow} alt="endow" />
            </div>
          </div>
        </div>
        <div className={$.body}>
          {packs.map((pack, index) => {
            const priceOption = option ? 'yearlyPrice' : 'price';
            return (
              <div className={$.pack} key={index}>
                {pack.best && <div className={$.add_on}>most popular</div>}
                <h3>{pack.title}</h3>
                <p className={$.decription}>{pack.decription}</p>
                <div className={$.price_container}>
                  <div className={$.price}>
                    <div className={$.dolar}>$</div>
                    <div className={$.main}>{pack[priceOption]}</div>
                    <div className={$.unit}>/month</div>
                  </div>
                  {option && <div className={$.bill_yearly}>Billed yearly</div>}
                </div>
                <div className={$.features}>
                  {pack.features.map((feature, index) => {
                    return (
                      <div key={index} className={$.feature}>
                        <div className={$.tick_div}>
                          <img src={tick} alt="tick" />
                        </div>
                        <div>{feature}</div>
                      </div>
                    );
                  })}
                </div>
                <Button>START FREE</Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={$.add_ons}>
        <h2>Super charge your work with add-ons</h2>
        <div className={$.body}>
          {add_ons.map((add_on, index) => {
            return (
              <div className={$.add_on} key={index}>
                <div className={$.text}>
                  <h3>{add_on.title}</h3>
                  <p>{add_on.decription}</p>
                </div>
                <div className={$.price_div}>
                  {add_on.price ? (
                    <>
                      <span>{`$${add_on.price}`}</span>
                      <div className={$.monthly}>/month</div>
                    </>
                  ) : (
                    'Free'
                  )}
                </div>
              </div>
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
      <div className={$.frequestly}>
        <h2>Frequently Asked Questions</h2>
        {frequestions.map((frequestion, index) => {
          const frequestState = frequestStates[index];
          return (
            <div className={$.frequest} key={index}>
              <div
                className={$.quest}
                onClick={() => {
                  setFrequestStates(
                    frequestStates.map((frequestState, i) =>
                      i === index ? !frequestState : frequestState
                    )
                  );
                }}
              >
                <span>{`${frequestion.quest}?`}</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              {frequestState && (
                <div className={$.answer}>{frequestion.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
