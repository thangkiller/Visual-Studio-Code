import classNames from 'classnames';
import styles from './Popper.module.scss';

const cx = classNames;

function Popper({ children, className }) {
  const popperStyle = cx(styles.wrapper, className);
  return <div className={popperStyle}>{children}</div>;
}

export { default as ProducPopper } from './ProducPopper';
export { default as TemplatesPopper } from './TemplatesPopper';
export { Popper };
