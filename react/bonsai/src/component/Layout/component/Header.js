import { useState } from 'react';
import { Link } from 'react-router-dom';
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
const templates = [
  {
    icon: <FontAwesomeIcon icon={faFileLines} />,
    name: 'Contract Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    name: 'Proposal Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faFileInvoice} />,
    name: 'Invoice Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faFileWaveform} />,
    name: 'Agreement Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faFileZipper} />,
    name: 'Quote Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    name: 'Scope of Work Templates',
  },
  {
    icon: <FontAwesomeIcon icon={faFileZipper} />,
    name: 'Brief Templates',
  },
];

function Header() {
  const [shownSecondMenu, setShownSecondMenu] = useState(false);

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
                        className={$.popperItem}
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
              visible
              interactive
              render={attrs => (
                <div tabIndex="-1" {...attrs}>
                  <Popper>
                    <div className={$.popperTemplates}>
                      {templates.map((template, index) => {
                        return (
                          <Tippy
                            placement="right-end"
                            interactive
                            render={attrs => (
                              <div tabIndex="-1" {...attrs}>
                                <Popper>
                                  <div className={$.popperTemplates}>
                                    {templates.map((template, index) => {
                                      return (
                                        <div className={$.item} key={index}>
                                          {template.icon}
                                          <div>{template.name}</div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Popper>
                              </div>
                            )}
                          >
                            <div className={$.item} key={index}>
                              {template.icon}
                              <div>{template.name}</div>
                            </div>
                          </Tippy>
                        );
                      })}
                    </div>
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
