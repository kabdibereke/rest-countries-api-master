import Header from '../Header/Header';
import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';

const Layout = ({ children }:ILayoutProps) => {
	return (
		<>
		<Header />
		<div className={styles.container}>
			{children}
		</div>
		</>
	);
};

export default Layout;