document.getElementById('enquiryButton').addEventListener('click', function() {
    const Modal = document.getElementById('Modal');
    if (Modal.style.display === 'none' || Modal.style.display === '') {
        Modal.style.display = 'block';
    } else {
        Modal.style.display = 'none';
    }
});