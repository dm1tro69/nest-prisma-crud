import { IsBoolean, IsString } from "class-validator";

export class CreateArticleDto {

  @IsString()
  title: string

  @IsString()
  description?: string

  @IsString()
  body: string

  @IsBoolean()
  published: boolean = false
}
