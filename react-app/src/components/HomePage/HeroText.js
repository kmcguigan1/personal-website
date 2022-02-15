import styles from "./HomePage.module.scss";

import HeroIcons from "./HeroIcons";

const HeroText = () => {
	return (
		<div className={styles.textContainer}>
			<h1 className={styles.textHeader}> Welcome!</h1>
			<p className={styles.text}>
				My name is <span className={styles.highlightText}>Kiernan</span> and I'm a fourth year{" "}
				<span className={styles.highlightText}>Software Engineering</span> student at the{" "}
				<span className={styles.highlightText}>University of Calgary</span>. I'm extremely interested in{" "}
				<span className={styles.highlightText}>Machine Learning</span> and{" "}
				<span className={styles.highlightText}>Data Science</span> and learning about the different algorithms
				that our fueling the rise of <span className={styles.highlightText}>Artificial Intelligence</span>.
			</p>
			<p className={styles.text}>
				I'm also currently working on my <span className={styles.highlightText}>Web Development</span> skills,
				learning technologies such as <span className={styles.highlightText}>React</span> and{" "}
				<span className={styles.highlightText}>SCSS</span> which were the technologies used to develop this
				website. I've also used technologies like <span className={styles.highlightText}>Express</span> and{" "}
				<span className={styles.highlightText}>Mongo DB</span> to design the backend of some simple web
				applications.
			</p>
			<p className={styles.text}>
				If you're interested in any of my work check me out on{" "}
				<span className={styles.highlightText}>GitHub</span> or{" "}
				<span className={styles.highlightText}>Kaggle</span>. Alternative feel free to reach out on{" "}
				<span className={styles.highlightText}>LinkedIn</span>, I'm always happy to talk to other lovers of
				technology!
			</p>
			<HeroIcons />
		</div>
	);
};

export default HeroText;
