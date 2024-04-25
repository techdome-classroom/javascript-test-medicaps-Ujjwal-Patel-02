function longestSubstring(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let charMap = {};
  
    for (let i = 0; i < s.length; i++){
      const char = s[i];
  
      if (charMap[char] !== undefined && charMap[char] >= start) {
        start = charMap[char] + 1;
      }
  
      charMap[char] = i;
      end = i;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

module.exports = { longestSubstring };
