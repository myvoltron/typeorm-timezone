import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('withDeleted')
  findAllWithDeleted() {
    return this.catsService.findAllWithDeleted();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  restore(@Param('id') id: string) {
    return this.catsService.restore(+id);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.catsService.softDelete(+id);
  }
}
