function reRender (toDo) {
    let itemID = 0;

    // clear everything else out first
    document.getElementById('done').innerHTML = '';
    document.getElementById('to-do').innerHTML = '';

    // and then add in the new stuff
    for (const item of toDo) {
        document.getElementById(item.isDone? 'done' : 'to-do').innerHTML += `
            <div id="${itemID}" class="item">
                <div class="text">
                      ${item.text}
                </div>
          
                <div class="checkbox">
                    <input type="checkbox" ${item.isDone? 'checked' : ''} id="${itemID}-checkbox" onchange="doUndoItem(${itemID})">
                </div>
            </div>
        `;

        itemID++;
    }

    // make a message appear if there are no items in one of them

    if (document.getElementById('done').innerHTML === '') {
        document.getElementById('done').innerHTML = "Looks like you haven't completed anything yet... "
    }
    if (document.getElementById('to-do').innerHTML === '') {
        document.getElementById('to-do').innerHTML = "You've got nothing to do!"
    }
}

class Item {
    constructor (text) {
        this.text = text;
        this.isDone = false;
    }

    onClickEvent () {
        // when the checkbox is pressed - inverts whether or not it has been clicked
        this.isDone = !this.isDone;
    }
}

// array of Item objects
let toDoItems = [];
window.onload = () => {reRender(toDoItems)};

window.doUndoItem = (id) => {
    // called when the tick-box on the item is pressed
    toDoItems[id].onClickEvent();
    reRender(toDoItems);
}

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        let textBoxValue = document.getElementById("text-box").value

        // if the text box is empty then we don't really want to do anything
        if (textBoxValue === "") return;

        toDoItems.push(
            new Item(
                textBoxValue
            )
        );

        document.getElementById("text-box").value = "";

        reRender(toDoItems);
    }
});

