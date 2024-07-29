"use client";
import React, { useEffect, useState, useContext, Dispatch, SetStateAction, Component } from "react";
import braintree from "braintree-web-drop-in";
import Heading from "./Heading";
import Button from "./Button";
import {IPaymentPayRequest,IPluginUI,PluginType} from 'znode.library.plugin.ui1'
import { payNowResponseCallBack } from "znode.library.plugin.ui1/dist/interfaces/IPluginUI";
//export type payNowResponseCallBack = (response: IPaymentPayResponse) => void;
import {render} from 'react-dom';

export default class Braintree  implements IPluginUI
{
  constructor(){console.log("constructor called");}
   renderPluginUI(
    pluginType: PluginType, 
    paymentPayRequest: IPaymentPayRequest, 
    responseCallBack: payNowResponseCallBack) 
   {
    return (
        <>
        <div>
          <h1> this is braintree component</h1>
        </div>
        <div>{pluginType}</div>
        <div>{paymentPayRequest.OfflinePaymentFlag}</div>
        <div>{paymentPayRequest.PaymentConfigurationSetId}</div>
        </>
   );
  }
}

// default function Braintree({ OfflinePaymentFlag, PaymentConfigurationSetId }: IPaymentPayRequest) {
//   const [dropinInstance, setDropinInstance] = useState<braintree.Dropin | null>(null);
//   const [paymentSuccessBraintree, setPaymentSuccessBraintree] = useState<boolean>(false);
//   const [ nonceCreatedFlag, setNonceCreatedFlag ] = useState<boolean>(false);
// return (
//   <>
//   <div>
//     <h1> this is braintree component</h1>
//   </div>
//   </>
//   );
// }


