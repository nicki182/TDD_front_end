import React from "react";
function Button({usersUpdate}) {
    let input={
        name:String
    }
    const inputref=React.createRef()
    const onSubmit = async (e) => {
        input = inputref.current.value
        const response = await fetch('http://localhost:5001', {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: input})
        })
        const users=await response.json()
        usersUpdate(users)

    }
  return(
      <div>
        <input
            ref={inputref}
            placeholder="search user"
        />
        <button type="submit" className = "search users" onClick={onSubmit}>filter</button>
        </div>
            )
      }
      export default Button