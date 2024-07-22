
import Winner from "../componets/winner"
import Rankcard from "../componets/rankcard"
import Multicard from "../componets/multicard"

const winnerdash = () => {
  return (
    
    <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px",marginTop:"150px" }} >
      {/* <Winner rank ="1st" name="Aleena Joseph" score="5000"  />
      <Winner rank ="2nd" name="Alen Kuriakose" score="5000"  />
      <Winner rank ="2nd" name="Mariya George " score="4000"/>
      <Winner rank ="3th" name="Deepthi C D" score="4000"/>
      <Winner rank ="4th" name="Justin Saji " score="500"/>
      <Winner rank ="5th" name="Melbin Sabu" score="100"/> */}
      <Rankcard rank ="1st" name="Alen Kuriakose" score="8000" image ="https://media.licdn.com/dms/image/D4D03AQETt-C5YW0C5w/profile-displayphoto-shrink_100_100/0/1692976095541?e=1724284800&v=beta&t=U7ganyYk0GE6RysX6_ACbGCsbcc7fXit7Gr1lv60Qrc" pos="Team member" />
      <Rankcard rank ="2nd" name="Mariya George" score="8000" image ="https://media.licdn.com/dms/image/D5603AQFM0jte9Hh8AQ/profile-displayphoto-shrink_100_100/0/1715512997096?e=1724284800&v=beta&t=0GNB8fDdA_mHzdqlc1nKQPSD3KEF8A33Abni9yfgS98" pos="Team member" />
      <Rankcard rank ="3rd" name="Aleena Joseph" score="8000" image ="https://media.licdn.com/dms/image/D5603AQH8NbO04QICFA/profile-displayphoto-shrink_100_100/0/1714195552129?e=1724284800&v=beta&t=8ysBeOO41Slq0pPj6sHwDLOlStcyPDoeR9NnJ7oucdU" pos="Team member" level="" />
      <Rankcard rank ="4th" name="Dennis Jacob" score="8000" image ="https://media.licdn.com/dms/image/D5603AQFg3Vqp62I83A/profile-displayphoto-shrink_100_100/0/1706941601934?e=1724284800&v=beta&t=UUbEX0cvvZxVKda0zr-5jBM61VzXOT01nZ0revPG4sI" pos="Team Lead" />
      <Rankcard rank ="5th" name="Deepthi C D" score="8000" image ="https://media.licdn.com/dms/image/D4D03AQGQ5kC6W20amA/profile-displayphoto-shrink_100_100/0/1718542738634?e=1724284800&v=beta&t=3Af8TIvQBjKNsKf37Qhk8JCqXLSdCGY9DNsR75p9I7I" pos="Team member" />
      <Rankcard rank ="6th" name="Aibal Jacob Mani" score="8000" image ="https://media.licdn.com/dms/image/D5603AQHWfVv0L0Ff0g/profile-displayphoto-shrink_100_100/0/1718641207838?e=1724284800&v=beta&t=EP4XR13zBBxjlLVoNSFR6moZHdhak54xeiCJ7m7nvfA" pos="Team member" />
      <Rankcard rank ="7th" name="Abin Thomaas" score="7000" image ="https://media.licdn.com/dms/image/D5603AQGElTloTUNssw/profile-displayphoto-shrink_100_100/0/1697642503577?e=1724284800&v=beta&t=8xuL37HmEwYJ7je4dBm5W7_2WPUIjvQC2wHe6lRSoJw" pos="Team member" />
      <Rankcard rank ="8th" name="Justin Saji" score="4000" image ="https://media.licdn.com/dms/image/D4D03AQGT2T6GRsj-cQ/profile-displayphoto-shrink_100_100/0/1700760823781?e=1724284800&v=beta&t=ms5B5Db8UOAcE0lT7_JLmASuddNSINQ2_FMiAfzoEBw" pos="Team member"  />
      <Rankcard rank ="9th" name="Melbin Sabu" score="4000" image ="https://media.licdn.com/dms/image/D4D03AQFg_Ssdb_-sVw/profile-displayphoto-shrink_100_100/0/1718708136548?e=1724284800&v=beta&t=YiX77sHtJllWNYRmz96cEmMk6VSnsyVimYtOyaiWLqU" pos="Team member" />
      
      
      <Rankcard rank ="10th" name="Solaman M J" score="4000" image ="https://bluesignal.com/wp-content/uploads/2017/07/user_profile_demo-768x768.png" pos="Team member" />
<Multicard>

</Multicard>
      
    </div>
  )
}

export default winnerdash
