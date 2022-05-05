import { Veiculo } from "../../domain/model/veiculo"

const getVeiculoRepository = (axios) => async (tipoVeiculo, codMarca, codModelo, ano) => {
	try {

		const response = await axios.get(`/${tipoVeiculo}/marcas/${codMarca}/modelos/${codModelo}/anos/${ano}`)

		return new Veiculo(response?.data ?? {})
	} catch (error) {
		throw error
	}
}

export { getVeiculoRepository }

//https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3