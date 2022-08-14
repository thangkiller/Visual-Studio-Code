import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import { endow, tick } from '~/asset/images';
import styles from './Pricing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const $ = styles;
const packs = [
  {
    title: 'Starter',
    decription: 'Ideal for freelancers and contractors just starting out.',
    price: 24,
    features: [
      'All Templates',
      'Unlimited Clients & Projects',
      'Invoicing & Payments',
      'Proposals & Contracts',
      'Tasks & Time Tracking',
      'Client CRM',
      'Expense Tracking',
      'Up to 5 Project Collaborators',
    ],
  },
  {
    title: 'Professional',
    decription: 'Everything a growing independent business needs to thrive.',
    price: 39,
    features: [
      'Everything in Starter plus...',
      'Custom Branding',
      'Forms & Questionnaires',
      'Workflow Automations',
      'Client Portal',
      'Calendly Integration',
      'Zapier Integration',
      'Up to 15 Project Collaborators',
    ],
  },
  {
    title: 'Business',
    decription: 'The perfect package for small businesses and agencies.',
    price: 79,
    features: [
      'Everything in Starter and Professional plus...',
      'Subcontractor Management',
      'Hiring Agreement Templates (1099 contracts)',
      'Subcontractor Onboarding',
      'Talent Pool',
      '3 Team Seats (additional seats $9/month)',
      'Accountant Access',
      'Connect Multiple Bank Accounts',
      'Unlimited Subcontractors',
      'Unlimited Project Collaborators',
    ],
  },
];
const add_ons = [
  {
    title: 'Collaborators',
    decription:
      'Invite other users to specific projects for limited access and functionality.',
  },
  {
    title: 'Partners',
    decription:
      'Invite other users for full account access and company management.',
    price: 9,
  },
  {
    title: 'Bonsai Tax',
    decription:
      'Track expenses, identify write-offs, and estimate quarterly taxes easily.',
    price: 10,
    more: true,
  },
];
const frequestions = [
  {
    quest: 'How does the free trial work',
    answer:
      "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
  },
  {
    quest: 'Can I change plans anytime',
    answer:
      'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".',
  },
  {
    quest: 'How do I pause my Bonsai subscription',
    answer:
      "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
  },
  {
    quest: 'What is your refund policy',
    answer:
      'If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.',
  },
];

function Pricing() {
  const monthly = false;
  const [option, setOption] = useState(monthly);
  const optionStyle = cx('option', { option_yearly: option });
  const monthStyle = cx('selection_month', {
    selection_month_unchecked: option,
  });
  const yearStyle = cx('selection_year', { selection_year_checked: option });

  const initialFrequestStates = Array(frequestions.length).fill(false);
  const [frequestStates, setFrequestStates] = useState(
    Array(frequestions.length).fill(false)
  );
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
            return (
              <div className={$.pack} key={index}>
                <h3>{pack.title}</h3>
                <p className={$.decription}>{pack.decription}</p>
                <div className={$.price}>
                  <div className={$.dolar}>$</div>
                  <div className={$.main}>{pack.price}</div>
                  <div className={$.unit}>/month</div>
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
