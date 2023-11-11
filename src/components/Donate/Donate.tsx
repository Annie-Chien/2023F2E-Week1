import { useRef, useState } from 'react';
/** Components */
import Button from '../common/Button/Button';
import Container from '../common/Container/Container';
/** Icons */
import { TbCoin } from 'react-icons/tb';
import { FaPaw } from 'react-icons/fa';
/** Style */
import S from './Donate.module.scss';
/** Plugins */
import classNames from 'classnames';
import CountUp, { useCountUp } from 'react-countup';
import { toast } from 'react-toastify';
/** Data */
import { PLAN_DATA, PlanType } from './data';

/* ------------------ Default Component ----------------- */
const Donate = () => {
  return (
    <section id="donate" className={S.donate}>
      <Container>
        <div className={S.content} data-aos="fade-up">
          <FlipCard />
        </div>
      </Container>
    </section>
  );
};

export default Donate;

/* ------------------- Sub-components ------------------- */
const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const countUpRef = useRef(null);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  /** Front */
  useCountUp({
    ref: countUpRef,
    prefix: 'NT$ ',
    start: 987650000,
    end: 987655873,
    delay: 1000,
    duration: 5,
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    scrollSpyOnce: true,
  });
  /** Back */
  const [selectedPlan, setSelectedPlan] = useState<number>();

  const onSelectPlan = (id: number) => {
    setSelectedPlan(id);
  };

  const notify = () => {
    toast(
      `歡迎成為${
        PLAN_DATA.find((plan) => plan.id === selectedPlan)?.title
      }的一份子，貓貓們由衷感謝你！`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: <FaPaw />,
        autoClose: false,
      }
    );
  };
  const confirmDonate = () => {
    if (selectedPlan) {
      notify();
    }
  };
  /** RENDER */
  return (
    <div className={classNames(S['flip-card'], { [S.flipped]: isFlipped })}>
      <div className={S.inner}>
        <div className={S.front}>
          <p className="section-title">小額捐款</p>
          <h4>您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
          <div className={S.amount}>
            <p className={S['text']}>累積總金額</p>
            <p className={S['num']} ref={countUpRef}>
              NT$987,655,873
            </p>
          </div>

          <Button type="primary" onClick={flipCard}>
            <TbCoin />
            <h3>前往捐款</h3>
          </Button>
        </div>
        <div className={S.back}>
          <h4 className="bold">選擇捐款方案</h4>
          <div className={S.planWrap}>
            {PLAN_DATA.map((plan, idx) => (
              <Plan
                key={plan.id}
                data={plan}
                onClick={() => onSelectPlan(plan.id)}
                selectedId={selectedPlan}
              />
            ))}
          </div>
          <form>
            <label htmlFor="amount">自訂捐款金額</label>
            <input type="text" name="amount" placeholder="請輸入捐款金額" />
          </form>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Button onClick={flipCard} type="outline">
              <h3>返回</h3>
            </Button>
            <Button onClick={confirmDonate}>
              <TbCoin className="icon" />
              <h3>我要捐款</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plan = ({
  data,
  onClick,
  selectedId,
}: {
  selectedId: number | undefined;
  data: PlanType;
  onClick: () => void;
}) => {
  const { title, amount, people, id } = data;
  return (
    <div
      className={classNames(S.plan, { [S.selected]: selectedId === id })}
      onClick={onClick}
    >
      <h5>{title}</h5>
      <p className={S.price}>NT${amount.toLocaleString()}</p>
      <small>已有 {people} 人贊助</small>
    </div>
  );
};
