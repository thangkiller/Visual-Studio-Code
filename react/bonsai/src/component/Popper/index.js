import styles from './Popper.module.scss';

const $ = styles;

function Popper({ children }) {
  return <div className={$.wrapper}>{children}</div>;
}

export { default as ProducPopper } from './ProducPopper';
export { default as TemplatesPopper } from './TemplatesPopper';
export { Popper };
