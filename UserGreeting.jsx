//Way 1
function UserGreeting(prs){
if(prs.isLoggedIn){
    return <h2>Welcome {prs.userName}</h2>
  }
  else{
    return <h2>You haven't logged in {prs.userName}</h2>
  }

}
//Way 2

function UserGreetings(prs){

  return  (prs.isLoggedIn ? <h2>Welcome {prs.userName}</h2> : <h2>You haven't logged in {prs.userName}</h2>)
}

export default UserGreeting
