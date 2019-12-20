## nigerianstates-map 

This is a React Map library for Nigerian States



## Intro

This React library provides a visualization to various individual States in the Country of Nigeria

### Note
You can check the src/examples from the project directory for assistance.

### Install
```
npm install --save nigerianstates-map
```
#
![alt text](https://drive.google.com/uc?export=view&id=1MK6KvyI-41J2aQYPO6Nkm66MYTRZHQxf)


## 
![alt text](https://drive.google.com/uc?export=view&id=1e9DvBti8I9kwjb9zNd7V8jpHCDoz96oV)



### Sample Usage

```javascript

import React from "react";
import {Lagos, Kaduna, Nigeria} from 'nigerianstates-map'; 

/**
 * You can import any state you need.
 * Or Import Nigeria and specify the state name.
 */

class App extends React.Component {
  
  render() {
    /**
    * You can import any state you need.
    */

    let state = "Lagos Data";
    let val = 55000;
    let lagosData =  '<div class="hoverinfo">' +
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
    * @param id=> A unique id for the map 
    * @param renderData=> Html formatted String to be Displayed on Hover 
    * @param showRenderData=> A boolean value to show renderData
    */
    return(
      <div>
        <Nigeria
          stateName="plateau"
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={plateauData}
          showRenderData={false}
          defaultColor="green"
          id="plat"
        />
        <Kaduna
        />
        <Lagos
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={lagosData}
          defaultColor="green"
          id="lag"
        />
     
    </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## Unit Test
To run the tests, run `npm run test`.

See the test files in `src/lib/tests` for an example of a component test.


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😎

## How can I thank you?

Why not star the github repo? Share to Others too.

And don't forget to [follow me on twitter](https://twitter.com/allindeveloper)!


