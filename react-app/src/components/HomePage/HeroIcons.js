import styles from "./HomePage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faKaggle } from "@fortawesome/free-brands-svg-icons";

const HeroIcons = () => {
	return (
		<div className={styles.iconsContainer}>
			<a className={styles.iconContainer} href="mailto:kiernan.mcguigan@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
			</a>
			<a className={styles.iconContainer} href="https://www.linkedin.com/in/k-mcguigan/">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
			</a>
			<a className={styles.iconContainer} href="https://github.com/kmcguigan1">
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
			</a>
			<a className={styles.iconContainer} href="https://www.kaggle.com/kiernanmcguigan">
                <FontAwesomeIcon icon={faKaggle} className={styles.icon} />
			</a>
		</div>
	);
};

export default HeroIcons;
