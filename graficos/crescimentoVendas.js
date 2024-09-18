import { getCSS, tickConfig } from "../common.js"

async function crescimentoVendas() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/crescimento-vendas.json'
    const res = await fetch(url)
    const dados = await res.json()
    
    const anos = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            x: anos,
            y: valores,
            type: 'scatter',
            mode: 'lines+markers',
            line: {
                color: getCSS('--secondary-color'),
                width: 2
            },
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Crescimento de Vendas ao Longo dos Anos',
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
                text: 'Ano',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de Vendas (Milhões)',
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

crescimentoVendas()
