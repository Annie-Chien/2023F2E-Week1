/** Component */
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';
import Tag from '../common/Tag/Tag';
/** Style */
import S from './Activity.module.scss';
/** Plugins */
import classNames from 'classnames';
import { toast } from 'react-toastify';

/** Icons & Images */
import { HiArrowLongRight } from 'react-icons/hi2';
/** Data */
import { ACTIVITY_DATA, ActivityItem } from './data';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/* ------------------ Default Component ----------------- */
const Activity = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  const notify = () => {
    toast.warning('我還沒做啦 🤓', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  //如果w>=768：第一個Card 須為垂直，其餘為垂直；否則全部都垂直
  /** RENDER */
  return (
    <section className={S.activity} id="activity">
      <Container>
        <div data-aos="fade-up" className={S.content}>
          <p className="section-title">最新活動</p>

          <div className={S.grid}>
            {ACTIVITY_DATA.map((data, idx) => (
              <Card
                key={idx}
                horizontal={matches ? true : idx !== 0}
                data={data}
              />
            ))}
          </div>

          <Button type="text" onClick={notify}>
            更多活動
            <HiArrowLongRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Activity;

/* ------------------- Sub-components ------------------- */
const Card = ({
  horizontal,
  data,
}: {
  horizontal?: boolean;
  data: ActivityItem;
}) => {
  const { title, date, img, description } = data;
  return (
    <div className={classNames(S.card, { [S.horizontal]: horizontal })}>
      {horizontal ? null : (
        <div className={S.date}>
          <span className={S.day}>26</span>
          <span className={S.month}>DEC.</span>
        </div>
      )}

      <div className={S.img}>
        <img src={img} />
      </div>
      <div className={S.text}>
        {horizontal ? <Tag>2023.10.31</Tag> : null}
        <h4>{title}</h4>
        <p>{description} </p>
      </div>
    </div>
  );
};
