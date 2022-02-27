import styles from "./HomePage.module.scss";

import HeadShot from "./HeadShot";
import HeroText from "./HeroText";

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <HeadShot />
            <HeroText />
        </section>
    );
};

export default Hero;