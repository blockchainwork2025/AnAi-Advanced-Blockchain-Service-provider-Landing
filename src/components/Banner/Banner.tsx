import cn from 'classnames';
import { useState } from 'react';
import s from './Banner.module.css';
import Close from './assets/close.svg?react';

interface IBannerProps {
  className?: string;
}

const Banner: React.FC<IBannerProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return isOpen ? (
    <section className={cn(s.root, className)}>
      <div className={s.limit}>
        <div className={s.content}>
          <span className={s.text}>
            Announcing another V4 delivery: AnAi Prime. Learn more on the{' '}
            <a href="#">documentation</a> site and{' '}
            <a href="#">
              whitepaper
            </a>
          </span>
          <Close className={s.close} onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </section>
  ) : null;
};

export default Banner;
