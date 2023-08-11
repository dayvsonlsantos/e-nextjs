import styles from "../styles/Sobre.module.css"
import Image from "next/image"

export default function Sobre(){ 
    return(
        <div className={styles.sobre}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi voluptate voluptates officiis beatae id quidem dolore rerum sint maxime, iste qui. Possimus, cum inventore. Consequatur placeat consectetur pariatur ex.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}