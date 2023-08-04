import { useRouter } from "next/router"

// Link do video para entender isso (11min): https://www.youtube.com/watch?v=iWpLD2wTsZ4&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=13

export default function Comment(){
    
    const router = useRouter();
    const todoId = router.query.todoId;
    const commentId = router.query.commentId;
    
    return (
        <>
            <h1>Exibindo Comentário: {commentId}</h1>
            <h2>Do Todo: {todoId}</h2>
        </>
    )
}