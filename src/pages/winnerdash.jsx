
import Winner from "../componets/winner"

const winnerdash = () => {
  return (
    <div style={{ display:"flex",gap:"20px" }} >
      <Winner rank ="1" name="Aleena Joseph" score="1000"  />
      <Winner rank ="2" name="Justin Saji" score="500"  />
      <Winner rank ="3" name="Alen Kuriakose " score="100"/>
    </div>
  )
}

export default winnerdash
