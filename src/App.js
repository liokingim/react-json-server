import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/UserList";
import JsonList from "./pages/JsonList";
import CustomerList from "./pages/CustomerList";
import CustomerCreate from "./pages/CustomerCreate";
import CustomerDetail from "./pages/CustomerDetail";
import CustomerEdit from "./pages/CustomerEdit";

function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/counter">Counter</Link> |{" "}
            <Link to="/input">Input</Link> |{" "}
            <Link to="/input2">Input2</Link> |{" "}
            <Link to="/userList">UserList</Link> |{" "}
            <Link to="/jsonList">JsonList</Link> |{" "}
            <Link to="/customer/list">CustomerList</Link> |{" "}
            <Link to="/customer/create">CustomerCreate</Link> |{" "}
        </nav>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/input" element={<Input />}></Route>
            <Route path="/input2" element={<Input2 />}></Route>
            <Route path="/userList" element={<UserList />}></Route>
            <Route path="/jsonList" element={<JsonList />}></Route>
            <Route path="/customer/list" element={<CustomerList />}></Route>
            <Route path="/customer/create" element={<CustomerCreate />}></Route>
            <Route path="/customer/detail/:cusid" element={<CustomerDetail />}></Route>
            <Route path="/customer/edit/:cusid" element={<CustomerEdit />}></Route>
        </Routes>
    </div>
  );
}

export default App;
