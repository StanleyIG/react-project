import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  const toggleLogo = useCallback(() => {
    setLogoIndex((state) => Number(!state));
  }, []);

  return (
    <>
      <Logo image={logos[logoIndex]} />
      <SelectUser />
      <Button onClick={toggleLogo}>Сменить лого</Button>
    </>
  );
}

export default Header;

// import { useRef } from 'react';
// import Button from '../Button/Button';
// import SelectUser from '../SelectUser/SelectUser';
// import styles from './Header.module.css';

// const logos = ['/logo.svg', '/vite.svg'];

// function Header() {
// 	const logoIndexRef = useRef(0);
// 	const imgRef = useRef(null);

// 	const toggleLogo = () => {
// 		logoIndexRef.current = logoIndexRef.current === 0 ? 1 : 0;
// 		imgRef.current.src = logos[logoIndexRef.current];
// 	};

// 	return (
// 		<>
// 			<img
// 				ref={imgRef}
// 				className={styles.logo}
// 				src={logos[0]}
// 				alt="Логотип журнала"
// 			/>
// 			<SelectUser />
// 			<Button onClick={toggleLogo}>Сменить лого</Button>
// 		</>
// 	);
// }

// export default Header;
