import {Body, Controller, Get, Post, Query, Param, Put} from '@nestjs/common';
import {Delete} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {ResponsablesService} from "./responsables.service";
import {Responsable} from "./interfaces/responsable.interface";
import {CreateResponsableDto} from "./dtos/create-responsable.dto";

@Controller('responsables')
export class ResponsablesController {

    constructor(private readonly responsablesService: ResponsablesService) {}

    @Post()
    create(@Body() createResponsableDto:CreateResponsableDto) {
        return this.responsablesService.create(createResponsableDto);
    }

    @Get()
    async findAll(): Promise<Responsable[]> {
        return this.responsablesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.responsablesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateResponsableDto:CreateResponsableDto) {
        return this.responsablesService.update(id, updateResponsableDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.responsablesService.delete(id);
    }

}
