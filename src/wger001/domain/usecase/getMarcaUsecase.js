const getMarcaUsecase = (repository) => async (tipoVeiculo) => {
	try {
		return await repository(tipoVeiculo)
	} catch (error) {
		throw error
	}
}

export { getMarcaUsecase }
