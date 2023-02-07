import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerList = () => {
    const [customerDate, customerDateChange] = useState(null);

    const navigate = useNavigate();

    const loadDetail = (id) => {
        navigate('/customer/detail/' + id);
    }

    const loadEdit = (id) => {
        navigate('/customer/edit/' + id);
    }

    const removeItem = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3001/customers/"+id, {
                method: "DELETE",
            })
            .then((response) => {
                alert("Remove Success");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message);
            });
        }
    }

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
                                            <a onClick={() => {loadEdit(item.id)}} className="btn btn-success">Edit</a>
                                            <a onClick={() => {removeItem(item.id)}} className="btn btn-danger">Remove</a>
                                            <a onClick={() => {loadDetail(item.id)}} className="btn btn-primary">Detail</a>
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