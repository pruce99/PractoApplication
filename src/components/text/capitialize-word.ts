/* splits the string at spaces and forms an array of strings
  and then capitalizes the first letter of each word before
  finally joining the array of strings. */
  const capitalizeWords = (string: string) => {
    const str = string.split(' ');
    for (let i = 0; i < str.length; i += 1) {
      str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(' ');
  };
  
  export default capitalizeWords;
  