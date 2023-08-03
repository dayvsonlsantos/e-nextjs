import Image from "next/image";
import utils from "../styles/utils.module.css";

export default function Desenvolvedores() {
    return (
        <>
            <h1>Desenvolvedores</h1>
            <Image
                src='/images/profile.jpg'
                alt="Dayvson"
                width={200}
                height={200}
                className={utils.border_radius_circle}
            />

            <p>Me chamo Dayvson Lima, e estou me formando em Análise e Desenvolvimento de Sistemas na Faculdade Senac.</p>
            <span>🔭 Este é meu portifólio que contém a minha história como Desenvolvedor! 🚀🚀</span>
            <span>🌱 No momento estou me especializando em React, TypeScript e NodeJs ✏️💻</span>
            <span>📫 Como entrar em contato: Pode me chamar pelo Linkedin ou E-mail 😉</span>
        </>
    )
}