
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <h1 className={styles.navbarHeader}>Kiernan McGuigan</h1>
                <a href="#" className={styles.navbarLink}>resume</a>
                {/* <ul className={styles.navbarList}>
                    <li className={styles.navbarLink}>Education</li>
                    <li className={styles.navbarLink}>Experience</li>
                    <li className={styles.navbarLink}>Skills</li>
                    <li className={styles.navbarLink}>Resume</li>
                </ul> */}
            </div>
        </nav>
    );
};

export default Navbar;