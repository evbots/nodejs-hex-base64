// utility function
function hexToBase64(hex) {
  return Buffer.from(hex, 'hex').toString('base64');
}

// log to stdout
console.log(hexToBase64(process.argv[2]));
