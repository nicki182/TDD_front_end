import React from "react";
import {FILTER_USER} from "./graphql/resolvers";
import {useLazyQuery} from '@apollo/react-hooks'
function Button({usersUpdate}) {
    let input={
        name:String
    }
    const inputref=React.createRef()
        const[filterUser, { loading, error, data }] = useLazyQuery(FILTER_USER);
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            console.error(error);
            return <div>Error!</div>;
        }
        if(data){
            usersUpdate(data.filterUser)
        }
        const onSubmit=(e)=>{
            input = inputref.current.value
            filterUser( {
                variables: { name:input },
                pollInterval: 500,
            })
    }
  return(
      <div>
        <input
            ref={inputref}
            placeholder="search user"
        />
        <button type="submit" onClick={onSubmit} className = "search users">filter</button>
        </div>
            )
      }
      export default Button