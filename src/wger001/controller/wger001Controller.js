import { snackbar } from 'cids-cgi/lib/util'
import * as echarts from 'echarts';

class Wger001Controller {


	telaBlock = false
	myChart = null

	veiculos = {
		tipoVeiculos: ["carros", "motos", "caminhoes"],
		tipoVeiculo: "carros",
		marcas: [],
		marca: "",
		modelos: [],
		modelo: "",
		anos: [],
		ano: "",
		veiculo: {},
		grafico_ano_valor: [],
	}


	constructor(context, getAnoUsecase, getMarcaUsecase, getModeloUsecase, getVeiculoUsecase, getGraficoUsecase) {
		this.context = context
		this.getAnoUsecase = getAnoUsecase
		this.getMarcaUsecase = getMarcaUsecase
		this.getModeloUsecase = getModeloUsecase
		this.getVeiculoUsecase = getVeiculoUsecase
		this.getGraficoUsecase = getGraficoUsecase
	}

	async getMarcas() {

		try {
			this.telaBlock = true;
			this.veiculos.marcas = await this.getMarcaUsecase(this.veiculos.tipoVeiculo)
			this.veiculos.marca = this.veiculos.marcas[0].codigo || ""
		} catch (error) {
			snackbar.show({ message: error.toString() })
		} finally {
			this.telaBlock = false;
		}
	}

	async getModelos() {

		try {
			this.telaBlock = true;
			this.veiculos.modelos = await this.getModeloUsecase(this.veiculos.tipoVeiculo, this.veiculos.marca)
			this.veiculos.modelo = this.veiculos.modelos[0].codigo || ""
		} catch (error) {
			snackbar.show({ message: error.toString() })
		}
		finally {
			this.telaBlock = false;
		}


	}

	async getAnos(elemenGrafico) {

		try {
			this.telaBlock = true;
			this.veiculos.anos = await this.getAnoUsecase(this.veiculos.tipoVeiculo, this.veiculos.marca, this.veiculos.modelo)
			this.veiculos.ano = this.veiculos.anos[0].codigo || ""

			await this.getGrafico()
			this.criaGrafico(elemenGrafico)
		} catch (error) {
			snackbar.show({ message: error.toString() })
		}
		finally {
			this.telaBlock = false;
		}


	}

	async getVeiculo() {

		try {
			this.telaBlock = true;
			this.veiculos.veiculo = await this.getVeiculoUsecase(this.veiculos.tipoVeiculo, this.veiculos.marca, this.veiculos.modelo, this.veiculos.ano) || {}

		} catch (error) {
			snackbar.show({ message: error.toString() })
		}
		finally {
			this.telaBlock = false;
		}


	}

	async getGrafico() {

		try {
			this.veiculos.grafico_ano_valor = await this.getGraficoUsecase(this.veiculos.tipoVeiculo, this.veiculos.marca, this.veiculos.modelo, this.veiculos.anos) || {}
		} catch (error) {
			snackbar.show({ message: error.toString() })
		}
		finally {
			this.telaBlock = false;
		}


	}

	criaGrafico(elemenGrafico) {

		const element = document.getElementById(elemenGrafico)
		if (!element)
			return


		if (!this.myChart)
			this.myChart = echarts.init(element);


		// Draw the chart
		this.myChart.setOption({


			title: {
				text: 'Modelo Ano X Valor'
			},
			tooltip: {},
			xAxis: {
				//data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
				data: this.veiculos.grafico_ano_valor.map((v) => v.anoModelo)

			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: function (value) {
						return value
							.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})
							.replace('R$ ', '')
					},
				},
			},
			series: [
				{
					name: 'Preço',
					type: 'bar',
					//data: [5, 20, 36, 10, 10, 20]
					data: this.veiculos.grafico_ano_valor.map((v) => v.valorModelo)

				}
			]
		});
	}

	redimensiona() {

		if (this.myChart) {
			console.log(window.innerWidth)

			this.myChart.resize();
		}
	}

}

export { Wger001Controller }
