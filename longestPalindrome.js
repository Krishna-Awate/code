const longestPal = (string) => {
  const str = string.split('');
  const palArr = [];
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      newStr += str[j];
      if (newStr.length > 1 && newStr === newStr.split('').reverse().join('')) {
        palArr.push(newStr);
      }
    }
  }

  let max = palArr[0];
  for (let i = 0; i < palArr.length; i++) {
    if (palArr[i].length > max.length) {
      max = palArr[i];
    }
  }
  return max;
};

const string = 'babad';
console.log(longestPal(string));
