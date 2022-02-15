import styles from "./HomePage.module.scss";

const Hero = () => {
    return (
        <section>
            {/* image container may be useful later on if this is converted to next */}
            <div className={styles.imageContainer}>
                <img
                    src={require("../../assets/imgs/Kiernan McGuigan Headshot.jpg")}
                    alt="Kiernan McGuigan"
                    className={styles.headshot}
                    width="300"
                    height="300"
                />
            </div>
            
        </section>
    );
};

export default Hero;