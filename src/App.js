import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';
import {Card} from 'react-strap';

function App() {
  return (
    
    <Card>
    <GlobalProvider>
      <Header/> 
      <div className="container">
        <Balance/>
     <Balancer/>
            <Balancing/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    </Card>
  
  );
}

export default App;
