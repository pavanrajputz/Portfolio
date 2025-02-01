// document.getElementById('enquiryButton').addEventListener('click', function() {
//     const Modal = document.getElementById('suraj');
//     if (Modal.style.display === 'none' || Modal.style.display === '') {
//         Modal.style.display = 'block';
//     } else {
//         Modal.style.display = 'none';
//     }
// });

const modal = document.getElementById('suraj');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}