import { useRouter } from "next/router"
import Link from "next/link";

export default function Todo(){
    
    const router = useRouter();

    const todoId = router.query.todoId
    
    return (
        <>
            <h1>Todo {todoId}</h1>
            <ul>
                <li><Link href={`/todos/${todoId}/comments/1`}>Comentário 01</Link></li>
                <li><Link href={`/todos/${todoId}/comments/2`}>Comentário 02</Link></li>
                <li><Link href={`/todos/${todoId}/comments/3`}>Comentário 03</Link></li>
            </ul>
        </>
    )
}