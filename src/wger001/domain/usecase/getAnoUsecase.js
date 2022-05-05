const getAnoUsecase = (repository) => async (tipoVeiculo, codMarca, codModelo) => {
	try {
		return await repository(tipoVeiculo, codMarca, codModelo)
	} catch (error) {
		throw error
	}
}

export { getAnoUsecase }
