import { Test, TestingModule } from '@nestjs/testing';
import { ResponsablesController } from './responsables.controller';

describe('Responsables Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ResponsablesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ResponsablesController = module.get<ResponsablesController>(ResponsablesController);
    expect(controller).toBeDefined();
  });
});
