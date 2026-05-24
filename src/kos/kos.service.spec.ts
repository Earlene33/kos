import { Test, TestingModule } from '@nestjs/testing'
import { KosService } from './kos.service'
import { PrismaService } from '../prisma/prisma.service'

describe('KosService', () => {
  let service: KosService

  const mockPrisma = {
    kos: {
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KosService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile()

    service = module.get<KosService>(KosService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})