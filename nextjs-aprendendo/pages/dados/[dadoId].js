import Link from "next/link";
import utils from "../../styles/utils.module.css";

export async function getStaticProps(context) { //Esse context serve para criarmos os paths

    //Entra nos disponíveis 

    const { params } = context //Desestruturação de conext, pegando o params

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.dadoId}`,
    )

    const dado = await data.json();

    return {
        props: { dado },
    }
}

export async function getStaticPaths() {

    //Busca o que tem disponível

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    //Retornar Ids como Paths
    const paths = data.map((dado) => {
        return {
            params: {
                dadoId: `${dado.id}`
            }
        }
    })

    return { paths, fallback: false }
    //fallback false, renderiza tudo no backend (no momento do build)
    //Se caso algo for adicionado, precisará fazer um rebuild no projeto,
    //pois aquilo adicionado, não estará mapeado.
    // Já o true, recarrega a página sempre que acessa-la;
}

export default function Dado({ dado }) {
    return (
        <>
        <h1>Exibindo o dado: {dado.id}</h1>
        <h3>Texto: {dado.title}</h3>
        <Link className={utils.margin_1rem} href={"/dados"}>Voltar a todos os Dados</Link>
        </>
    )
}