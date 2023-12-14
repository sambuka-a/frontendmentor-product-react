import { slide as Menu } from 'react-burger-menu';

const nav = ['Men', 'Women', 'About', 'Contact'];

const MainNav = ({ isDesctopOrMobile }) => {
  return (
    <>
      {isDesctopOrMobile ? (
        <Menu>
          <ul>
            {nav.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Menu>
      ) : (
        <nav className="desktop-nav">
          <ul>
            {nav.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MainNav;
