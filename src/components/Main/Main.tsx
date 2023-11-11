/** Style */
import S from './Main.module.scss';
/** Images & Icons */
import CandidateImg from '../../assets/main/candidate.png';
import HNameImg from '../../assets/main/name-h.png';
import VNameImg from '../../assets/main/name-v.png';
import MobileHNameImg from '../../assets/main/name-h-mobile.png';
/** Components */
import Container from '../common/Container/Container';

/* ------------------ Default Component ----------------- */
const Main = () => {
  return (
    <section className={S.main} id="main">
      <Container>
        <div className={S.content}>
          <div className={S.text}>
            <p className={`${S.subtitle} bold`}>2023 THE F2E 立委競選</p>
            <div className={`${S.title} bold`}>
              <p>
                從<span className="highlight">喵</span>的眼中
              </p>
              <p>看見台灣</p>
            </div>
          </div>
          <div className={S.mainImg}>
            <img src={CandidateImg} />
          </div>

          <div
            className={S.vNameImg}
            data-aos="slide-up"
            data-aos-duration="2500"
          >
            <img src={VNameImg} />
          </div>

          <div
            className={S.hNameImg}
            data-aos="slide-left"
            data-aos-duration="2500"
          >
            <picture>
              <source media="(max-width: 480px)" srcSet={MobileHNameImg} />
              <img src={HNameImg} />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Main;
