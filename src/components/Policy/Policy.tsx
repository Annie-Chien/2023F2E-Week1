/** Components */
import Container from '../common/Container/Container';
/** Style */
import S from './Policy.module.scss';
import Tag from '../common/Tag/Tag';
/** Data */
import { POLICY_DATA, PolicyItem } from './data';
/* ------------------ Default Component ----------------- */
const Policy = () => {
  return (
    <div className={S.policy} id="policy">
      <Container>
        <div data-aos="fade-up">
          <p className="section-title text-light">政策議題</p>
          <div className={S.list}>
            {POLICY_DATA.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Policy;
/* ------------------- Sub-components ------------------- */
const Card = ({ data }: { data: PolicyItem }) => {
  const { tag, title, note } = data;
  return (
    <div className={S.card}>
      <Tag>{tag}</Tag>
      <h4>{title}</h4>
      <ol className={S.note}>
        {note.map((n, idx) => (
          <li key={idx}>{n}</li>
        ))}
      </ol>
    </div>
  );
};
