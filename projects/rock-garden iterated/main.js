const scroll = document.querySelector('.images');

const dogs1 = scroll.querySelector('images');

// Create a copy of the table and adds it to the scrollable element
const dogs2 = dogs1.cloneNode(true)
scroll.appendChild(dogs2);

const options = {
  root: scroll,
  rootMargin: '0px',
  threshold: 0
}

const callback = (entries) => {
  if (!entries[0].isIntersecting) {
    // table1 is out of bounds, we can scroll back to it
    scroll.scrollLeft = 0;
  }
}

const observer = new IntersectionObserver(callback, options);
observer.observe(dogs1);

