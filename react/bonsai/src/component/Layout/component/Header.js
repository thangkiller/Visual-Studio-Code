import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import { Logo } from '~/asset/images';
import styles from './Header.module.scss';

const $ = styles;

function Header() {
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
            <div>Product</div>
            <div>Templates</div>
            <Link to="/pricing">Pricing</Link>
            <div>Reviews</div>
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
