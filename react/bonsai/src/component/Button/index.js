import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to: linkGlobal,
  link: linkRouter,
  children,
  white,
  small,
  big,
}) {
  let Cover, href, to;
  if (linkGlobal) {
    if (linkRouter) console.log('co loi');
    else {
      Cover = 'a';
      href = linkGlobal;
    }
  } else if (linkRouter) {
    Cover = Link;
    to = linkRouter;
  } else {
    Cover = 'button';
  }

  const props = {
    href,
    to,
  };
  const wrapper = cx('wrapper', {
    ['wrapper--white']: white,
    ['wrapper--small']: small,
    ['wrapper--big']: big,
  });
  return (
    <Cover className={wrapper} {...props}>
      <span>{children}</span>
    </Cover>
  );
}

export default Button;
