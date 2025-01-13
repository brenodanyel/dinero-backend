import { api } from 'encore.dev/api'
import { prisma } from '../database'
import { IExpense } from '../interfaces/expense'

interface GetExpensesResponse {
  data: IExpense[]
}

export const getExpenses = api(
  { expose: true, method: 'GET', path: '/expenses' },
  async (): Promise<GetExpensesResponse> => {
    const result = await prisma.expense.findMany({
      orderBy: {
        date: 'desc',
      },
    })

    return {
      data: result,
    }
  },
)
