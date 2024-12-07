import styles from "./HomePage.module.scss";

import HeadShot from "./HeadShot";
import HeroText from "./HeroText";
import HeroIcons from "./HeroIcons";

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <section className={styles.heroContent}>
                <HeadShot />
                <HeroText />
            </section>    
            <HeroIcons />
        </section>
    );
};

export default Hero;