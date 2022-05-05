const getModeloUsecase = (repository) => async (tipoVeiculo, codMarca) => {
	try {
		return await repository(tipoVeiculo, codMarca)
	} catch (error) {
		throw error
	}
}

export { getModeloUsecase }
