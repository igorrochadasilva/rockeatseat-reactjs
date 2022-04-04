import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal'
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setiIsNewTransactionModalOpen] = useState(false)
    
  function handleOpenNewTransactionModal(){
      setiIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal(){
      setiIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/> 
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}        
      />
      <GlobalStyle/>
    </TransactionProvider>
  );
}

