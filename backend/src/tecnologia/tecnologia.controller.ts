import { Tecnologia } from '@core'
import { Controller, Get } from '@nestjs/common'
import { TecnologiaPrisma } from './tecnologia.prisma'
@Controller('tecnologias')
export class TecnologiaController {
	constructor(private readonly repo: TecnologiaPrisma) {}

	@Get()
	async obterTodasTecnologias(): Promise<Tecnologia[]> {
		return await this.repo.obterTodas()
	}

	@Get('destaque')
	async obterTecnologiasDestaque(): Promise<Tecnologia[]> {
		return await this.repo.obterPorDestaque()
	}
}
