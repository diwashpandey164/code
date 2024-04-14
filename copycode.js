 // Get all copy buttons and code blocks
 const copyButtons = document.querySelectorAll(".copycode");
 const codeBlocks = document.querySelectorAll('pre code');

 // Iterate over each copy button and add event listener
 copyButtons.forEach((button, index) => {
   button.addEventListener('click', function () {
     const code = codeBlocks[index];
     const textarea = document.createElement("textarea");
     textarea.value = code.innerText;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand("Copy");
     document.body.removeChild(textarea);
     button.innerHTML = "Copied!";
     setTimeout(() => {
       button.innerHTML = "<i class='fas fa fa-clipboard'></i> Copy Code";
     }, 3000);
   });
 });


 document.getElementById("searchInput").addEventListener("input", function() {
  const searchTerm = this.value.trim().toLowerCase();
  const codeBlocks = document.querySelectorAll(".code-container .question");
  let found = false;

  codeBlocks.forEach(block => {
    const programTitle = block.querySelector("p").textContent.toLowerCase();
    const codeBody = block.querySelector("code").textContent.toLowerCase();
    const isVisible = programTitle.includes(searchTerm) || codeBody.includes(searchTerm);
    block.style.display = isVisible ? "flex" : "none";
    
    if (isVisible) {
      found = true;
    }
  });

  const existingNotFoundMessage = document.querySelector(".not-found-message");
  if (!found && !existingNotFoundMessage && searchTerm !== "") {
    const notFoundMessage = document.createElement("div");
    notFoundMessage.textContent = "No programs found matching your search.";
    notFoundMessage.classList.add("not-found-message");
    document.getElementById("codeContainer").appendChild(notFoundMessage);
  } else if (found && existingNotFoundMessage) {
    existingNotFoundMessage.remove();
  }
});