import { Tecnologia } from '@core'
import { Injectable } from '@nestjs/common'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class TecnologiaPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Tecnologia[]> {
		return await this.prisma.tecnolgia.findMany()
	}

	async obterPorDestaque(): Promise<Tecnologia[]> {
		return await this.prisma.tecnolgia.findMany({
			where: {
				destaque: true,
			},
		})
	}
}
