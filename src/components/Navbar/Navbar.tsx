/** Components */
import Button from '../common/Button/Button';
import Container from '../common/Container/Container';
/** Style */
import S from './Navbar.module.scss';
/** Images & Icons */
import Logo from '../../assets/logo.png';
import { TbCoin } from 'react-icons/tb';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import classNames from 'classnames';
/* ------------------ Default Component ----------------- */
const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  /** RENDER */
  return (
    <nav className={S.nav}>
      <Container>
        <div className={S.content}>
          <div style={{ width: '160px' }}>
            <img src={Logo} />
          </div>
          <div
            className={S.hamburger}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <HiMenuAlt3 />
          </div>

          <ul
            className={classNames(`${S.menu} bold`, {
              [S.show]: showMobileNav,
            })}
          >
            <li>
              <a href="#main">候選人主張</a>
            </li>
            <li>
              <a href="#activity">最新活動</a>
            </li>
            <li>
              <a href="#policy">政策議題</a>
            </li>
            <li>
              <a href="#contact">民眾服務信箱</a>
            </li>
            <li>
              <a href="#donate">
                <Button onClick={() => {}} size="sm">
                  <TbCoin className="icon" />
                  小額捐款
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
