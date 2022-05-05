const getVeiculoUsecase = (repository) => async (tipoVeiculo, codMarca, codModelo, ano) => {
	try {
		return await repository(tipoVeiculo, codMarca, codModelo, ano)
	} catch (error) {
		throw error
	}
}

export { getVeiculoUsecase }
