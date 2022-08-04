import styles from "./Footer.module.scss";

const footer = [
  {
    name: 'product',
    navies: [{
      name: 'Proposals',
      link: ''
    },
    {
      name: 'Contacts',
      link: ''
    },
    {
      name: 'Invoicing',
      link: ''
    },
    {
      name: 'Client CRM',
      link: ''
    },
    {
      name: 'Time Tracking',
      link: ''
    },
    {
      name: 'Forms',
      link: ''
    },
    {
      name: 'Accounting',
      link: ''
    },
    {
      name: 'Bonsai Tax',
      link: ''
    },
    {
      name: 'Bonsai Cask',
      link: ''
    },
    {
      name: 'Pricing',
      link: ''
    },
    {
      name: 'Bonsai Reviews',
      link: ''
    }
    ]
  },
  {
    nane: 'free resoures',
    navies: [
      {
        name: 'Freelace Resoures',
        link: ''
      },
      {
        name: 'Freelace Blog by Bonsai',
        link: ''
      },
      {
        name: 'How to write a Contract',
        link: ''
      },
      {
        name: 'Online Signature Maker',
        link: ''
      },
      {
        name: 'Self-Employed Taxes Hub',
        link: ''
      },
      {
        name: 'Self-Emloyed Tax Calculator',
        link: ''
      },
      {
        name: 'Self-Employed Tax Deducations',
        link: ''
      },
      ]
  },
  {
    name: 'Templates',
    navies: [
      {
        name: 'Invoice Templates',
        link: ''
      },
      {
        name: 'Proposal Templates',
        link: ''
      },
      {
        name: 'Contact Templates',
        link: ''
      },
      {
        name: 'Agreement Templates',
        link: ''
      },
      {
        name: 'Scope of Work Templates',
        link: ''
      },
      {
        name: 'Quote Templates',
        link: ''
      },
      {
        name: 'Credit Note Templates',
        link: ''
      },
      {
        name: 'Estimate Templates',
        link: ''
      },
     ]
  },
  {
    name: 'bonsai',
    navies: [
      {
        name: 'About',
        link: ''
      },
      {
        name: 'Careers',
        link: ''
      },
      {
        name: 'Support',
        link: ''
      },
      {
        name: 'LinkedIn',
        link: ''
      },
      {
        name: 'Twitter',
        link: ''
      },
      {
        name: 'Privacy policy',
        link: ''
      },
      {
        name: 'Legal',
        link: ''
      },
      {
        name: 'Affiliates',
        link: ''
      },
      {
        name: 'Write for Us',
        link: ''
      },
      {
        name: 'Comparisons',
        link: ''
      },
      ]
  }
]

const $ = styles;

function Footer() {
  return (
    <div className={$.wrapper}>
      <div className={$.inner}>ffoer</div>
    </div>
  );
}

export default Footer;
