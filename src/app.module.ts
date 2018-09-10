import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {MongooseModule} from "@nestjs/mongoose";
import {ResponsablesModule} from "./responsables/responsables.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://mm2backend:MM2BackendTest@localhost:27017/real-estates'),
      ResponsablesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
