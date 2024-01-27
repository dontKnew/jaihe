import React, { useState } from 'react';

const DateInput = () => {
  const [isShift, setIsShift] = useState(false);
  const separator = "/";

  const isNumeric = (input, keyCode) => {
    if (keyCode === 16) {
      setIsShift(true);
    }

    if (
      ((keyCode >= 48 && keyCode <= 57) ||
        keyCode === 8 ||
        keyCode <= 37 ||
        keyCode <= 39 ||
        (keyCode >= 96 && keyCode <= 105)) &&
      !isShift
    ) {
      if ((input.value.length === 2 || input.value.length === 5) && keyCode !== 8) {
        input.value += separator;
      }

      return true;
    } else {
      return false;
    }
  };

  const validateDateFormat = (input, keyCode) => {
    const dateString = input.value;

    if (keyCode === 16) {
      setIsShift(false);
    }

    const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    if (regex.test(dateString) || dateString.length === 0) {
      // ShowHideError(input, "none"); // You can implement ShowHideError as needed
    } else {
      // ShowHideError(input, "block"); // You can implement ShowHideError as needed
    }
  };

  return (
    <>
      <input
        type="text"
        name="DBB"
        className="date-format"
        maxLength={10}
        onKeyDown={(e) => isNumeric(e.target, e.keyCode)}
        onKeyUp={(e) => validateDateFormat(e.target, e.keyCode)}
        required
      />
    </>
  );
};

export default DateInput;
