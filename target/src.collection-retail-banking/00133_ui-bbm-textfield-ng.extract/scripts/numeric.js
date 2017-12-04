const isValidNumber = str => /^\d+$/.test(str);

const stripLeadingZeros = value => value.replace(/^0+/, '');

export default input => {
  // NOTE: Eventually this event is supposed to be replaced with "beforeInput" event
  // See https://bugs.chromium.org/p/chromium/issues/detail?id=382814 for details
  input.on('textInput', (evt) => {
    if (!isValidNumber(evt.data)) {
      evt.preventDefault();
    }
  });

  input.on('input', () => {
    const currentValue = input.val();
    const newValue = stripLeadingZeros(currentValue);

    // Change the input value only when it is needed to keep the position of a text caret
    if (newValue !== currentValue) {
      input.val(newValue);
    }
  });
};
