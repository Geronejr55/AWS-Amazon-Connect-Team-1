/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import RecPage from "./RecPage";
import { View } from "@aws-amplify/ui-react";
export default function RecordingsFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "RecordingsFrame")}
    >
      <RecPage
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "RecPage")}
      ></RecPage>
    </View>
  );
}
