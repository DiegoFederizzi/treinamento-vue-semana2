
import { axiosInstance } from '@/core/axios'
import { Wger001Controller } from '../controller/wger001Controller'


import { getAnoRepository } from '../data/repository/getAnoRepository'
import { getMarcaRepository } from '../data/repository/getMarcaRepository'
import { getModeloRepository } from '../data/repository/getModeloRepository'
import { getVeiculoRepository } from '../data/repository/getVeiculoRepository'


import { getAnoUsecase } from '../domain/usecase/getAnoUsecase'
import { getMarcaUsecase } from '../domain/usecase/getMarcaUsecase'
import { getModeloUsecase } from '../domain/usecase/getModeloUsecase'
import { getVeiculoUsecase } from '../domain/usecase/getVeiculoUsecase'
import { getGraficoUsecase } from '../domain/usecase/getGraficoUsecase'

const getAnoRepositoryImpl = getAnoRepository(axiosInstance)
const getAnoUsecaseImpl = getAnoUsecase(getAnoRepositoryImpl)

const getMarcaRepositoryImpl = getMarcaRepository(axiosInstance)
const getMarcaUsecaseImpl = getMarcaUsecase(getMarcaRepositoryImpl)

const getModeloRepositoryImpl = getModeloRepository(axiosInstance)
const getModeloUsecaseImpl = getModeloUsecase(getModeloRepositoryImpl)

const getVeiculoRepositoryImpl = getVeiculoRepository(axiosInstance)
const getVeiculoUsecaseImpl = getVeiculoUsecase(getVeiculoRepositoryImpl)
const getGraficoUsecaseImpl = getGraficoUsecase(getVeiculoRepositoryImpl)


const wger001Controller = (context) =>
	new Wger001Controller(
		context,
		getAnoUsecaseImpl,
		getMarcaUsecaseImpl,
		getModeloUsecaseImpl,
		getVeiculoUsecaseImpl,
		getGraficoUsecaseImpl
	)
export { wger001Controller }
