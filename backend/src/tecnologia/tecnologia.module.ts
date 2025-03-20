import { Module } from '@nestjs/common'
import { DbModule } from 'src/db/db.module'
import { TecnologiaController } from './tecnologia.controller'
import { TecnologiaPrisma } from './tecnologia.prisma'

@Module({
	providers: [TecnologiaPrisma],
	controllers: [TecnologiaController],
	imports: [DbModule],
})
export class TecnologiaModule {}
