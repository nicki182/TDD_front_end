import React, { Component } from 'react';
import * as BootStrap from 'react-bootstrap'
function Table ({users}) {
const rendeUsers=(data,index)=> {
    return (
        <tr key={index}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
        </tr>
    )
}
if({users}==null){
    window.location.href='/PAGE'
}
    return(
        <div>
        <BootStrap.Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {users.map(rendeUsers)}
            </tbody>
        </BootStrap.Table>
            </div>
    )

}

export default Table;