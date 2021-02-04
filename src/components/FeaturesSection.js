import React, {useState, useEffect} from "react";
import Section from "./Section";

import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";


import { Button } from 'react-bootstrap';
import "./FeaturesSection.scss";

import firebase from "firebase/app";
import '@firebase/firestore';



import { useCookies } from "react-cookie";



function FeaturesSection(props) {
  var randomIndex1 = randomNumber(1, 42, -1);
  var randomIndex2 = randomNumber(1, 42, randomIndex1)

  const[cookie, setCookie] = useCookies(["user"]);

  function handleCookie() {
    let cook = Math.floor(Math.random() * (100000000 - 1)) + 1
    setCookie("user", cook, {
      path:"/"
    });

  }

  var [showdata, setShowData] = useState(true)

  
  const [tencount, tenCountChange] = useState(0);

 

  var [allResultsVal, setAllResultsVal] = useState([])
  var [RevResultsVal, setRevResultsVal] = useState([])
  const [set, toBeSet] = useState([])
  const [noLoad, noLoadSet] = useState(false)

  
  

  function randomNumber(max , min, except) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return (num === except) ? randomNumber(max, min, except) : num;
  }

  function wrapper(value, setValue){
    //invokes both count and setToSend at the same time
    //doing both inline was impossible with functional components
    Count(value)
    setToSend(setValue)
  }

  function resetSET(){
    //resets the set value and tencount outside of the count function
    //i kept getting off by one errors within the Count function
    if(tencount === 10){
      toBeSet([])
      tenCountChange(0)
      if(showdata === false) {
        setShowData(true)
      }
    }
  }
  //invokes resetSET() before the count function can run again on click
  resetSET()

  function Count(value) {
   


    if(value < 10) {
      if(value + 1 === 11) {
        tenCountChange(1)
        toBeSet([])
      }
        tenCountChange(value + 1)
      // newGroups()
    } else if (value === 10) {
        tenCountChange(1)
        toBeSet([])
        // newGroups()
        //do something else 
    }
    
  }
  randomIndex1 = randomNumber(1, 42, -1);
  randomIndex2 = randomNumber(1, 42, randomIndex1)
 
  const categories = {
    1: "Doctors",
    2: "Nurses",
    3: "Hospital Admin Staff",
    4: "Hospital Cleaners",
    5: "Childcare providers",
    6: "Teachers",
    7: "Mental Health Professionals",
    8: "Post Office Workers",
    9: "Law enforcement",
    10: "Firemen/Women",
    11: "EMTs",
    12: "White collar workers",
    13: "Elderly",
    14: "Prisoners",
    15: "Grocery Store Workers",
    16: "Food Manufacturer Employees",
    17: "Journalists",
    18: "Politicians",
    19: "Construction Workers",
    20: "Hollywood Actors",
    21: "Black Community",
    22: "Latino Community",
    23: "Native American Community",
    24: "Asian Community",
    25: "White Community",
    26: "Ride Share Drivers",
    27: "Covid19 Deniers",
    28: "Factory Workers",
    29: "Restaurant Workers",
    30: "Public Transit Workers",
    31: "Religious Leaders",
    32: "People making below $50,000",
    33: "People making above $250,000",
    34: "Military personnel",
    35: "Airline Pilots and Flight Attendants",
    36: "Food Delivery Drivers",
    37: "Retail Store Staff",
    38: "Infrastructure Workers",
    39: "Judges",
    40: "Air Traffic Controllers",
    41: "Medical Equipment Manufacturing Workers",
    42: "Professional Athletes",
  }
  //when to push data to the database,
  //if 10 submissions are reached push to database
  //if a timeout limit is reached push to database
  
  var thisTimeout = setTimeout(function() {
    if(set.length > 0 ){
        timedPush()
        
        toBeSet([])
    } else {
      return console.log('waiting')
    }
    
    
    done = false;
  },1)
  
  // if((tencount == 10) || !done) {
  //   //resolverFunction();
  // }
 

  // function timedPush() {
  //   var sendingDocs = []
  //   var index = 0
  //   set.forEach(element => {
  //       let text = "comp" + Object.key(element)
  //       sendingDocs.push(element)
  //   });
  //   //index = 0
  //   // connection to firebase code
  //   const firebaseConfig = { 
  //     apiKey: process.env.REACT_APP_API_KEY,
  //     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
  //     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //     appId: process.env.REACT_APP_API_ID,
  
  //   }
  //   if(!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   } else {
  //     firebase.app()
  //   }
  //   // connections to firebase code 
    
  
   
  // }




  function setToSend(value) {
    
    set.push(value)
    

  }

  function timedPush() {
    var sentSet = {}
    

    const firebaseConfig = { 
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_API_ID,
  
    }
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app()
    }
    const db = firebase.firestore();
    set.forEach(element => {
     sentSet.comp = element
     db.collection('submissions').add({
      sentSet,
      unique: cookie._ga,
      timestamp: firebase.firestore.Timestamp.now(),
     }).catch((error) => {
       console.log(error)
     })
    });
    
    




    
    
  }

  
  useEffect(() => {
    randomIndex1 = randomNumber(1, 42, -1);
    randomIndex2 = randomNumber(1, 42, randomIndex1)
    handleCookie()
    // console.log(cookie)
    toBeSet([])
    // console.log(set)
    const firebaseConfig = { 
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,

  }
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app()
  }

 
  var topRankings = []
  var topRankings2 = []
  var bottomRankings = []
  // var bottomRankings2 = []
  // var topResults = []
  // var bottomResults = []
  var allComparison = []
  var allResults = []
  var revResults = []
  // var ReceivedData= 0
  // var comparison = []

    const db = firebase.firestore();
    
    
    const data3 = db.collection('submissions')
    if(showdata === true) {
    const getAndCreateData = () => {
      data3.get().then((QS) => {
      
        const tempDoc = QS.docs.map((doc) =>{
          topRankings.push({type: doc.data().sentSet.comp["0"], value: 1})
          bottomRankings.push({type: doc.data().sentSet.comp["1"], value: 1})
          

         
          return 
        })
  
        topRankings.forEach((element) => {
          allComparison.push(element)
        })
        bottomRankings.forEach((element) =>{
          allComparison.push(element)
        })
        

        topRankings.forEach(function(e) {
          if(!this[e.type]) {
            this[e.type] = {type: e.type, value: 0}
            topRankings2.push(this[e.type])
          }
          this[e.type].value += e.value;
        }, Object.create(null))



        allComparison.forEach(function(e) {
          if(!this[e.type]) {
            this[e.type] = {type: e.type, value:0}
            allResults.push(this[e.type])
          }
          this[e.type].value += e.value;
        }, Object.create(null))




        allResults.forEach(function(e) {
 
          for(let i = 0; i < topRankings2.length; i++){
        
            if(e.type === topRankings2[i].type){
              
           
              e.percentage = parseInt(((topRankings2[i].value)/parseFloat(e.value)*100).toFixed(2))
              i++
            } else {
              
            }
        
          }

          for(let j = 0; j < allResults.length; j++){
            if(e.percentage === undefined) {
              e.percentage = 0;
            }
          }


        })

        
   
  
  
  
  

        
  
     
  
          //set revResults to a new array with parse and stringify so that I can have two seperate sorted arrays
           revResults = JSON.parse(JSON.stringify(allResults))
           revResults.sort((a, b) => ((a.percentage < b.percentage) ? -1 : (a.value > b.value) ? 1 : 0))
           allResults.sort((a, b) => ((a.percentage > b.percentage) ? -1 : (a.value > b.value) ? 1 : 0))


           
        
    

          allResultsVal.push(allResults)
          RevResultsVal.push(revResults)
           

           setAllResultsVal([...allResultsVal])
           setRevResultsVal([...RevResultsVal])
   
           noLoadSet(true)
           

  
      })
 

    }
    getAndCreateData()

  }
  },[showdata])
  //when showdata is reached it rerenders. it should not rerender again unless they reload the page.
  

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
     
    >
      
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Container className="no-gutters overflow-hidden" 
          style={{
            display: "flex",
            justifyContent: "center",
            height: "230px",
          }}
          >
            <div  style={{
                  display: "column",
                  alignItems: "column",
                  justifyContent: "column",

                  height: "210px",
             }} >
               <div>
            <div 
               style={{
                display: "flex",
                justifyContent: "center",
                
              }}>
            <div xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
               
                  height: "210px",
             }} >
              <div className="FeaturesSection__item has-text-centered" >
      
              <a style={{
                    display: "block",
                    width: "250px",
                    height: "100px",
                    background: "#007bff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    lineHeight: "25px",
                  
              }} className="d-none d-md-block" onClick={() =>  wrapper(tencount, [randomIndex1, randomIndex2] ) }>
                {categories[randomIndex1]}</a>
                <Button onClick={() => wrapper(tencount, [randomIndex1, randomIndex2] ) } className=" d-lg-none d-xl-none d-md-none" >{categories[randomIndex1]} </Button>
              </div>
             <div xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  marginTop: "25%",
                  height: "200px",
             }} >or</div>
          
            </div>
            <div xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
               
                  height: "200px",
             }} >
              <div className="FeaturesSection__item has-text-centered" >
              <a style={{
                    display: "block",
                    width: "250px",
                    height: "100px",
                    background: "#007bff",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    lineHeight: "25px",
                    
              }}
              
              className="d-none d-md-block"  onClick={() => wrapper(tencount, [randomIndex2, randomIndex1] ) }>
                {categories[randomIndex2]}</a>
                <Button className="d-lg-none d-xl-none d-md-none" onClick={() => wrapper(tencount, [randomIndex2, randomIndex1] ) } >{categories[randomIndex2]} </Button>
             
              </div>
            </div>
            </div>
            <div xs={12}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "20px",
             }} >{tencount} / 10</div>
            </div>
            
            </div>
          </Container>
        </Card>
      </Container >
      <div style={{
                  height: "50px",
             }}></div>
   
      
      <Container className={showdata == false ? "d-none" : ""} >
       
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <h2 style={{paddingLeft: "10px"}} >Top Results</h2>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
            <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?"
              data-size="large"
              style={{marginRight: "20px"}}>
            Tweet</a>

            <iframe className="d-none d-md-block" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.whoshouldgetit.com&layout=button_count&size=large&width=88&height=28&appId"  style={{border:"none",
            overflow:"hidden",
            width: "110px", height:"28px"
            }} scrolling={"no"} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <iframe className="d-lg-none d-xl-none d-md-none" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.whoshouldgetit.com&layout=button_count&size=small&width=88&height=28&appId"  style={{border:"none",
            overflow:"hidden",
            width: "110px", height:"28px"
            }} scrolling={"no"} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      </div>
             <table class="table">
              <thead>
              {/* <th scope="col">Position</th> */}
              <th scope="col">Type</th>
              <th scope="col" className="d-none d-md-block" >Percentage Picked Over Others</th>
              <th scope="col" className="d-lg-none d-xl-none d-md-none" >Percentage</th>
              <th scope="col"># appearances</th>
              </thead>
              <tbody>
                  {noLoad == false ? "Loading..." : allResultsVal["0"].map((item, i) => (
                    <tr className={i < 8 ? "" :"d-none"} key={i}  >
                    {/* <td className={i < 8 ? "" :"d-none"} >{i + 1}</td> */}
                     <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : categories[item.type]}</td>
                    <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : item.percentage +"%"}</td>
                    <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : item.value}</td>
                    </tr>
                  )
                  )}
              </tbody>
             </table>
      </Container>
      <Container className={showdata == false ? "d-none" : ""}  >
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <h2 style={{paddingLeft: "10px"}} >Bottom Results</h2>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
            <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?"
              data-size="large"
              style={{marginRight: "20px"}}>
            Tweet</a>

            <iframe className="d-none d-md-block" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.whoshouldgetit.com&layout=button_count&size=large&width=88&height=28&appId"  style={{border:"none",
            overflow:"hidden",
            width: "110px", height:"28px"
            }} scrolling={"no"} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <iframe className="d-lg-none d-xl-none d-md-none" src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.whoshouldgetit.com&layout=button_count&size=small&width=88&height=28&appId"  style={{border:"none",
            overflow:"hidden",
            width: "110px", height:"28px"
            }} scrolling={"no"} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      </div>
             <table class="table">
              <thead>
              {/* <th scope="col">Position</th> */}
              <th scope="col">Type</th>
              <th scope="col" className="d-none d-md-block" >Percentage Picked Over Others</th>
              <th scope="col" className="d-lg-none d-xl-none d-md-none" >Percentage</th>
              <th scope="col"># appearances</th>
              </thead>
              <tbody>
                  {noLoad == false ? "Loading..." : RevResultsVal["0"].map((item, i) => (
                    
                    <tr className={i < 8 ? "" :"d-none"} key={i}  >
                    {/* <td className={i < 8 ? "" :"d-none"} >{i + 1}</td> */}
                     <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : categories[item.type]}</td>
                    <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : item.percentage+"%"}</td>
                    <td className={i < 8 ? "" :"d-none"} >{noLoad == false ? "undefined" : item.value}</td>
                    </tr>
                  )
                  )}
                  
                
            
              </tbody>
             </table>
             <div style={{padding: "20px"}}>*data updates on the screen after the first 10 submissions.</div>
             <div style={{padding: "20px"}}>Questions or feedback? Email us at whoshouldgetitfirst@gmail.com</div>
      </Container>
     
    </Section>
  );
}

export default FeaturesSection;


