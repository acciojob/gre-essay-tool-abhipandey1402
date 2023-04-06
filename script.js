//your code here
const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

evaluatedText.addEventListener('input', () => {
  const text = evaluatedText.value.trim();
  if (text === '') {
    wordCount.textContent = '0';
  } else {
    const count = text.split(/\s+/).length;
    wordCount.textContent = count;
  }
});
