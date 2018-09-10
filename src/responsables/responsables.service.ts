import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {Responsable} from "./interfaces/responsable.interface";
import {CreateResponsableDto} from "./dtos/create-responsable.dto";

@Injectable()
export class ResponsablesService {

    constructor(@InjectModel('Responsable') private readonly responsableModel: Model<Responsable>) {}

    async create(createResponsableDto: CreateResponsableDto): Promise<Responsable> {
        const createdResponsable = new this.responsableModel(createResponsableDto);
        return await createdResponsable.save();
    }

    async findAll(): Promise<Responsable[]> {
        return await this.responsableModel.find().exec();
    }

    async findOne(id: string): Promise<Responsable>  {
        return await this.responsableModel.findById(id).exec();
    }

    async update(id:string, updateResponsableDto: CreateResponsableDto): Promise<Responsable> {
        return await this.responsableModel.findByIdAndUpdate(id, updateResponsableDto).exec();
    }


    async delete(id: string): Promise<any> {
        return await this.responsableModel.findByIdAndDelete(id).exec();
    }
}