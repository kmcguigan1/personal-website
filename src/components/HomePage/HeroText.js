import styles from "./HomePage.module.scss";

import HeroIcons from "./HeroIcons";

const HeroText = () => {
	return (
		<div className={styles.textContainer}>
			<h1 className={styles.textHeader}> Welcome!</h1>
			<p className={styles.text}>
				My name is <span className={styles.highlightText}>Kiernan</span> and I'm currently pursuing my{" "}
				<span className={styles.highlightText}>Masters</span> at the{" "} 
				<span className={styles.highlightText}>University of Waterloo</span> in the{" "} 
				<span className={styles.highlightText}>Vision Image Processing Lab</span>. 
				My research focuses on long-range high-resolution spatio temporal forecasting with 
				applications to sea ice concentration in the Canadian Arctic. However, on the side I also
				enjoy working on sports analytics and with novel view sythesis techniques such as NeRF and Gaussian Splatting.
			</p>
			<p className={styles.text}>
				I completed my undergraduate degree in <span className={styles.highlightText}>Software Engineering</span> at the{" "}
				<span className={styles.highlightText}>University of Calgary</span> and I enjoy practicing the skills I learned to
				write readable, flexible, and deployable machine learning code. 
			</p>
			<p className={styles.text}>
				While I predominantly write my code in{" "} <span className={styles.highlightText}>Python</span>
				using tools like{" "} <span className={styles.highlightText}>PyTorch</span> and{" "} 
				<span className={styles.highlightText}>Tensorflow</span>, I still try to spend time to keep up 
				my{" "} <span className={styles.highlightText}>Java</span>,{" "} <span className={styles.highlightText}>C/C++</span>,
				and{" "} <span className={styles.highlightText}>Web Development</span> skills as well.
			</p>
			<p className={styles.text}>
				If you're interested in any of my work check me out on{" "}
				<span className={styles.highlightText}>GitHub</span> or{" "}
				<span className={styles.highlightText}>Kaggle</span>. Alternative feel free to reach out on{" "}
				<span className={styles.highlightText}>LinkedIn</span>, I'm always happy to meet new people in
				the tech space!
			</p>
			{/* <HeroIcons /> */}
		</div>
	);
};

export default HeroText;
