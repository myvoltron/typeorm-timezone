import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private catsRepository: CatsRepository) {}

  async create(createCatDto: CreateCatDto) {
    return this.catsRepository.save(createCatDto);
  }

  async findAll() {
    return this.catsRepository.find();
  }

  async findAllWithDeleted() {
    return this.catsRepository.find({ withDeleted: true });
  }

  async findOne(idx: number) {
    return this.catsRepository.findOne({ where: { idx } });
  }

  async update(idx: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.update({ idx }, updateCatDto);
  }

  async remove(idx: number) {
    return this.catsRepository.delete(idx);
  }

  async softDelete(idx: number) {
    return this.catsRepository.softDelete(idx);
  }

  async restore(idx: number) {
    return this.catsRepository.restore({ idx });
  }
}
