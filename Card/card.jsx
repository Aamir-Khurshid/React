import profile from "./assets/Me.jpg"
import style from "./index.module.css"

function Card(){
    return(
        <div className="card">
            <img className={style.card} src= {profile} alt="AAMIR" />
            <h2>Aamir Khurshid</h2>
            <p>I am currently a student.</p>
        </div>
    )
}
export default Card
