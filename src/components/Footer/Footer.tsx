/** Style */
import S from './Footer.module.scss';
/** Images & Icons */
import logo from '../../assets/logo-light.png';
/** Component */
import Container from '../common/Container/Container';

/* ------------------ Default Component ----------------- */
const Footer = () => {
  return (
    <footer className={S.footer}>
      <Container>
        <div className={S.content}>
          <div style={{ maxWidth: '150px' }}>
            <img src={logo} />
          </div>
          <div>
            <p>版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</p>
            <small>設計師：UNA，工程師：Annie</small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
