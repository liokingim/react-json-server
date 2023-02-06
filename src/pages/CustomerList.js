import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const CustomerList = () => {
    const [customerDate, customerDateChange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/customers")
        .then((response) => {
            return response.json();
        })
        .then((resp) => {
            customerDateChange(resp);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Customer Listing</h2>
                </div>
                <div className="card-body">
                    <div className="div_btn">
                        <Link to="/customer/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {customerDate &&
                                customerDate.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a className="btn btn-success">Edit</a>
                                            <a className="btn btn-danger">Remove</a>
                                            <a className="btn btn-primary">Detail</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerList;