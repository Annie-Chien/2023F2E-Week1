/** Style */
import S from './Advocacy.module.scss';
/** Component */
import Container from '../common/Container/Container';
/** Images */
import DecoImg from '../../assets/deco.png';

/* ------------------ Default Component ----------------- */
const Advocacy = () => {
  return (
    <div className={S.advocacy} id="advocacy">
      <Container>
        <div className={S.content}>
          <div style={{ position: 'absolute', bottom: 0, width: '30px' }}>
            <img src={DecoImg} />
          </div>
          <div className={S.box}>
            <h2 className="text-center">
              護航台灣幸福經濟 從照顧每一隻貓咪開始
            </h2>
            <h4>
              我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
            </h4>
            <h4>
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Advocacy;
