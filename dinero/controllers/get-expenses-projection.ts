import { api } from 'encore.dev/api'
import { prisma } from '../database'
import { dayjs } from '../../utils/dayjs'

interface GetExpensesProjectionResponse {
  data: {
    month: string
    value: number
  }[]
}

export const getExpensesProjection = api(
  { expose: true, method: 'GET', path: '/expenses/projection' },
  async (): Promise<GetExpensesProjectionResponse> => {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: 'asc' },
    })

    const expensesByMonthMap = new Map<string, number>()

    for (const expense of expenses) {
      for (let i = 0; i < expense.installments; i++) {
        const month = dayjs(expense.date).add(i, 'months').format('MMMM YYYY')
        const value = expensesByMonthMap.get(month) ?? 0
        expensesByMonthMap.set(month, value + expense.value)
      }
    }

    console.log({ expenses, expensesByMonthMap })

    return {
      data: Array.from(expensesByMonthMap).map(([month, value]) => ({ month, value })),
    }
  },
)
