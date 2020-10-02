import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';
import {Slide} from 'react-reavel';

function App() {
  return (
    
    <GlobalProvider>
      <Header/> 
      <div className="container Column d-flex align-center">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  
  );
}

export default App;
