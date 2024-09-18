import { getCSS, tickConfig } from "../common.js"

async function quantidadeVendas() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-vendas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosProdutos = Object.keys(dados)
    const quantidadeDeVendas = Object.values(dados)

    const data = [
        {
            x: nomeDosProdutos, 
            y: quantidadeDeVendas, 
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Vendas por Produto',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Produto',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidade Vendida',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeVendas()
