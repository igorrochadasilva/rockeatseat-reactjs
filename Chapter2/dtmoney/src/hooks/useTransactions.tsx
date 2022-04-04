import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps{
    children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //herda todos os campos menos id e createdAt

interface TransactionsContextData{
    transactions: Transaction[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    //get transactions
    useEffect(() => {        
        api.get('/transactions')            
            .then(response => setTransactions(response.data.transactions))                
    }, [])
    
    //create new transaction
    async function createTransaction(transactionInput: TransactionInput){          
        
        //envio para mirage de transaction
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        
        const {transaction} = response.data
        
        //setando novo estado de transactions com nova transaction
        setTransactions([...transactions, transaction])
     }
    
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext) 
    
    return context
}
