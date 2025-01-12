import cn from 'classnames';
import Container from '../Container/Container';
import LinkLaunchApp from '../Link/LinkLaunchApp';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import s from './MenuMobile.module.css';

const content = [
  {
    href: '#',
    text: 'Services',
  },
  {
    href: '#',
    text: 'Prices',
  },
  {
    href: '#',
    text: 'An-Ai EVM',
  },
];

interface IMenuMobileProps {
  className?: string;
}

const MenuMobile: React.FC<IMenuMobileProps> = ({ className }) => (
  <Container className={cn(s.root, className)}>
    <NavigationLinks
      content={content}
      classNames={{ root: s.headerNavLinksWrapper, link: s.headerLink }}
    />
    <LinkLaunchApp variant="buttonTransparent" className={s.btn} />
  </Container>
);

export default MenuMobile;
