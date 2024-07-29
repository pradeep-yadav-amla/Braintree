//import { useTranslationMessages } from "@/services/utils/LocaleHelper";
import React from "react";


interface IHeading {
  name?: string;
  customClass?: string;
  dataTestSelector?: string;
}

const Heading: React.FC<IHeading> = ({ name, customClass, dataTestSelector }) => {
  //const t = useTranslationMessages("MyAccount");
  return (
    <div className={`separator ${customClass}`} data-test-selector={dataTestSelector}>
      {name || ("ContentHeading")}
    </div>
  );
};

export default Heading;