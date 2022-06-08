import React from "react";

export default function Joke({ setup, punchline }) {
  return (
    <div>
      <ul>
        <li style={{ fontSize: 30 }}>
          <b>{setup}</b>
        </li>
        <li style={{ fontSize: 30 }}>{punchline}</li>
      </ul>
      <hr />
    </div>
  );
}

//----------------------------------------------------

/*normallyy we can reveive props by writing as
function something(props){

  and use in function call as below.
return <h1>{props.name}</h1> or any variable name like props.age or any.


but by array destructring we can use it as 
function test({firstName, lastName}){
  --> in describing props we use the variable name directly with out
  using props, this is called array destructuring.. and we use in function
  call as 
  return
  <h1>{firstName}</h1>  here we didn't mention props word.
} 
} */
