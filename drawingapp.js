const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const penSize = document.getElementById('penSize');
const clearButton = document.getElementById('clearButton');

let drawing = false;
context.strokeStyle = colorPicker.value;
context.lineWidth = penSize.value;

colorPicker.addEventListener('change', () => {
    context.strokeStyle = colorPicker.value;
});

penSize.addEventListener('change', () => {
    context.lineWidth = penSize.value;
});

clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
canvas.addEventListener('mousedown', () => {
    drawing = true;
    context.beginPath();
});
canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.lineTo(x, y);
        context.stroke();
    }
});
canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.closePath();
});
canvas.addEventListener('mouseout', () => {
    drawing = false;
    context.closePath();
});
