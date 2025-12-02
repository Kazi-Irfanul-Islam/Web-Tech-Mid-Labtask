document.getElementById("analyzeBtn").addEventListener("click", function () {
  let text = document.getElementById("textInput").value.trim();
  let resultBox = document.getElementById("resultBox");

  if (text === "") {
    resultBox.innerHTML =
      "<span style='color:red;'>Please enter some text.</span>";
    return;
  }

  let charCount = text.length;

  let words = text.split(/\s+/);

  let wordCount = text === "" ? 0 : words.length;

  let reversedText = text.split("").reverse().join("");

  resultBox.innerHTML = `
    <p><strong>Total Characters:</strong> ${charCount}</p>
    <p><strong>Total Words:</strong> ${wordCount}</p>
    <p><strong>Reversed Text : </strong>${reversedText}</p>
`;
});
