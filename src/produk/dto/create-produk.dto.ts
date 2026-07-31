import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";
export class CreateProdukDto {
    @IsString()
    @IsNotEmpty()
    nama!: string;

    @IsNumber()
    @Min(0)
    harga!: number;

    @IsNumber()
    @Min(0)
    stok!: number;
}