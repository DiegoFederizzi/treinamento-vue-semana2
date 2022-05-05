import { Marca } from "../../domain/model/marca"

const getMarcaRepository = (axios) => async (tipoVeiculo) => {
	try {
		const response = await axios.get(`/${tipoVeiculo}/marcas`)

		return response?.data.map((marca) => new Marca(marca)) ?? []

	} catch (error) {
		throw error
	}
}

export { getMarcaRepository }

//https://parallelum.com.br/fipe/api/v1/carros/marcas
