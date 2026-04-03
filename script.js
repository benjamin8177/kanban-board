const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

fills.forEach(fill => {
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
});

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

let draggedItem = null;

function dragStart() {
    draggedItem = this;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
    draggedItem = null;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(draggedItem);
}
