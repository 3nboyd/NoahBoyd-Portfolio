$(document).ready(function() {
  // content boxes are generated based from the arrays in the contentBoxes variable below
  let contentBoxes = [
    {
        image: "js/content/showchoir.png",
        title: "Show Choir",
        date: "2/9/24",
        type: "Instagram",
        url: "https://www.instagram.com/p/C3IxqUwPgf0/" 
    },
    {
        image: "js/content/fiesta.png",
        title: "Fiesta!!!",
        date: "4/23/24",
        type: "Instagram",
        url: "https://www.instagram.com/p/C6HlF7tuoGy/" 
    },
    {
        image: "js/content/pepband.png",
        title: "Pep Band",
        date: "1/19/24",
        type: "Instagram",
        url: "https://www.instagram.com/showchoir" 
    },
    {
        image: "js/content/iveneverbeeninlovebefore.png",
        title: "Newburgh Jazz Collective",
        date: "6/18/24",
        type: "Youtube",
        url: "https://www.youtube.com/watch?v=tWRsYMTp_2U&ab_channel=NewburghJazzCollective" 
    },
    {
      image: "js/content/jamsessionvol4.png",
      title: "Jam Session vol. 4",
      date: "5/29/24",
      type: "Instagram",
      url: "https://www.instagram.com/p/C7kxhTGuG3R/",
  },
    {
    //     image: "js/content/tempseemore.png",
    //     title: "See More",
    //     date: "",
    //     type: "",
    //     url: "contact.html" 
    // }
    // optional see more box that can prompt to whatever instagram or contact link if I don't end up making the show all button
}];


$.each(contentBoxes, function(index, contentBox) {
  if (contentBox.image && contentBox.title && contentBox.date && contentBox.type && contentBox.url) {
    let contentHTML = `
      <a href="${contentBox.url}" target="_blank">
        <div class="content-box">
          <img src="${contentBox.image}" alt="${contentBox.title}">
          <div class="content-text">
            <p>${contentBox.title}</p>
            <p>${contentBox.date} · ${contentBox.type}</p>
          </div>
        </div>
      </a>
    `;
    $(".content-grid").append(contentHTML);
  }
});
});
let upcomingEvents = [
  {
    image: "js/posters/Rivertown6.22.24.jpg",
    url: "https://instagram.ford4-1.fna.fbcdn.net/v/t51.29350-15/448735862_484914834013368_7992828424405083713_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTQ3eDExNDcuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=bwcwbpfNzigQ7kNvgH_U5tD&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM5NTc2MjI1NjgwNzY0Mzk2MA%3D%3D.2-ccb7-5&oh=00_AYDyL9X5Zv9hhbD4ejG8O68wrU28irmUY2ztLgnvD8JCMA&oe=667FB4D5&_nc_sid=8f1549"
  },
  {
    image: "js/posters/MidwestClinic.jpg",
    url: "https://instagram.ford4-1.fna.fbcdn.net/v/t39.30808-6/435756498_18317400541131012_7313129143213855813_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=bF14iNulS10Q7kNvgFJA5to&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzMzOTE3NTgyMzYyMzg3NjU0Ng%3D%3D.2-ccb7-5&oh=00_AYDdTCc5KATWdNE6Z0T8IuTJUu8QMkSin8vWPpcn4o7TcA&oe=667F8F8E&_nc_sid="
  },
  {
    image: "js/posters/Currents6.15.jpg",
    url: "https://instagram.ford4-1.fna.fbcdn.net/v/t51.29350-15/448479233_441797898612968_5860568588591782701_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTQ5eDExNDYuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NvTCUkEfJcMQ7kNvgFPvUOc&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM5MDczMTM0MTIyODc2ODg1Nw%3D%3D.2-ccb7-5&oh=00_AYCHrgkvgZAl1iUwAYnQHHjpU5KXWtSNh3cF69hmgdjxCQ&oe=6688DE8D&_nc_sid=8f1549"
  },
  {
    image: "js/posters/KnightofJazz4.13.24.jpg",
    url: "https://instagram.ford4-1.fna.fbcdn.net/v/t51.29350-15/434622861_383358124513185_5964925954198885776_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDEyNzMuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=8HA02j241-sQ7kNvgG0yCn9&edm=AA24wl0BAAAA&ccb=7-5&ig_cache_key=MzMzNDQ4OTQ1MDczMzEwNDgxMw%3D%3D.2-ccb7-5&oh=00_AYDVFh3jJYfDq0BxBVWgqjg0zR73t440GSd3kDjzaMWvRw&oe=667F8911&_nc_sid=c3221d"
  },
  {
    image: "js/posters/BOAGrandNats2024.png",
    url: "https://marching.musicforall.org/wp-content/uploads/sites/5/2023/12/1920x1080_BOA24-WHITE-LIGHTNING-1280x640.png"
  },
];//above is my posters, same concept as before

$.each(upcomingEvents, function(index, event) {
  let eventHTML = "";
  if (index < 5) {
    eventHTML = `<a href="${event.url}" target="_blank" class="event-poster">
      <img src="${event.image}" alt="Poster ${index + 1}">
    </a>`;
  } else {
    eventHTML = `<a href="${event.url}" target="_blank">
      <div class="see-all-events">
        <img src="${event.image}" alt="${event.title}">
        <p style="color: #FFFFFF;">${event.title}</p>
      </div>
    </a>`;
  }
  $(".event-grid").append(eventHTML);
});

// event listener for my "Show All" button below

const showAllButtons = document.querySelectorAll('.show-all button');
const contentGrids = document.querySelectorAll('.content-grid,.event-grid');

showAllButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const contentGrid = contentGrids[index];
    const contentBoxes = contentGrid.children;

    // Toggle the visibility of extra content
    Array.prototype.forEach.call(contentBoxes, (box, index) => {
      if (index >= 3) {
        box.classList.toggle('show-all-content');
      }
    });

    // Update the button text
    if (button.textContent === 'Show All') {
      button.textContent = 'Hide';
    } else {
      button.textContent = 'Show All';
    }
  });
});