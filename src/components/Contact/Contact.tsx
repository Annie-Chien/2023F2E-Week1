/** Style */
import S from './Contact.module.scss';
/** Components */
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';
/** Images */
import catImg from '../../assets/cat.png';
/* ------------------ Default Component ----------------- */
const Contact = () => {
  return (
    <section className={S.contact} id="contact">
      <Container>
        <div className={S.grid} data-aos="fade-up">
          <div className={S.text}>
            <p className="section-title">民眾服務信箱</p>
            <h4>您的聲音，我們的行動！</h4>
            <h4>
              親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
            </h4>
          </div>

          <form className={S.form}>
            <input type="text" placeholder="您的姓名" />
            <input type="email" placeholder="您的 Email" />
            <input type="tel" placeholder="您的手機號碼" />
            <textarea name="2" rows={6} placeholder="您的建言"></textarea>
            <Button type="primary" onClick={() => {}}>
              <h3>送出意見</h3>
            </Button>
          </form>
        </div>
      </Container>
      <div className={S.catImg}>
        <img src={catImg} />
      </div>
    </section>
  );
};

export default Contact;
