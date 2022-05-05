import { Ano } from "../../domain/model/ano"

const getAnoRepository = (axios) => async (tipoVeiculo, codMarca, codModelo) => {
	try {
		const response = await axios.get(`/${tipoVeiculo}/marcas/${codMarca}/modelos/${codModelo}/anos`)

		return response?.data.map((ano) => new Ano(ano)) ?? []
	} catch (error) {
		throw error
	}
}

export { getAnoRepository }

//https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos