import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faClock,
  faFile,
  faFileInvoice,
  faFileLines,
  faFileWaveform,
  faFileZipper,
} from '@fortawesome/free-solid-svg-icons';

import { Logo } from '~/asset/images';
import Button from '~/component/Button';
import { Popper, ProducPopper } from '~/component/Popper';
import styles from './Header.module.scss';

const $ = styles;
const cx = classNames;
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

function Header() {
  const [shownSecondMenu, setShownSecondMenu] = useState(false);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  return (
    <div className={$.wrapper}>
      <div className={$.inner}>
        <div className={$.home}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={$.navigation}>
          <div className={$.left}>
            <Tippy
              interactive
              render={attrs => (
                <div tabIndex="-1" {...attrs}>
                  <Popper>
                    <div className={$.popperProduct}>
                      <div
                        className={cx($.popperItem, $.navigation__arrow)}
                        onMouseOver={() => setShownSecondMenu(true)}
                        onMouseOut={() => setShownSecondMenu(false)}
                      >
                        <h2>Bonsai Workflow</h2>
                        <p>
                          Look professional, win more clients and manage your
                          business from one place
                        </p>
                      </div>
                      <div className={$.popperItem}>
                        <h2>Bonsai Tax</h2>
                        <p>
                          Track expenses, maximize tax write-offs, and estimate
                          taxes without the headache
                        </p>
                      </div>
                      <div className={$.popperItem}>
                        <h2>Bonsai Cash</h2>
                        <p>
                          Bonsai’s all-in-one financial hub: No fees and
                          lightning fast payouts
                        </p>
                      </div>
                    </div>
                    <ProducPopper show={shownSecondMenu} />
                  </Popper>
                </div>
              )}
            >
              <div className={$.navi_left_item}>
                Product
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </Tippy>

            <Tippy
              interactive
              render={attrs => (
                <div tabIndex="-1" {...attrs}>
                  <Popper>
                    <Tippy
                      visible
                      placement="right-end"
                      interactive
                      render={attrs => {
                        const currentTemplate = templates[currentTemplateIndex];
                        return (
                          <div tabIndex="-1" {...attrs}>
                            <Popper className={$.secondMenuWrapper}>
                              <h3
                                className={$.title}
                              >{`Featured ${currentTemplate.name}`}</h3>
                              <div className={$.items}>
                                {currentTemplate.detail.map((item, i) => {
                                  return (
                                    <a className={$.item} key={i}>
                                      {item}
                                    </a>
                                  );
                                })}
                              </div>
                              <div className={$.more}>See All Templates</div>
                            </Popper>
                          </div>
                        );
                      }}
                    >
                      <div className={$.popperTemplates}>
                        {templates.map((template, index) => {
                          return (
                            <div
                              className={cx(
                                $.item,
                                $.navigation__arrow,
                                $.navigation__arrow__template
                              )}
                              key={index}
                              onMouseOver={() => setCurrentTemplateIndex(index)}
                            >
                              {template.icon}
                              <div>{template.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </Tippy>
                  </Popper>
                </div>
              )}
            >
              <div className={$.navi_left_item}>
                Templates
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </Tippy>

            <Link className={$.navi_left_item} to="/pricing">
              Pricing
            </Link>
            <div className={$.navi_left_item}>Reviews</div>
          </div>
          <div className={$.right}>
            <Button white small>
              log in
            </Button>
            <Button>start free</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
