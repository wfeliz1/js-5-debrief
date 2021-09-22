// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears 
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing. 
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).

const names = [‘Kayla’, ‘Willis’, ‘Henok’, ‘Jon’, ‘Alexandra’];
// element = document.getElementById(“name_list”);
const randomButtonEl = document.getElementById(“random_button”);
const clearButtonEl = document.getElementById(“clear_list”);
function generateRandomNames () {
    clearList()
    for (let i = 1; i < 5; i++) {
          let randomName = names[Math.floor(Math.random()*names.length)];
          let  paragraph= document.createElement(‘li’);
        paragraph.id = ‘info’;
        paragraph.innerHTML = randomName
          document.getElementById(‘name_list’).appendChild(paragraph);
    }
}
function clearList()
{
    document.getElementById(‘name_list’).innerHTML = “”;
}
randomButtonEl.onclick = generateRandomNames;
clearButtonEl.onclick = clearList;