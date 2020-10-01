import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';
import {browserrouter as router , route , Link , Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
    <GlobalProvider>
      <Header/> 
      <div className="container">
    <Route to='/' excat
        ><Balance/></Route>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    <Switch>
    </Router>
  );
}

export default App;
