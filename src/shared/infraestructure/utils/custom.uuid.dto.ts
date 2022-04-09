import { IsUUID, IsNotEmpty } from 'class-validator';

export class CustomUUIDDTO {
    // @ApiProperty()
    @IsUUID('4')
    @IsNotEmpty()
    id: string;
}
