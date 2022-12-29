import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { api } from '../services/api'

export default function MyCard() {
    const [user, setUser] = useState([])
    const router = useRouter()
    
    
    async function getColaborador(){
        
        try {
            const {id} = router.query
            console.log(id)
            const response = await api.get(`/getcolaborador/${id}`)
            setUser([response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getColaborador()
    }, [])

  return (
    <>
        <Head>
            <title>Meu Cartão</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
        </Head>
        <div class="backgroundMyCard d-flex justify-content-center align-items-center flex-column">

            <a class="voltar-list btn btn-warning" href="/"><i class="bi bi-arrow-left fs-1"></i></a>

            <div class="card text-light">
                <img src="perfil.png" class="card-img-top" alt="Imagem do Perfil" />
                <div class="card-body">
                    <h5 class="texto-titulo text-center">Informações do Cartão Virtual</h5>
                </div>
                {user.map(item => (
                    <ul key={item.id} class="list-group list-group-flush text-center">
                        <li id="Nome" class="texto-corpo list-group-item p-3 fs-4">{item.nome}</li>
                        <li id="Cargo" class="texto-corpo list-group-item p-3 fs-4">{item.cargo}</li>
                        <li id="Email" class="texto-corpo list-group-item p-3 fs-4">{item.email}</li>
                        <li id="Telefone" class="texto-corpo list-group-item p-3 fs-4">{item.telefone}</li>
                    </ul>
                ))}
            </div>
        </div>
    </>
  )
}
