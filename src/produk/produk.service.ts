import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService {
  private produks: Produk[] = [];
  private idCounter = 1;

  create(createProdukDto: CreateProdukDto): Produk {
    const produkBaru: Produk = {
      id: this.idCounter++,
      nama: createProdukDto.nama,
      harga: createProdukDto.harga,
      stok: createProdukDto.stok,
    };
    this.produks.push(produkBaru);
    return produkBaru;
  }

  findAll(): Produk[] {
    return this.produks;
  }

  findOne(id: number): Produk {
    const produk = this.produks.find((p) => p.id === id);
    if (!produk) {
      throw new NotFoundException(`Produk dengan id ${id} tidak ditemukan`);
    }
    return produk;
  }

  update(id: number, updateProdukDto: UpdateProdukDto): Produk {
    const produkIndex = this.produks.findIndex((p) => p.id === id);
    if (produkIndex === -1) {
      throw new NotFoundException(`Produk dengan id ${id} tidak ditemukan`);
    }
    
    const produkUpdated = {
      ...this.produks[produkIndex],
      ...updateProdukDto,
    };
    this.produks[produkIndex] = produkUpdated;
    return produkUpdated;
  }

  remove(id: number) {
    const produkIndex = this.produks.findIndex((p) => p.id === id);
    if (produkIndex === -1) {
      throw new NotFoundException(`Produk dengan id ${id} tidak ditemukan`);
    }
    
    this.produks.splice(produkIndex, 1);
    return { pesan: `Produk dengan id ${id} berhasil dihapus` };
  }
}