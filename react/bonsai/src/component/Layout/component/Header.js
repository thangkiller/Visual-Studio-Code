import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { templates } from '~/asset/component/Header';
import { Logo } from '~/asset/images';
import Button from '~/component/Button';
import { Popper, ProducPopper } from '~/component/Popper';
import styles from './Header.module.scss';

const $ = styles;
const cx = classNames;

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
