import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ButtonComponent from "./ButtonComponent";

const DateTimeForm = ({callbackFun}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    callbackFun(new Date(date).toLocaleString());
    hideDatePicker();
  };

  return (
    <View>
      <View style={{alignSelf: "center", margin: 10}}>
        <ButtonComponent title={'Add Date & Time'} bg={'blue'} color={'white'} onPress={showDatePicker}></ButtonComponent>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimeForm;