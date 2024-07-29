"use client";
import Braintree from "./Braintree"
import {IPaymentPayRequest,PluginType} from 'znode.library.plugin.ui1'
import { payNowResponseCallBack } from "znode.library.plugin.ui1/dist/interfaces/IPluginUI";
import Component, {useEffect, useState } from 'react';

export default function Page(): any {
const pluginType=PluginType.Payment;
const PaymentPayRequest :IPaymentPayRequest ={
  OfflinePaymentFlag: false,
  PaymentConfigurationSetId :"a4d25e7a-00fa-4317-bfde-1c7ec0f53f93"
}
let pluginResponseCallBack : payNowResponseCallBack
// //const OfflinePaymentFlag=false;
// //const PaymentConfigurationSetId="a4d25e7a-00fa-4317-bfde-1c7ec0f53f93";
   //const braintree = new Braintree;
   const [braintree] = useState(new Braintree());
  return braintree.renderPluginUI(
    1,
    PaymentPayRequest,
     pluginResponseCallBack
   );
}
// export default function Page() {
//     return <h1>Hello, Next.js!</h1>
//   }