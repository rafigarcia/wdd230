document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("favchap");
    const addButton = document.querySelector("button");
    const list = document.getElementById("list");

    let chapterArray = getChapterList() || [];
    chapterArray.forEach(chapter => {
        displayList(chapter);
    });

    addButton.addEventListener("click", () =>  {
        if (input.value != "") {
            displayList(input.value);
            chapterArray.push(input.value);
            saveChapterList();
            input.value = "";
            input.focus();
        }
    });

    function displayList(item) {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        li.textContent = item;
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            deleteChapter(li);
            deleteChapter(li.textContent);
            input.foccus();
        });
    }
    
    function setChapterList() {
        localStorage.setItem("myFavBOMList", JSON.stringify(chapterArray));
    }
        
    function getChapterList() {
        return JSON.parse(localStorage.getItem("myFavBOMList"));
    }   
        
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length-1);
        chapterArray = chapterArray.filter(item => item!== chapter);
        setChapterList();
    }    
});