import styles from "./HomePage.module.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <section>
            <div className={styles.imageContainer}>
                <Image
                    src={require("../../public/imgs/Kiernan McGuigan Headshot.jpg").default} 
                    alt={"Picture of Kiernan McGuigan" }
                    className={styles.headshot}
                    layout="fixed"
                    width={300}
                    height={300}
                />
            </div>
            
        </section>
    );
};

export default Hero;