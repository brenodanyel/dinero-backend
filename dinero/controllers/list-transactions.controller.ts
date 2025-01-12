import { api } from 'encore.dev/api';
import { prisma } from '../database';
import { Transaction } from '../interfaces/transaction';

export const listTransactions = api(
	{ expose: true, method: 'GET', path: '/transaction' },
	async (): Promise<Transaction[]> => {
		const transactions = await prisma.transacao.findMany();
		console.log({ transactions });
		return transactions.map<Transaction>((transaction) => ({
			no_transacao: transaction.no_transacao,
		}));
	}
);
