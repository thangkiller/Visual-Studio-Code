import { useState } from 'react';
import { Link } from 'react-router-dom';
import { footer } from '~/asset/component/Footer';
import styles from './Footer.module.scss';

const $ = styles;

function Footer() {
  const [currentList, setCurrentList] = useState(-1);
  return (
    <div className={$.wrapper}>
      {footer.map((group, index) => {
        return (
          <div key={index} className={$.group}>
            <h3>{group.name}</h3>
            {group.navies.map((navi, naviIndex) => {
              let list;
              if (navi.list)
                list = navi.list.map((nav, i) => {
                  return <a key={i}>{nav}</a>;
                });
              return (
                <>
                  <div
                    key={index * 10 + naviIndex}
                    onClick={() =>
                      setCurrentList(currentList === index ? -1 : index)
                    }
                  >
                    <Link to={navi.link}>{navi.name}</Link>
                    {navi.arrow}
                  </div>
                  {currentList === index && (
                    <div className={$.naviList}>{list}</div>
                  )}
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
