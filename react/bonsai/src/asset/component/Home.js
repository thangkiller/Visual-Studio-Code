import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Proposals,
  Contact,
  Organzation,
  Tracking,
  Invoices,
  Accounting,
  Form,
} from '~/asset/images/sidebar';
import { img_1, img_2, img_3, img_4 } from '~/asset/images/rates';

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

export { sidebar, rates };
