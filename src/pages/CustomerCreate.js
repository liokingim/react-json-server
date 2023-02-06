import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerCreate = () => {

    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [active, activeChange] = useState(true);
    const [validateion, valChange] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log({id, name, email, phone, active});
        const customerData = {id, name, email, phone, active};

        fetch("http://localhost:3001/customers", {
            method: "POST",
            body: JSON.stringify(customerData),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            alert("Success");
            navigate('/customer/list');
        })
        .catch((err) => {
            console.log(err.message);
        });

    };

    return (
        <div>
            <div className="row">
                <div className="offet-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{"textAlign": "left"}}>
                            <div className="card-title">
                                <h2>Customer Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input className="form-control" value={id} disabled="disabled"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required className="form-control" onMouseDown={e => valChange(true)} value={name} onChange={e => nameChange(e.target.value)}></input>
                                            {name.length == 0 && validateion && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" value={email} onChange={e => emailChange(e.target.value)}></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" value={phone} onChange={e => phoneChange(e.target.value)}></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-inpt" checked={active} onChange={e => activeChange(e.target.checked)}></input>
                                            <label className="form-check-label">Is Action</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/customer/list" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerCreate;