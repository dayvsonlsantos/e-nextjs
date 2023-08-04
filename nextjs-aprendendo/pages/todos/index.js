import styles from '../../styles/Todo.module.css'
import Link from 'next/link'

export default function Todos({ todos }) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul>
                <li><Link href={"/todos/1"}>Acessar Todo 01</Link></li>
                <li><Link href={"/todos/2"}>Acessar Todo 02</Link></li>
                <li><Link href={"/todos/3"}>Acessar Todo 03</Link></li>
            </ul>
        </>
    )
}