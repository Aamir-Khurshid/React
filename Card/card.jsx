import profile from "./assets/Me.jpg"

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src= {profile} alt="AAMIR" />
            <h2>Aamir Khurshid</h2>
            <p>I am currently a student.</p>
        </div>
    )
}
export default Card