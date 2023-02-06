import React from "react";
import {useNavigate } from "react-router-dom";

const JsonList = () => {

    const navigate = useNavigate();

    const getData = () => {
        fetch("http://localhost:3001/customers")
        .then((response) => response.json())
        .then((json) => {
            const h = [];
            for (const customer of json) {
                h.push(`<tr>`);
                h.push(`<td>${customer.name}</td>`);
                h.push(`<td>${customer.company}</td>`);
                h.push(`<td>${customer.email}</td>`);
                h.push(`<td>${customer.phone}</td>`);
                h.push(`<td>${customer.address}</td>`);
                h.push(`</tr>`);
            }

            document.getElementById("tb_body").innerHTML = h.join("");
        });
    }

    const putData = () => {
        const new_customer = {
            "name": "Jane Doe 2",
            "company": "The Create",
            "email": "Jane@strozen.com",
            "phone": "(932) 432-2421",
            "address": "제주도 2"
          }

        fetch("http://localhost:3001/customers/TlThNu3", {
            method: "PUT",
            body: JSON.stringify(new_customer),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
        .then((json) => console.log(json));
    }

    const deleteData = () => {
        fetch("http://localhost:3001/customers/uOk9KFr", {
            method: "DELETE"
        }).then((response) => response.json())
        .then((json) => {
            console.log(json);
            window.location.href = "http://localhost:3000/jsonList";
        });
    }

    const postData = () => {
        const new_customer = {
            "name": "John Doe",
            "company": "The Create",
            "email": "John@strozen.com",
            "phone": "(931) 432-2421",
            "address": "제주도"
        }

        fetch("http://localhost:3001/customers", {
            method: "POST",
            body: JSON.stringify(new_customer),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => response.json())
        .then((json) => {
            console.log(json);
            // window.location.reload();
            //window.location.href = "http://localhost:3000/jsonList";
            navigate.push("/jsonList");
        });
    }

    return (
        <div>
            <button onClick={getData}>조회</button>
            <button onClick={postData}>생성</button>
            <button onClick={putData}>수정</button>
            <button onClick={deleteData}>삭제</button>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody id="tb_body"></tbody>
            </table>
        </div>
    )
}

export default JsonList;