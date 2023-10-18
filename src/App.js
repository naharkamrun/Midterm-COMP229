import React, { useState } from 'react';
import './App.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    const resetFormData = () => {
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });
    };

    return (
        <div className="form-wrapper">
            <h1 className="form-title">New Product</h1>
            <div className="form-container">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input type="text" name="category" value={formData.category} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="text" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className="form-group button-group">
                        <input className="submit-button" type="submit" value="Submit" />
                        <button className="cancel-button" type="button" onClick={resetFormData}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;