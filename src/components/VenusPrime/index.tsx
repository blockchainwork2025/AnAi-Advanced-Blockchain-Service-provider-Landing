import cn from 'classnames';
import Container from '../Container/Container';
import Link from '../Link/Link';
import s from './VenusPrime.module.css';

const VenusPrime: React.FC = () => (
  <Container className={s.root}>
    <div className={s.card} key="bounty">
      <div className={cn(s.backgroundImg, s.venusPrimeLogo)} />
      <div className={s.logoMobile} />
      <div className={s.textWrapper}>
        <h2>
          <span className={s.accent}>AnAi Prime</span> rewards loyalty
          <br /> with superior rewards
        </h2>
        <p>
          With AnAi Prime, dedicated users obtain boosted rewards when they lend and borrow on
          AnAi while staking in the governance vault.
        </p>
        <Link className={s.link} href="#">
          Learn more
        </Link>
      </div>
    </div>
  </Container>
);

export default VenusPrime;
