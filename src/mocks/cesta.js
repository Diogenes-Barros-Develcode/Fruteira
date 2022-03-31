import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {
    topo: {
        titulo: "Detalhe da Cesta"
    },
    detalhes: {
        tituloSecundario: "Cesta de Verduras",
        logoJennyJackFarm: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda, direto para sua cozinha.",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        tituloItens: "Itens da Cesta",
        listaItens: [
            {
               nome: "Tomate",
               imagem: tomate,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    },
}

export default cesta