document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.nav-btn');
    let index = 0;

    function updateSelection() {
        buttons.forEach(button => button.classList.remove('selected'));
        buttons[index].classList.add('selected');
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowLeft':
                index = Math.max(0, index - 1);
                break;
            case 'ArrowRight':
                index = Math.min(buttons.length - 1, index + 1);
                break;
            case 'Enter':
                if (document.activeElement.tagName === 'INPUT') {
                    return;
                }
                buttons[index].click();
                break;
            case '=':
                window.location.href = 'index.html';
                break;
        }
        updateSelection();
    }

    document.addEventListener('keydown', handleKeyPress);
    updateSelection();
});