import React from "react";
import { Abia,Plateau } from "../lib";

class App extends React.Component{



     render(){
     const state = "State Info";
     const val = 55;
    const abiaData =  '<div class="hoverinfo">' +
     "<h6>" +
      state+
     " </h6>" +
     "Total No Of Beneficiaries - " +
     val +
     "" +
     "</div>";
     const anambraData =  '<div class="hoverinfo">' +
     "<h6>" +
      state+
     " </h6>" +
     "Total No Of Beneficiaries - " +
     val +
     "" +
     "</div>";
    
          return(
               <div>
                   <Abia
                   hoverColor="red"
                   hoverBackgroundColor="grey"
                   renderData={abiaData}
                   defaultColor="green"
                   id="kd"
                    />  
                    <Plateau
                   hoverColor="red"
                   hoverBackgroundColor="grey"
                   renderData={anambraData}
                   defaultColor="green"
                   id="ad"
                    />  
               </div>

          );
     }
}

export default App;
