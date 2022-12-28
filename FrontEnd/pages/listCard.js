import { useState, useEffect } from "react"
import router from 'next/router'
import Head from 'next/head'

import {api} from '../services/api'

export default function ListCard() {
  const [users, setUsers] = useState([])
  
  async function getAllColaboradores(){
    try {
      const response = await api.get('/allcolaborador')
      setUsers(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllColaboradores()
  }, [])

  return (
    <>
        <Head>
            <title>Cartões de Visita</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
        </Head>
        <div class="background-list d-flex justify-content-center align-items-center flex-column">
            <a class="voltar-list btn btn-warning" href="/"><i class="bi bi-arrow-left fs-1"></i></a>
            {users.map(item => (
              <ul key={item.id} class="list-cards">
                  <li><a class="d-flex justify-content-center" href="/myCard" ><img id="qr-code" src="qrcode.png" alt="QrCode" /></a><h1>{item.nome}</h1></li>
              </ul>
            ))}
        </div>
    </>
  )
}
