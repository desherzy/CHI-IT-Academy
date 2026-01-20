// #1

class Trasport {
    ride() { throw new Error('Method ride() not implemented'); }
    stop() { throw new Error('Method stop() not implemented'); }
}

class Car extends Trasport {
    ride() { console.log('Driving a car 🚗'); }
    stop() { console.log('Stopping a car 🚗'); }
}

class Bike extends Trasport {
    ride() { console.log('Driving a bike 🚲'); }
    stop() { console.log('Stopping a bike 🚲'); }
}

class TransportFactory {
    static createTransport(type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                throw new Error('Transport not defined');
        }
    }
}

const car = TransportFactory.createTransport('car');
car.ride();
car.stop();

const bike = TransportFactory.createTransport('bike');
bike.ride();
bike.stop();

// const plane = TransportFactory.createTransport('plane');
// plane.ride(); //throw error 'Transport not defined'
// plane.stop(); //throw error 'Transport not defined'

// #2

const characterContainer = document.getElementById('characters');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const SpanPage = document.getElementById('page');

let currentPage = 1;
let totalPages = 1;

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        loadPage(currentPage + 1);
    }
})

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        loadPage(currentPage - 1);
    }
})

function loadPage(page) {
    characterContainer.textContent = 'Loading...';
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => response.json())
    .then(data => {
        characterContainer.textContent = '';
        totalPages = data.info.pages;
        
        data.results.forEach(person => {
            const card = document.createElement('div');
            const img = document.createElement('img');
            const name = document.createElement('h3');
            const status = document.createElement('p');

            img.src = person.image;
            name.textContent = person.name;
            status.textContent = `Status: ${person.status}`;

            card.append(img, name, status);
            characterContainer.append(card);
        });

        if (data.info.next) {
            const nextPageInt = Number(data.info.next.split('page=')[1]);
            SpanPage.textContent = nextPageInt - 1;
            currentPage = nextPageInt - 1;
        } else {
            SpanPage.textContent = data.info.pages;
            currentPage = data.info.pages;
        }

        prevButton.disabled = !data.info.prev;
        nextButton.disabled = !data.info.next;
    })
    .catch(err => {
        characterContainer.textContent = 'Error loading data';
        console.error(err);
    });
}

loadPage(currentPage);

