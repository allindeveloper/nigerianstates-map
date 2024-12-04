import React from "react";
import Abia from "./Abia";
import Katsina from "./Katsina";
import Lagos from "./Lagos";
import Kano from "./Kano";
import Kaduna from "./Kaduna";
import Oyo from "./Oyo";
import Rivers from "./Rivers";
import Bauchi from "./Bauchi";
import Jigawa from "./Jigawa";
import Benue from "./Benue";
import Anambra from "./Anambra";
import Borno from "./Borno";
import Delta from "./Delta";
import Imo from "./Imo";
import Niger from "./Niger";
import AkwaIbom from "./AkwaIbom";
import Ogun from "./Ogun";
import Sokoto from "./Sokoto";
import Ondo from "./Ondo";
import Osun from "./Osun";
import Kogi from "./Kogi";
import Zamfara from "./Zamfara";
import Enugu from "./Enugu";
import Kebbi from "./Kebbi";
import Edo from "./Edo";
import Plateau from "./Plateau";
import Adamawa from "./Adamawa";
import CrossRiver from "./CrossRiver";
import Ekiti from "./Ekiti";
import Kwara from "./Kwara";
import Gombe from "./Gombe";
import Yobe from "./Yobe";
import Taraba from "./Taraba";
import Ebonyi from "./Ebonyi";
import Nasarawa from "./Nasarawa";
import Bayelsa from "./Bayelsa";
import Fct from "./Fct";
import { NigeriaProps } from "../types/Nigeria";
import { State } from "../types/State";

const Nigeria = (props: NigeriaProps) => {
  const renderState = () => {
    const { state } = props;
    switch (state) {
      case State.ABIA:
        return <Abia {...props} />;
      case State.ADAMAWA:
        return <Adamawa {...props} />;

      case State.AKWA_IBOM:
        return <AkwaIbom {...props} />;

      case State.ANAMBRA:
        return <Anambra {...props} />;

      case State.BAUCHI:
        return <Bauchi {...props} />;

      case State.BAYELSA:
        return <Bayelsa {...props} />;

      case State.BENUE:
        return <Benue {...props} />;

      case State.BORNO:
        return <Borno {...props} />;

      case State.CROSS_RIVER:
        return <CrossRiver {...props} />;

      case State.DELTA:
        return <Delta {...props} />;

      case State.EBONYI:
        return <Ebonyi {...props} />;

      case State.EDO:
        return <Edo {...props} />;

      case State.EKITI:
        return <Ekiti {...props} />;

      case State.ENUGU:
        return <Enugu {...props} />;

      case State.ABUJA:
        return <Fct {...props} />;

      case State.FCT:
        return <Fct {...props} />;

      case State.GOMBE:
        return <Gombe {...props} />;

      case State.IMO:
        return <Imo {...props} />;

      case State.JIGAWA:
        return <Jigawa {...props} />;

      case State.KADUNA:
        return <Kaduna {...props} />;

      case State.KANO:
        return <Kano {...props} />;

      case State.KATSINA:
        return <Katsina {...props} />;

      case State.KEBBI:
        return <Kebbi {...props} />;

      case State.KOGI:
        return <Kogi {...props} />;

      case State.KWARA:
        return <Kwara {...props} />;

      case State.LAGOS:
        return <Lagos {...props} />;

      case State.NASARAWA:
        return <Nasarawa {...props} />;

      case State.NIGER:
        return <Niger {...props} />;

      case State.OGUN:
        return <Ogun {...props} />;

      case State.OGUN:
        return <Ogun {...props} />;

      case State.ONDO:
        return <Ondo {...props} />;

      case State.OSUN:
        return <Osun {...props} />;

      case State.OYO:
        return <Oyo {...props} />;

      case State.PLATEAU:
        return <Plateau {...props} />;

      case State.RIVERS:
        return <Rivers {...props} />;

      case State.SOKOTO:
        return <Sokoto {...props} />;

      case State.TARABA:
        return <Taraba {...props} />;

      case State.YOBE:
        return <Yobe {...props} />;

      case State.ZAMFARA:
        return <Zamfara {...props} />;

      default:
        return <div>Error: Cannot Find Map to Render</div>;
    }
  };

  return <div className="App">{renderState()}</div>;
};

export default Nigeria;
