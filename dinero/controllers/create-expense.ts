import { api, APIError } from 'encore.dev/api'
import { prisma } from '../database'
import { Min, MinLen, MaxLen } from 'encore.dev/validate'
import { IExpense } from '../interfaces/expense'

interface CreateTransationPayload {
  description: string & MinLen<1> & MaxLen<255>
  category: string & MinLen<1> & MaxLen<255>
  date: Date
  installments: number & Min<1>
  value: number & Min<0>
}

interface CreateExpenseResponse {
  data: IExpense
}

export const createExpense = api(
  { expose: true, method: 'POST', path: '/expenses' },
  async (payload: CreateTransationPayload): Promise<CreateExpenseResponse> => {
    const result = await prisma.expense.create({
      data: {
        description: payload.description,
        category: payload.category,
        date: payload.date,
        installments: payload.installments,
        value: payload.value,
      },
    })

    return {
      data: result,
    }
  },
)
