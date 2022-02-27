import styles from "./HomePage.module.scss";

const HeadShot = () => {
    return (
        <div className={styles.imageContainer}>
            <img
                src={require("../../assets/imgs/Kiernan McGuigan Headshot.jpg")}
                alt="Kiernan McGuigan"
                className={styles.headshot}
                width="275"
                height="275"
            />
        </div>
    );
};

export default HeadShot;