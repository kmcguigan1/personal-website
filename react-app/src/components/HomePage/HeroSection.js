import styles from "./HomePage.module.scss";

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            {/* image container may be useful later on if this is converted to next */}
            <div className={styles.imageContainer}>
                <img
                    src={require("../../assets/imgs/Kiernan McGuigan Headshot.jpg")}
                    alt="Kiernan McGuigan"
                    className={styles.headshot}
                    width="275"
                    height="275"
                />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.textHeader}> Welcome!</h1>
                <p className={styles.text}>
                    My name is <span className={styles.highlightText}>Kiernan</span> and I'm a 
                    fourth year <span className={styles.highlightText}>Software Engineering</span> student
                    at the <span className={styles.highlightText}>University of Calgary</span>.
                    I'm extremely interested in <span className={styles.highlightText}>Machine Learning</span> and <span className={styles.highlightText}>Data Science</span> and
                    learning about the different algorithms that our fueling the rise of <span className={styles.highlightText}>Artificial Intelligence</span>.
                </p>
                <p className={styles.text}>
                    I'm also currently working on my <span className={styles.highlightText}>Web Development</span> skills,
                    learning technologies such as <span className={styles.highlightText}>React</span> and <span className={styles.highlightText}>SCSS</span> which
                    were the technologies used to develop this website. I've also used technologies like <span className={styles.highlightText}>Express</span> and <span className={styles.highlightText}>Mongo DB</span> to
                    design the backend of some simple web applications.
                </p>
                <p className={styles.text}>
                    If you're interested in any of my work check me out on <span className={styles.highlightText}>GitHub</span> or <span className={styles.highlightText}>Kaggle</span>. 
                    Alternative feel free to reach out on <span className={styles.highlightText}>LinkedIn</span>,
                    I'm always happy to talk to other lovers of technology!
                </p>
                <div className={styles.iconsContainer}>
                    <a className={styles.iconContainer}>
                        <img 
                            src={require("../../assets/imgs/email-other.svg").default}
                            alt="Email Me"
                        />
                    </a>
                    <a className={styles.iconContainer}>
                        <img 
                            src={require("../../assets/imgs/linkedin.svg").default}
                            alt="My Linkedin"
                        />
                    </a>
                    <a className={styles.iconContainer}>
                        <img 
                            src={require("../../assets/imgs/github.svg").default}
                            alt="My GitHub"
                        />
                    </a>
                    <a className={styles.iconContainer}>
                        <img 
                            src={require("../../assets/imgs/kaggle-other.svg").default}
                            alt="My Kaggle"
                        />
                    </a>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;