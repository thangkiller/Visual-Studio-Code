import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import {
  succeed,
  With__Bonsai,
  Without__Bonsai,
  network_1,
  network_2,
} from '~/asset/images';
import {
  Proposals,
  Contact,
  Organzation,
  Tracking,
  Invoices,
  Accounting,
  Form,
} from '~/asset/images/sidebar';
import {
  img_1,
  img_2,
  img_3,
  img_4,
  icon__comment,
} from '~/asset/images/rates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import {
  faClipboard,
  faClock,
  faFile,
  faFileLines,
  faFolderOpen,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightLong,
  faClipboardList,
  faFileInvoiceDollar,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const $ = styles;
const sidebar = [
  {
    menu: {
      name: 'Proposals',
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    content: {
      title: 'Win More Work',
      decrip:
        'With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.',
      more: 'Proposals',
      to: '/',
      image: Proposals,
    },
  },
  {
    menu: {
      name: 'Contracts',
      icon: <FontAwesomeIcon icon={faFile} />,
    },
    content: {
      title: 'Protect Your Business',
      decrip:
        'Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.',
      more: 'Contracts',
      to: '/',

      image: Contact,
    },
  },
  {
    menu: {
      name: 'Client CRM',
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
    },
    content: {
      title: 'Stay Organized',
      decrip:
        'Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.',
      more: 'projects',
      to: '/',
      image: Organzation,
    },
  },
  {
    menu: {
      name: 'Time Tracking',
      icon: <FontAwesomeIcon icon={faClock} />,
    },
    content: {
      title: 'Keep It Simple',
      decrip: `Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.`,
      more: 'TIME TRACKING',
      to: '/',
      image: Tracking,
    },
  },
  {
    menu: {
      name: 'Invoices',
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    },
    content: {
      title: 'Get Paid Faster',
      decrip:
        'Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.',
      more: 'Invoices',
      to: '/',
      image: Invoices,
    },
  },
  {
    menu: {
      name: 'Task Tracking',
      icon: <FontAwesomeIcon icon={faClipboard} />,
    },
    content: {
      title: 'Be More Effective',
      decrip:
        'Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.',
      more: 'Tasks',
      to: '/',
      image: Tracking,
    },
  },
  {
    menu: {
      name: 'Accounting & Taxes',
      icon: <FontAwesomeIcon icon={faReceipt} />,
    },
    content: {
      title: 'Automate Your Finances',
      decrip:
        'With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.',
      more: 'Proposals',
      to: '/',
      image: Accounting,
    },
  },
  {
    menu: {
      name: 'Forms',
      icon: <FontAwesomeIcon icon={faClipboardList} />,
    },
    content: {
      title: 'Ask Your Clients',
      decrip:
        'Create your own customized forms and questionnaires for clients and kicking off new projects',
      more: 'Proposals',
      to: '/',
      image: Form,
    },
  },
];

const rates = [
  {
    avatar: img_1,
    comment:
      'For all my Freelancer / Small Agency followers, I wish I’d discovered @bonsaiinc long ago - great templated contract',
    name: 'David Mihm',
    job: 'Founder of TidingsCo',
  },
  {
    avatar: img_2,
    comment:
      '@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions.',
    name: 'David Urbinati',
    job: 'Motion design / animation',
  },
  {
    avatar: img_3,
    comment:
      "Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time.",
    name: 'Nathanael Smith',
    job: 'Product Design',
  },
  {
    avatar: img_4,
    comment:
      "Wow, @bonsaiinc's contracts are completely wonderful. If you freelance you have to check it out. Really lovely experience. h/t @hemeon",
    name: 'Jon Gold',
    job: 'Designer and engineer',
  },
];

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
            return (
              <div
                className={$.selection}
                key={i}
                onClick={() => setSidebarShift(i)}
              >
                <div>{menu.icon}</div>
                <h2>{menu.name}</h2>
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
