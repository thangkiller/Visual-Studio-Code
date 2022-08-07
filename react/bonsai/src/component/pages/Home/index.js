import Button from '~/component/Button';
import { succeed, With__Bonsai, Without__Bonsai } from '~/asset/images';
import {
  Proposals,
  Contract,
  Organzation,
  Tracking,
  Invoices,
  Accounting,
  Form,
} from '~/asset/images/sidebar';
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
      image: Contract,
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
      image: Invoices,
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
      image: Form,
    },
  },
];

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
      <div className={$.sidebar}>
        <nav className={$.menu}>
          {sidebar.map((selection, i) => {
            return (
              <div className={$.selection} key={i}>
                {selection.icon}
                <h2>{selection.name}</h2>
              </div>
            );
          })}
        </nav>
        <div className={$.content}></div>
      </div>
    </div>
  );
}

export default Home;
