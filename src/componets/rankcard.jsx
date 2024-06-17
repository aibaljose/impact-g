
import "./CSS/rankcard.css"
const rankcard = ({rank,name,score,image,pos,level}) => {
    return (
        <div className="rankcard">
            
            <div className="profileicon">
                <div className="roundtag">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{pos}</p>
                </div>

            </div>
            <div className="textcontain">

                <div className="testcover">
                    <div className="text1">
                        <h3>Rank</h3>
                        <p>{rank}</p>
                    </div>
                    <div className="text1">
                        <h3>Score</h3>
                        <p>{score}</p>
                    </div>
                </div>

                <div className="linkedbtn">
                    View Profile
                   
                </div> {level}
            </div>

        </div>
    )
}

export default rankcard
