import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CustomerDetail = () => {

    const {cusid} = useParams();
    const [customerData, customerDateChange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/customers/"+cusid)
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
        <div>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2>Customer Detail</h2>
                </div>
                <div className="card-body"></div>
                {customerData &&
                    <div>
                        <h2>The Customer name is : <b>{customerData.name}</b> {customerData.id}</h2>
                        <h3>Customer Detail</h3>
                        <h5>Email is : {customerData.email}</h5>
                        <h5>Phone is : {customerData.phone}</h5>
                        <Link className="btn btn-danger" to="/customer/list">Back to Listing</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default CustomerDetail;