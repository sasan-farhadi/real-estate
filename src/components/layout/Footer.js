import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.desc}>
                <h3> سامانه خرید و اجاره املاک </h3>
                <p>  لورم ایپسوم متن ساختگی ، صنعت چاپ و دانش آموزان و معلمان و درس خواندن بهترین راه است ، یا رفتن به دانشگاه  </p>
            </div>
            <div>
                <ul>
                    <li> تعرفه قانونی </li>
                    <li> دسترسی سریع </li>
                    <li> مشاورین خبره </li>
                    <li> قولنامه محضری </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
