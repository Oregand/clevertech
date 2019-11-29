import React, { useState, useEffect } from "react";
import customerService from './services/customerService';
import AddForm from './components/AddForm'

function App() {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    if(!customers) {
      getCustomers();
    }
  })

  const getCustomers = async () => {
    let res = await customerService.getAll();
    console.log(res);
    setCustomers(res);
  }

  const renderCustomer = customer => {
    return (
      <li key={customer.ID} className="list__item customer">
        <h3 className="customer__name">{customer.Name}</h3>
        <p className="customer__description">{customer.Email}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(customers && customers.length > 0) ? (
          customers.map(customer => renderCustomer(customer))
        ) : (
          <p>No customers found</p>
        )}
      </ul>
      <div>
        <AddForm />
      </div>
    </div>
  );
}

export default App;