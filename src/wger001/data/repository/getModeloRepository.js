import { Modelo } from "../../domain/model/modelo"

const getModeloRepository = (axios) => async (tipoVeiculo, codMarca) => {
	try {
		const response = await axios.get(`/${tipoVeiculo}/marcas/${codMarca}/modelos`)

		//response?.data?.anos
		return response?.data?.modelos.map((modelo) => new Modelo(modelo)) ?? []

	} catch (error) {
		throw error
	}
}

export { getModeloRepository }

//https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
