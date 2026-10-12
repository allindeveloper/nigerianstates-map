import React from "react";
import type { NigeriaProps } from "../types/Nigeria";
import { State } from "../types/State";
import Abia from "./Abia";
import Adamawa from "./Adamawa";
import AkwaIbom from "./AkwaIbom";
import Anambra from "./Anambra";
import Bauchi from "./Bauchi";
import Bayelsa from "./Bayelsa";
import Benue from "./Benue";
import Borno from "./Borno";
import CrossRiver from "./CrossRiver";
import Delta from "./Delta";
import Ebonyi from "./Ebonyi";
import Edo from "./Edo";
import Ekiti from "./Ekiti";
import Enugu from "./Enugu";
import Fct from "./Fct";
import Gombe from "./Gombe";
import Imo from "./Imo";
import Jigawa from "./Jigawa";
import Kaduna from "./Kaduna";
import Kano from "./Kano";
import Katsina from "./Katsina";
import Kebbi from "./Kebbi";
import Kogi from "./Kogi";
import Kwara from "./Kwara";
import Lagos from "./Lagos";
import Nasarawa from "./Nasarawa";
import Niger from "./Niger";
import Ogun from "./Ogun";
import Ondo from "./Ondo";
import Osun from "./Osun";
import Oyo from "./Oyo";
import Plateau from "./Plateau";
import Rivers from "./Rivers";
import Sokoto from "./Sokoto";
import Taraba from "./Taraba";
import Yobe from "./Yobe";
import Zamfara from "./Zamfara";

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

  return renderState();
};

export default Nigeria;
