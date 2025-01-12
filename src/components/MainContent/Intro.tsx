import Container from '../Container/Container';
import Link from '../Link/Link';
import LinkLaunchApp from '../Link/LinkLaunchApp';
import s from './Intro.module.css';
import IconArrow from './assets/arrow.svg?react';

const links = [
  {
    text: 'Deliver',
    href: '#',
  },
  {
    text: 'AnAi- Web App',
    href: '#',
  },
  {
    text: 'Offers',
    href: '#',
  },
];

function Intro() {
  return (
    <div className={s.intro}>
      <Container className={s.container}>
        <h1 className={s.title}>
          AnAi - <br />
          Advanced Blockchain Sercies Providers
        </h1>

        <p className={s.description}>
          We are using advanced technologies <br className={s.break} />
          also create new full node Blockchain.
        </p>

        <div className={s.cta}>
          <LinkLaunchApp className={s.linkLaunchApp} />

          <div className={s.linksWrapper}>
            {links.map(({ text, href }) => (
              <Link className={s.link} variant="link" key={text} href={href}>
                {text}
                <IconArrow className={s.iconArrow} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
