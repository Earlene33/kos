import { Test, TestingModule } from '@nestjs/testing'
import { ReviewService } from './review.service'
import { PrismaService } from '../prisma/prisma.service'

describe('ReviewService', () => {
  let service: ReviewService

  const mockPrisma = {
    review: {
      findMany: jest.fn().mockResolvedValue([]),
      create: jest.fn(),
    },
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile()

    service = module.get<ReviewService>(ReviewService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})