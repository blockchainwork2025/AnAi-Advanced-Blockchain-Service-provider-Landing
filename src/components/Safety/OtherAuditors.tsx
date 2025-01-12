import cn from 'classnames';
import s from './Safety.module.css';

interface ISafetyProps {
  className?: string;
}

const OtherAuditors: React.FC<ISafetyProps> = () => (
  <div className={cn(s.otherAuditors, s.linkWrapper)}>
    <a href="#" className={s.otherAuditsLink}>
      +14 audits with <br />
      Fairyproof, Hacken and HashEx
    </a>
  </div>
);

export default OtherAuditors;
