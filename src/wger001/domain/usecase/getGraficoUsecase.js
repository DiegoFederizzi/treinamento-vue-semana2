const getGraficoUsecase = (repository) => async (tipoVeiculo, codMarca, codModelo, anos) => {
	try {
		const anosComValor = await Promise.all(

			anos.map(async (ano) => {

				const ret = await repository(tipoVeiculo, codMarca, codModelo, ano.codigo)

				ano['valorModelo'] = parseFloat(ret.Valor
					.replace('R$ ', '')
					.split('.')
					.join('')
					.replace(',', '.'))
				ano['anoModelo'] = ret.AnoModelo
				return ano
			})
		)

		return anosComValor
	} catch (error) {
		throw error
	}
}

export { getGraficoUsecase }
