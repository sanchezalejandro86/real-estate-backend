import { Module } from '@nestjs/common';
import { ResponsablesController } from './responsables.controller';
import {ResponsableSchema} from "./schemas/responsable.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {ResponsablesService} from "./responsables.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Responsable', schema: ResponsableSchema }])],
  controllers: [ResponsablesController],
  providers: [ResponsablesService]
})
export class ResponsablesModule {}
