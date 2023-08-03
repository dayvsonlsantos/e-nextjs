import styles from "../../styles/Layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
