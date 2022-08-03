import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileContract,
  faFileInvoice,
  faFileInvoiceDollar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAddressBook,
  faClock,
  faFileLines,
  faFileZipper,
} from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const benefits = [
  {
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    title: 'Invoices',
    decript:
      'Get paid faster with automatic invoicing, online payments and more',
  },
  {
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    title: 'Proposals',
    decript:
      'Create client-winning proposals with open receipts, custom packages and electronic approvals',
  },
  {
    icon: <FontAwesomeIcon icon={faAddressBook} />,
    title: 'Contracts',
    decript:
      'Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.',
  },
  {
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    title: 'Client CRM',
    decript:
      'Add leads, manage existing clients and track projects easily from one place',
  },
  {
    icon: <FontAwesomeIcon icon={faFileLines} />,
    title: 'Forms & Automations',
    decript:
      'Boost client intake and automate feedback with custom web forms and questionnaires',
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    title: 'Time Tracking',
    decript:
      'Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system',
  },
  {
    icon: <FontAwesomeIcon icon={faFileContract} />,
    title: 'Accounting',
    decript:
      'Manage your finances easily with income reports, expense tracking, tax reminders and more',
  },
  {
    icon: <FontAwesomeIcon icon={faFileZipper} />,
    title: 'Task Tracking',
    decript:
      'Stress-free task management with project templates and integrated timesheets',
  },
];

function ProducPopper({ show }) {
  const wrapperStyle = cx('wrapper--product', {
    ['wrapper--product--show']: show,
  });
  return (
    <div className={wrapperStyle}>
      {benefits.map((benefit, index) => {
        return (
          <a key={index} className={cx('product--item')}>
            {benefit.icon}
            {
              <div className={cx('product--item--content')}>
                <h4 className={cx('product--item--title')}>{benefit.title}</h4>
                <div className={cx('product--item--decript')}>
                  {benefit.decript}
                </div>
              </div>
            }
          </a>
        );
      })}
    </div>
  );
}

export default ProducPopper;
