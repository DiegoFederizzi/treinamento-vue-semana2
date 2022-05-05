<template>
	<v-app>
		<v-main>
			<v-overlay :value="controller.telaBlock"></v-overlay>
			<v-container fluid > <!--class="fill-height"-->
				 <v-row > <!-- justify="center" align="start" -->
					<v-col xl="4" lg="4" md="6" sm="8" cols="12">
						<v-card elevation="5">
							<v-card-title > Filtro Tabela FIPE </v-card-title>
							<v-divider></v-divider>
							<v-card-text>
								<v-row>
									<v-col cols="8">
										<v-select
											color="warning"
											v-model="
												controller.veiculos.tipoVeiculo
											"
											:items="
												controller.veiculos.tipoVeiculos
											"
											label="Tipo de Veículo"
											outlined
											dense
										></v-select>
									</v-col>
									<v-col cols="4">
										<v-btn
											color="warning"
											outlined
											append-icon=""
											@click="controller.getMarcas()"
										>
											<v-icon left>
												mdi-car-estate
											</v-icon>
											<span style="overflow: hidden;">Todas as marcas dos carros do tipo</span>
											
										</v-btn>
									</v-col>
									<v-col cols="8">
										<v-select
											color="warning"
											v-model="controller.veiculos.marca"
											:items="controller.veiculos.marcas"
											item-value="codigo"
											item-text="nome"
											label="Marcas"
											outlined
											dense
										></v-select>
									</v-col>
									<v-col cols="4">
										<v-btn
											color="warning"
											outlined
											append-icon=""
											@click="controller.getModelos()"
										>
											<v-icon left>
												mdi-camera-iris
											</v-icon>
											Modelo
										</v-btn>
									</v-col>
									<v-col cols="8">
										<v-select
											color="warning"
											v-model="controller.veiculos.modelo"
											:items="controller.veiculos.modelos"
											item-value="codigo"
											item-text="nome"
											label="Modelos"
											outlined
											dense
										></v-select>
									</v-col>
									<v-col cols="4">
										<v-btn
											color="warning"
											outlined
											append-icon=""
											@click="controller.getAnos('grafico')"
										>
											<v-icon left>
												mdi-account-cowboy-hat
											</v-icon>
											Anos
										</v-btn>
									</v-col>
									<v-col cols="8">
										<v-select
											color="warning"
											v-model="controller.veiculos.ano"
											:items="controller.veiculos.anos"
											item-value="codigo"
											item-text="nome"
											label="Anos"
											outlined
											dense
										></v-select>
									</v-col>
									<v-col cols="4">
										<v-btn
											color="warning"
											outlined
											append-icon=""
											@click="controller.getVeiculo()"
										>
											<v-icon left>
												mdi-car-turbocharger
											</v-icon>
											Veículo
										</v-btn>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col xl="4" lg="4" md="6" sm="8" cols="12">
						<v-card elevation="5">
							<v-card-title>Veículo</v-card-title>
							<v-divider></v-divider>
							<v-card-text>
								<p>Marca: {{ controller.veiculos.marca }}</p>
								<p>Modelo: {{ controller.veiculos.modelo }}</p>
								<p>Ano: {{ controller.veiculos.ano }}</p>
								<p>
									Veículo: <pre>{{ controller.veiculos.veiculo }}</pre>
								</p>
								
							</v-card-text>
						</v-card>
					</v-col>
					<v-col  xl="4" lg="4" md="6" sm="8" cols="12">
						<v-card elevation="5">
							<v-card-title>Gráfico</v-card-title>
							<v-divider></v-divider>
							<v-card-text id="grafico">
							<pre>
								{{controller.veiculos.grafico_ano_valor}}
							</pre>
							</v-card-text>
						</v-card>
						
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
////https://deividfortuna.github.io/fipe/

import { wger001Controller } from "../di/di";
export default {
	data: (context) => ({
		controller: wger001Controller(context),
	}),
	methods: {
		redimensiona() {
			this.controller.redimensiona();
		},
	},
	mounted() {
		window.addEventListener("resize", this.redimensiona);
	},
	unmounted() {
		window.removeEventListener("resize", this.redimensiona);
	},
};
</script>
<style>
#grafico {
	height: 400px;
}

div[class^="col"] {
	border: 1px solid orange;
}

/*
.v-btn__content {
	white-space: normal;
	flex: auto auto auto;
}
.v-btn {
	min-height: 52px;
}
*/
</style>
