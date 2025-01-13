export interface IExpense {
  id: string
  description: string
  category: string
  date: Date
  installments: number
  value: number
}
