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
               valorFrutas: "R$ 8,00"
            },
            {
                nome: "Batata",
                imagem: batata,
                valorFrutas: "R$ 8,00"
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
                valorFrutas: "R$ 8,00"
            },
            {
                nome: "Pepino",
                imagem: pepino,
                valorFrutas: "R$ 8,00"
            },
            {
                nome: "Abóbora",
                imagem: abobora,
                valorFrutas: "R$ 8,00",
            }
        ],
    },
}

export default cesta