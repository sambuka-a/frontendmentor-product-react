import { slide as Menu } from 'react-burger-menu';

const nav = ['Men', 'Women', 'About', 'Contact'];

const MainNav = ({ isDesctopOrMobile }) => {
  return (
    <>
      {isDesctopOrMobile ? (
        <Menu>
          {nav.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Menu>
      ) : (
        <nav className="desktop-nav">
          {nav.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </nav>
      )}
    </>
  );
};

export default MainNav;
