opensdg.dataRounding = function(value) {
  var value = value.toString()
  if (value == null) {
    return value
  }
  else {
    if (value.includes(".")) {
      if (value.split(".")[1].length == 1) {
        return value.toFixed(1)
      }
      else if (value.split(".")[1].length >= 2) {
        return value.toFixed(2)
      }
    }
    else {
      return value
    }    
  }
};

