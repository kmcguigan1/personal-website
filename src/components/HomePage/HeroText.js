import styles from "./HomePage.module.scss";

const HeroText = () => {
	return (
		<div className={styles.textContainer}>
			<h1 className={styles.textHeader}> Welcome!</h1>
			<p className={styles.text}>
				My name is <span className={styles.highlightText}>Kiernan</span> and I'm currently pursuing my{" "}
				<span className={styles.highlightText}>Masters</span> at the{" "} 
				<span className={styles.highlightText}>University of Waterloo</span> in the{" "} 
				<span className={styles.highlightText}>Vision Image Processing Lab</span>. 
				My research focuses on spatio-temporal deep learning methods with applications to 
				Arctic sea ice forcasting.
			</p>
			<p className={styles.text}>
				I completed my undergraduate degree in <span className={styles.highlightText}>Software Engineering</span> at the{" "}
				<span className={styles.highlightText}>University of Calgary</span> and I enjoy practicing the skills I learned to
				write readable, flexible, and deployable machine learning code. 
			</p>
			<p className={styles.text}>
				While I predominantly code in{" "} <span className={styles.highlightText}>Python</span>{" "} 
				using tools like{" "} <span className={styles.highlightText}>PyTorch</span> and{" "} 
				<span className={styles.highlightText}>Tensorflow</span>, I still try to spend time to keep up 
				my{" "} <span className={styles.highlightText}>Java</span>,{" "} <span className={styles.highlightText}>C/C++</span>,
				and{" "} <span className={styles.highlightText}>Web Development</span> skills as well.
			</p>
		</div>
	);
};

export default HeroText;
