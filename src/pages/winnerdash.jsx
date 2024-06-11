
import Winner from "../componets/winner"

const winnerdash = () => {
  return (
    <div style={{ display:"flex",gap:"20px",flexWrap:"wrap" }} >
      <Winner rank ="1" name="Aleena Joseph" score="5000"  />
      <Winner rank ="2" name="Deepthi C D" score="4000"  />
      <Winner rank ="2" name="Mariya George " score="4000"/>
      <Winner rank ="3" name="Justin Saji " score="500"/>
      <Winner rank ="4" name="Alen Kuriakose" score="100"/>

      
    </div>
  )
}

export default winnerdash
