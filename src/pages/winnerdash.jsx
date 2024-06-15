
import Winner from "../componets/winner"

const winnerdash = () => {
  return (
    <div style={{ display:"flex",gap:"20px",flexWrap:"wrap" }} >
      <Winner rank ="1st" name="Aleena Joseph" score="5000"  />
      <Winner rank ="2nd" name="Alen Kuriakose" score="5000"  />
      <Winner rank ="2nd" name="Mariya George " score="4000"/>
         <Winner rank ="3th" name="Deepthi C D" score="4000"/>
      <Winner rank ="4th" name="Justin Saji " score="500"/>
      <Winner rank ="5th" name="Melbin Sabu" score="100"/>

      
    </div>
  )
}

export default winnerdash
