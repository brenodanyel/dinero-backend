import { SQLDatabase } from 'encore.dev/storage/sqldb'
import { PrismaClient } from '@prisma/client'

const DB = new SQLDatabase('dinero')

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DB.connectionString,
    },
  },
})

console.log(DB.connectionString)
