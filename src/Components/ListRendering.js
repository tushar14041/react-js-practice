import React from 'react'
import NameList from './NameList'

function ListRendering() {
    const names = ['Bruce', 'Clark','Diana']
    // const nameList = names.map( name => <h2> {name} </h2>)
    return (
        <div>
            
         <NameList/>          

        </div>
    )
}

export default ListRendering



// normal way to list names
  
            //  {/* <h2> {names[0]} </h2>
            //  <h2> {names[1]} </h2>
            //  <h2> {names[2]} </h2> */}
// using map logic inside the funtion return and returning it directly
            //  {/* {names.map( (name) => <h2> { name } </h2>)} */}
// writing the above logic outside the return funtion and saving result into namelist variable and just returning it from return funtion, this makes code clean and readable.
            //  {/* {nameList} */}