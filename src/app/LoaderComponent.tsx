import React from "react";
//import { LoadingSpinner } from "../Icons/Icon";
//import { useTranslationMessages } from "@/services/utils/LocaleHelper";


interface LoaderProps {
  isLoading: boolean;
  isLoadingTextShow?: boolean;
  height?: string;
  width?: string;
  color?: string;
  showHeight?: boolean;
  loaderText?: string;
}

const LoaderComponent: React.FC<LoaderProps> = ({ isLoading, isLoadingTextShow = false, height, width, color, showHeight, loaderText }) => {
  //const t = useTranslationMessages("MyAccount");

  const isLoadingTextDisplay = (isLoadingTextShow: boolean) => {
    return <>{isLoadingTextShow ? <p className="pl-1.5">{loaderText ? loaderText : ("Loading")}</p> : ""}</>;
  };

  return (
    <>
      {isLoading && (
        <div className={`flex items-center justify-center ${showHeight ? "h-80" : ""}`}>
          {/* ToDo */}
          {/* <LoadingSpinner height={height} width={width} color={color} /> */}
          {isLoadingTextDisplay(isLoadingTextShow)}
        </div>
      )}
    </>
  );
};

export default LoaderComponent;
