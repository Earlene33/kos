import { Test, TestingModule } from '@nestjs/testing'
import { BookingService } from './booking.service'
import { PrismaService } from '../prisma/prisma.service'

describe('BookingService', () => {
  let service: BookingService

  const mockPrisma = {
    booking: {
      findMany: jest.fn().mockResolvedValue([]),
      create: jest.fn(),
      update: jest.fn(),
    },
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile()

    service = module.get<BookingService>(BookingService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})