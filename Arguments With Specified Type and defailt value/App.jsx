import Student from "./Arguments With Specified Type/student"
function App() {
 return(
  <>
  <Student name="AK Coder" age={21} isStudent={true}/>
  <Student name="AK Noob" age={21} isStudent={false}/>
  <Student/>
  </>
 )
}

export default App
