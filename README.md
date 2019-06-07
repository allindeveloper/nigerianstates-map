## nigerianstates-map 

This is a React Map library for Nigerian States



## Intro

This React library provides a visualization to various individual States in the Country of Nigeira

### Note
You can check the src/examples from the project directory for assistance.

### Install
```
npm install --save nigerianstates-map
```
#
![alt text](https://venturegardengroup-my.sharepoint.com/personal/precious_uchendu_venturegardengroup_com/Documents/states1.PNG?csf=1&e=nYbeTW&cid=63e0a9d9-c6d6-444c-b474-f3a618a08f6a)

## 
![alt text](https://venturegardengroup-my.sharepoint.com/:i:/r/personal/precious_uchendu_venturegardengroup_com/Documents/states2.png?csf=1&e=wG7Yil
)




### Sample Usage

```javascript

import React from "react";
import {Abia, Adamawa} from 'nigerianstates-map'; 

/**
 * You can import any state you need.
 *
 */

class App extends React.Component {
  
  render() {
    /**
    * You can import any state you need.
    */

    let state = "Abia Data";
    let val = 55000;
    let renderData =  '<div class="hoverinfo">' +
    "<h6>" +
     state+
    " State </h6>" +
    "Total No Of People- " +
    val +
    "" +
    "</div>";
    
    /**
    * @prop hoverColor=>string color to be used when the map is hovered on.
    * @prop hoverBackgroundColor=>Background color of the  data-tool-tip for the map is on hover
    * @prop defaultColor=> the default color for the map
    * @prop id=> A unique id for the map 
    */
    return(
      <div>
          <Abia
          hoverColor="green"
          hoverBackgroundColor="grey"
          renderData={renderData}
          defaultColor="blue"
          id="kd"
        />  
     
    </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));




## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😎

## How can I thank you?

Why not star the github repo?
Don't forget to Share to others.

Don't forget to [follow me on twitter](https://twitter.com/allindeveloper)!


