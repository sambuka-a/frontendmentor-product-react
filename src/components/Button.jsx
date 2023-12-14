import plusImage from '../assets/icon-plus.svg';
import minusImage from '../assets/icon-minus.svg';

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={type === 'count' ? 'count-btn' : 'add-btn'}>
      {children}
    </button>
  );
};

export default Button;
