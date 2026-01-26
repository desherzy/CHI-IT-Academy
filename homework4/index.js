const heroList = document.querySelector('.hero-list');

const modalOverlay = document.getElementById('modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalStatus = document.getElementById('modal-status');
const closeModalBtn = document.getElementById('close-modal');

let currentPage = 1;
let isLoading = false;

function loadCharacters() {
    if (isLoading) return;

    isLoading = true;

    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
        .then(res => res.json())
        .then(data => {
            renderCharacters(data.results);
            currentPage++;
            isLoading = false;
        })
        .catch(err => {
            console.error(err);
            isLoading = false;
        });
}

function renderCharacters(characters) {
    characters.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('hero-card');
        card.dataset.id = person.id;

        card.innerHTML = `
            <img src="${person.image}" />
            <h3>${person.name}</h3>
            <p>${person.status}</p>
        `;

        heroList.append(card);
    });
}

heroList.addEventListener('click', (e) => {
    const card = e.target.closest('.hero-card');
    if (!card) return;

    e.stopPropagation();

    const id = card.dataset.id;
    openModal(id);
});

function openModal(id) {
    modalOverlay.classList.remove('hidden');

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(person => {
            modalImg.src = person.image;
            modalName.textContent = person.name;
            modalStatus.textContent = person.status;
        });
}

closeModalBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
});

window.addEventListener('scroll', () => {
    const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (scrollBottom) {
        loadCharacters();
    }
});

loadCharacters();

