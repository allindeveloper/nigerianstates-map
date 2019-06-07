import React from "react";
import { Abia,Adamawa } from "../lib";

class App extends React.Component{



     render(){
     const state = "Uchendu State";
     const val = 55;
    const renderData =  '<div class="hoverinfo">' +
     "<h6>" +
      state+
     " State </h6>" +
     "Total No Of Beneficiaries - " +
     val +
     "" +
     "</div>";
    
          return(
               <div>
                   <Abia
                   hoverColor="green"
                   hoverBackgroundColor="grey"
                   renderData={renderData}
                   defaultColor="#000000"
                   id="kd"
                    />  
                    <Adamawa
                   hoverColor="green"
                   hoverBackgroundColor="grey"
                   renderData={renderData}
                   defaultColor="#000000"
                   id="ad"
                    />  
               </div>

          );
     }
}

export default App;
