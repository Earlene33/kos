import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { KosImageService } from './kos-image.service'

@Controller('kos-image')
export class KosImageController {
  constructor(private service: KosImageService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + extname(file.originalname)
          cb(null, uniqueName)
        },
      }),
    }),
  )
  upload(
  @UploadedFile() file: Express.Multer.File,
  @Body('kos_id') kos_id: string,
) {
  console.log('FILE:', file)
  console.log('KOS_ID:', kos_id)

  if (!file) {
    return {
      error: 'FILE TIDAK TERBACA',
    }
  }

  return {
    kos_id,
    filename: file.filename,
  }
}
}