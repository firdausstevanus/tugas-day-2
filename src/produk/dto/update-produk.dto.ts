import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from "class-validator";

export class UpdateProdukDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nama?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    harga?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    stok?: number;
}