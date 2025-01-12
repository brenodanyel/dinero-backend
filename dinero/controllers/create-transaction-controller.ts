import { api } from 'encore.dev/api';
import { prisma } from '../database';

interface CreateTransationPayload {
	transactionName: string;
	transactionDate: Date;
	transactionValue: number;
}

export const createTransaction = api(
	{ expose: true, method: 'POST', path: '/transaction' },
	async (payload: CreateTransationPayload) => {
		const created = await prisma.transacao.create({
			data: {
				no_transacao: payload.transactionName,
				vl_transacao: payload.transactionValue,
				dt_transacao: payload.transactionDate,
			},
		});

		return created;
	}
);
