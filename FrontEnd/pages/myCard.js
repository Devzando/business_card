import Head from 'next/head'

export default function MyCard() {

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

            <a class="voltar-list btn btn-warning" href="/"><i class="bi bi-arrow-left"></i></a>

            <div class="card text-light">
                <img src="perfil.png" class="card-img-top" alt="Imagem do Perfil" />
                <div>
                    <h5 class="texto-titulo text-center">Informações do Cartão Virtual</h5>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li id="Nome" class="texto-corpo list-group-item p-3">Tomas Braz da Silva</li>
                    <li id="Cargo" class="texto-corpo list-group-item p-3">Desenvolvedor Frontend</li>
                    <li id="Email" class="texto-corpo list-group-item p-3">esquecatudo@gmail.com</li>
                    <li id="Telefone" class="texto-corpo list-group-item p-3">(81) 99999-9999</li>
                </ul>
            </div>
        </div>
    </>
  )
}
