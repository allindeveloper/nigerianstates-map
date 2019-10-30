import React, { Component } from "react";
import PropTypes from "prop-types";
import Abia from "../components/Abia";
import Katsina from "../components/Katsina";
import Lagos from "../components/Lagos";
import Kano from "../components/Kano";
import Kaduna from "../components/Kaduna";
import Oyo from "../components/Oyo";
import Rivers from "../components/Rivers";
import Bauchi from "../components/Bauchi";
import Jigawa from "../components/Jigawa";
import Benue from "../components/Benue";
import Anambra from "../components/Anambra";
import Borno from "../components/Borno";
import Delta from "../components/Delta";
import Imo from "../components/Imo";
import Niger from "../components/Niger";
import AkwaIbom from "../components/AkwaIbom";
import Ogun from "../components/Ogun";
import Sokoto from "../components/Sokoto";
import Ondo from "../components/Ondo";
import Osun from "../components/Osun";
import Kogi from "../components/Kogi";
import Zamfara from "../components/Zamfara";
import Enugu from "../components/Enugu";
import Kebbi from "../components/Kebbi";
import Edo from "../components/Edo";
import Plateau from "../components/Plateau";
import Adamawa from "../components/Adamawa";
import CrossRiver from "../components/CrossRiver";
import Ekiti from "../components/Ekiti";
import Kwara from "../components/Kwara";
import Gombe from "../components/Gombe";
import Yobe from "../components/Yobe";
import Taraba from "../components/Taraba";
import Ebonyi from "../components/Ebonyi";
import Nasarawa from "../components/Nasarawa";
import Bayelsa from "../components/Bayelsa";
import Fct from "../components/Fct";
import * as Constants from "../constants";
class Nigeria extends Component {
  constructor(props) {
    super(props);

    this.renderState = this.renderState.bind(this);
    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      defaultColor: this.props.defaultColor,
      id: this.props.id
    };
  }

  componentWillMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor};
      width:250px;
      max-width:400px;
      top:220px
  }
      
    `;
  }

  componentDidMount() { }
  renderState() {
    let count = {};
    count = this.state;

    if (!Object.keys(count).length <= 0) {
      switch (this.props.stateName.toLowerCase().replace(/\s/g, '')) {
        case Constants.ABIA.toLowerCase().replace(/\s/g, ''):
          return <Abia {...this.props} />
          break;
        case Constants.ADAMAWA.toLowerCase().replace(/\s/g, ''):
          return <Adamawa {...this.props} />
          break;
        case Constants.AKWAIBOM.toLowerCase().replace(/\s/g, ''):
          return <AkwaIbom {...this.props} />
          break;
        case Constants.ANAMBRA.toLowerCase().replace(/\s/g, ''):
          return <Anambra {...this.props} />
          break;
        case Constants.BAUCHI.toLowerCase().replace(/\s/g, ''):
          return <Bauchi {...this.props} />
          break;
        case Constants.BAYELSA.toLowerCase().replace(/\s/g, ''):
          return <Bayelsa {...this.props} />
          break;
        case Constants.BENUE.toLowerCase().replace(/\s/g, ''):
          return <Benue {...this.props} />
          break;
        case Constants.BORNO.toLowerCase().replace(/\s/g, ''):
          return <Borno {...this.props} />
          break;
        case Constants.CROSSRIVER.toLowerCase().replace(/\s/g, ''):
          return <CrossRiver {...this.props} />
          break;
        case Constants.DELTA.toLowerCase().replace(/\s/g, ''):
          return <Delta {...this.props} />
          break;
        case Constants.EBONYI.toLowerCase().replace(/\s/g, ''):
          return <Ebonyi {...this.props} />
          break;
        case Constants.EDO.toLowerCase().replace(/\s/g, ''):
          return <Edo {...this.props} />
          break;
        case Constants.EKITI.toLowerCase().replace(/\s/g, ''):
          return <Ekiti {...this.props} />
          break;
        case Constants.ENUGU.toLowerCase().replace(/\s/g, ''):
          return <Enugu {...this.props} />
          break;
        case Constants.ABUJA.toLowerCase().replace(/\s/g, ''):
          return <Fct {...this.props} />
          break;
        case Constants.FCT.toLowerCase().replace(/\s/g, ''):
          return <Fct {...this.props} />
          break;
        case Constants.FEDERALCAPITALTERRITORY.toLowerCase().replace(/\s/g, ''):
          return <Fct {...this.props} />
          break;
        case Constants.GOMBE.toLowerCase().replace(/\s/g, ''):
          return <Gombe {...this.props} />
          break;
        case Constants.IMO.toLowerCase().replace(/\s/g, ''):
          return <Imo {...this.props} />
          break;
        case Constants.JIGAWA.toLowerCase().replace(/\s/g, ''):
          return <Jigawa {...this.props} />
          break;
        case Constants.KADUNA.toLowerCase().replace(/\s/g, ''):
          return <Kaduna {...this.props} />
          break;
        case Constants.KANO.toLowerCase().replace(/\s/g, ''):
          return <Kano {...this.props} />
          break;
        case Constants.KATSINA.toLowerCase().replace(/\s/g, ''):
          return <Katsina {...this.props} />
          break;
        case Constants.KEBBI.toLowerCase().replace(/\s/g, ''):
          return <Kebbi {...this.props} />
          break;
        case Constants.KOGI.toLowerCase().replace(/\s/g, ''):
          return <Kogi {...this.props} />
          break;
        case Constants.KWARA.toLowerCase().replace(/\s/g, ''):
          return <Kwara {...this.props} />
          break;
        case Constants.LAGOS.toLowerCase().replace(/\s/g, ''):
          return <Lagos {...this.props} />
          break;
        case Constants.NASARAWA:
          return <Nasarawa {...this.props} />
          break;
        case Constants.NIGER.toLowerCase().replace(/\s/g, ''):
          return <Niger {...this.props} />
          break;
        case Constants.OGUN.toLowerCase().replace(/\s/g, ''):
          return <Ogun {...this.props} />
          break;
        case Constants.OGUN.toLowerCase().replace(/\s/g, ''):
          return <Ogun {...this.props} />
          break;
        case Constants.ONDO.toLowerCase().replace(/\s/g, ''):
          return <Ondo {...this.props} />
          break;
        case Constants.OSUN.toLowerCase().replace(/\s/g, ''):
          return <Osun {...this.props} />
          break;
        case Constants.OYO.toLowerCase().replace(/\s/g, ''):
          return <Oyo {...this.props} />
          break;
        case Constants.PLATEAU.toLowerCase().replace(/\s/g, ''):
          return <Plateau {...this.props} />
          break;
        case Constants.RIVERS.toLowerCase().replace(/\s/g, ''):
          return <Rivers {...this.props} />
          break;
        case Constants.SOKOTO.toLowerCase().replace(/\s/g, ''):
          return <Sokoto {...this.props} />
          break;
        case Constants.TARABA.toLowerCase().replace(/\s/g, ''):
          return <Taraba {...this.props} />
          break;
        case Constants.YOBE.toLowerCase().replace(/\s/g, ''):
          return <Yobe {...this.props} />
          break;
        case Constants.ZAMFARA.toLowerCase().replace(/\s/g, ''):
          return <Zamfara {...this.props} />
          break;
        default:
          return new Error("Cannot Find Map to Render");
      }
    } else {
      return new Error("Please Provided Neccessary Props");
    }
  };
  render() {
    return <div className="App">{this.renderState.call(this)}</div>
  }
}
const state = "State Info";
const val = 55;
const lagosData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Nigeria.defaultProps = {
  stateName: "Lagos",
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: lagosData,
  defaultColor: "green",
  id: "lg"
};

Nigeria.propTypes = {
  stateName: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Nigeria;
