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
![alt text](https://drive.google.com/uc?export=view&id=1yA88BC7TdmW0koeNc86RaM4tPShPSGPP)


## 
![alt text](https://drive.google.com/uc?export=view&id=1-s_Waq_436mEzLCi_oqwz_6nY6FEAxty)



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
    * @param hoverBackgroundColor=>Background color of the  data-tool-tip for the map is on hover
    * @param defaultColor=> the default color for the map
    * @param id=> An id for the map 
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


