import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faClock,
  faFile,
  faFileInvoice,
  faFileLines,
  faFileWaveform,
  faFileZipper,
} from '@fortawesome/free-solid-svg-icons';

const templates = [
  {
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: 'Contract Templates',
    detail: [
      'Free Contract Maker',
      'Social Media Management Contract Template',
      'Graphic Design Contract Template',
      'Digital Marketing Contract Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    name: 'Proposal Templates',
    detail: [
      'Graphic Design Proposal Template',
      'Business Proposal Template',
      'Brand Ambassador Proposal Template',
      'Data Entry Proposal Letter Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    name: 'Invoice Templates',
    detail: [
      'Social Media Invoice Templates',
      'Contractor Invoice Template',
      'Web Design Invoice Template',
      'Influencer Invoice Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFileWaveform} />,
    name: 'Agreement Templates',
    detail: [
      'Influencer Agreement Template',
      'Influencer Collaboration Agreement Template',
      'Monthly Retainer Agreement Template',
      'Writer Agreement Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFileZipper} />,
    name: 'Quote Templates',
    detail: [
      'Web Design Quotation Template',
      'Interior Design Quotation Template',
      'Digital Marketing Quotation Template',
      'Video Production Quotation Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    name: 'Scope of Work Templates',
    detail: [
      'Website Development Scope of Work Template',
      'Digital Marketing Scope of Work Template',
      'Consultant Scope of Work Template',
      'Interior Design Scope ofWork Template',
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFileZipper} />,
    name: 'Brief Templates',
    detail: [
      'Design Brief Template',
      'Architecture Design Brief',
      'Fashion Design Brief',
      'Creative Brief Template',
    ],
  },
];

export { templates };
