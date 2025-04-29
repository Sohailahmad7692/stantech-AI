export function debounce(func, waitFor) {
  let timeout = null;

  return (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
}

// export function truncateText(text, maxLength) {
//   if (text.length <= maxLength) return text;
//   return text.slice(0, maxLength) + '...';
// }