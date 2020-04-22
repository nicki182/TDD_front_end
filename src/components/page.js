import React, {useState} from "react";
import Table from "./table";
import Button from './button'
function Page() {
   const [users,setUsers] =useState([{name:'',lastname:'',password:''}])
    return (
      <div>
          <div>
             <Button usersUpdate={setUsers}></Button>
          </div>
          <Table users={users}></Table>
        </div>
    )
}
export default Page