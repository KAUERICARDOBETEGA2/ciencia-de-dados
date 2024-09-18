const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/informacoes-vendas.json'

async function vizualizarInformacoesVendas() {
    const res = await fetch(url)
    const dados = await res.json()
    const totalVendas = (dados.total_vendas / 1e6)
    const vendasAno = (dados.vendas_ano / 1e6)
    const porcentagemCrescimento = ((vendasAno / totalVendas) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o total de vendas é <span>${totalVendas} milhões</span> e que no último ano as vendas foram <span>${vendasAno} milhões</span>? Isso representa um crescimento de aproximadamente <span>${porcentagemCrescimento}%</span>.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesVendas()
