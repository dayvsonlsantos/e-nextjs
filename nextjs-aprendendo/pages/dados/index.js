import Link from 'next/link';
import styles from '../../styles/Todo.module.css'

export async function getStaticProps(){
    const data = await fetch ('https://jsonplaceholder.typicode.com/todos'); // Pegando os dados

    const dados = await data.json(); //Transformando em Json

    return{
        //Utilizamos essa propriedade p/ mandar os dados
        props: { dados }
    }
}   


export default function Dados({ dados }) {
    return (
        <>
            <h1>Dados do Json:</h1>
            <ul className={styles.todolist}>
                {dados.map((dado) => (
                    <li key={dado.id}><Link href={`/dados/${dado.id}`}>{dado.title}</Link></li>
                ))}
            </ul>
        </>
    )
}