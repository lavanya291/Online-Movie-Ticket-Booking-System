//quick book
const movieSelect = document.getElementById('movie-select');
const dateInput = document.getElementById('date-input');
const cinemaSelect = document.getElementById('cinema-select');
const timingSelect = document.getElementById('timing-select');
const bookButton = document.getElementById('book-button');

bookButton.addEventListener('click', bookMovie);

function bookMovie() {
  const selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;
  const selectedDate = dateInput.value;
  const selectedCinema = cinemaSelect.options[cinemaSelect.selectedIndex].text;
  const selectedTiming = timingSelect.options[timingSelect.selectedIndex].text;

  console.log('Selected Movie:', selectedMovie);
  console.log('Selected Date:', selectedDate);
  console.log('Selected Cinema:', selectedCinema);
  console.log('Selected Timing:', selectedTiming);

  if (selectedMovie === 'Select a movie' || selectedDate === '' || selectedCinema === 'Select a cinema' || selectedTiming === 'Select a timing') {
    alert('Please fill in all the values to book a ticket!');
  } else {
    alert(`Booking movie: ${selectedMovie} on ${selectedDate} at ${selectedCinema} at ${selectedTiming}`);
  }
}

//picture scrolling
let scrollIndex = 0;
const images = [
  'scrolling.jpeg', 
   'scrolling3.jpeg',
   'scrolling2.jpeg',
   'scrolling4.jpeg'
];

const scrollingImage = document.getElementById('scrolling');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

function updateImage() {
  scrollingImage.src = images[scrollIndex];
}

scrollLeftButton.addEventListener('click', () => {
  scrollIndex = (scrollIndex - 1 + images.length) % images.length;
  updateImage();
});

scrollRightButton.addEventListener('click', () => {
  scrollIndex = (scrollIndex + 1) % images.length;
  updateImage();
});

//search bar
const searchInput = document.getElementById('search');
const moviesSection = document.getElementById('movies');

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputValue = searchInput.value.trim();
    if (inputValue !== '') {
      moviesSection.scrollIntoView({ behavior: 'smooth' });
      searchInput.value = inputValue;
    }
  }
});
  
//search bar
document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const movies = document.querySelectorAll('.movie-item');

  movies.forEach(movie => {
      const title = movie.querySelector('b').textContent.toLowerCase();
      if (title.includes(query)) {
          movie.style.display = ''; // Show movie
      } else {
          movie.style.display = 'none'; // Hide movie
      }
  });
});

//to scroll down to the movies section when click on the search bar
document.getElementById('search').addEventListener('click', function() {
  const moviesSection = document.getElementById('Quickbook');
  if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth' });
  }
});


//for filtering according to generes and languages
document.addEventListener('DOMContentLoaded', () => {
  const genreSelect = document.getElementById('genreSelect');
  const languageSelect = document.getElementById('languageSelect');
  const movieItems = document.querySelectorAll('.movie-item');

  function filterMovies() {
    const selectedGenre = genreSelect.value;
    const selectedLanguage = languageSelect.value;

    movieItems.forEach(movie => {
      const movieGenre = movie.dataset.genre;
      const movieLanguages = movie.dataset.language.split(', ').map(lang => lang.trim());

      const genreMatch = selectedGenre === '' || movieGenre === selectedGenre;
      
      const languageMatch = selectedLanguage === '' || movieLanguages.includes(selectedLanguage);

      if (genreMatch && languageMatch) {
        movie.style.display = '';
      } else {
        movie.style.display = 'none';
      }
    });
  }

  genreSelect.addEventListener('change', filterMovies);
  languageSelect.addEventListener('change', filterMovies);
});
// displaying the movie shows and theaters and timings
// for the movie vetiyan
const vet = document.querySelector('#cine1');
vet.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='vettiyan poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>VETTAIYAN</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>A sought-after supercop gets caught in a series of unexpected events in a criminal case. Amidst his struggle to justify the act, larger-than-life forces. Vettaiyan explores the underbelly of crime investigations with one mans fight against a world, where justice is a rare commodity.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="" >Select Cinema</option>
        <option value="INOX,Marina Mall,OMR,Channai">INOX,Marina Mall,OMR,Channai</option>
        <option value="IMAX,Phoenix Marketcity,Chennai">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="Cinepolis,BSR Mall,Chennai">Cinepolis,BSR Mall,Chennai</option>
        <option value="Mayajaal Cinemas,ECR,Chennai">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="Sathyam Cinemas,Chennai">Sathyam Cinemas,Chennai</option>
        <option value="PVR Heritage,ECR,Chennai">PVR Heritage,ECR,Chennai</option>
        <option value="PVR,Grand mall,Velacherry">PVR,Grand mall,Velacherry</option>
        <option value="PVR,Aerohub,Chennai">PVR,Aerohub,Chennai</option>
        <option value="PVR VR,Anna nagar,Chennai">PVR VR,Anna nagar,Chennai</option>
        <option value="PVR,Perambur">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="" >Select Timing</option>
        <option value="9:00 AM . Tamil">9:00 AM . Tamil</option>
        <option value="10:30 AM . Telugu">10:30 AM . Telugu</option>
        <option value="12:00 PM . Tamil">12:00 PM . Tamil</option>
        <option value="1:30 PM . Telugu">1:30 PM . Telugu</option>
        <option value="3:00 PM . Tamil">3:00 PM . Tamil</option>
        <option value="5:30 PM . Tamil">5:30 PM . Tamil</option>
        <option value="6:30 PM . Telugu">6:30 PM . Telugu</option>
        <option value="8:30 PM . Tamil">8:30 PM . Tamil</option>
        <option value="10:30 PM . Telugu">10:30 PM . Telugu</option>
      </select>
      <br/>
   
        <button
          
          id="book"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
   
      </center>
    </div>
    </div>`
  ;
  document.body.appendChild(mov);
  document.getElementById('book').addEventListener('click', () => {
    const cinema = "Your booking details Movie: Vettaiyan"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'
   
   

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
});
// displaying the movie shows and theaters and timings
// for the movie venom
const vet1 = document.querySelector('#cine2');
vet1.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='venom poster.webp' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>VENOM</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="INOX,Marina Mall,OMR,Channai">INOX,Marina Mall,OMR,Channai</option>
        <option value="IMAX,Phoenix Marketcity,Chennai">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="Cinepolis,BSR Mall,Chennai">Cinepolis,BSR Mall,Chennai</option>
        <option value="Mayajaal Cinemas,ECR,Chennai">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="Sathyam Cinemas,Chennai">Sathyam Cinemas,Chennai</option>
        <option value="PVR Heritage,ECR,Chennai">PVR Heritage,ECR,Chennai</option>
        <option value="PVR,Grand mall,Velacherry">PVR,Grand mall,Velacherry</option>
        <option value="PVR,Aerohub,Chennai">PVR,Aerohub,Chennai</option>
        <option value="PVR VR,Anna nagar,Chennai">PVR VR,Anna nagar,Chennai</option>
        <option value="PVR,Perambur">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      
        <button id='book'
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
    
      </center>
    </div>
    </div>
  `;
 

// Event listener for the close button

  document.body.appendChild(mov);
  document.getElementById('book').addEventListener('click', () => {
    const cinema = "Your booking details Movie: Venom"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'
});

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});




// displaying the movie shows and theaters and timings
// for the movie sir
const vet2 = document.querySelector('#cine3');
vet2.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='sir poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>SIR</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Sir"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie jigara
const vet3= document.querySelector('#cine4');
vet3.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='jigra poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>JIGRA</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Jigra"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie goat
const vet4 = document.querySelector('#cine5');
vet4.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='the goat.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>G.O.A.T</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: The G.O.A.T"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});// displaying the movie shows and theaters and timings
// for the movie black
const vet5= document.querySelector('#cine6');
vet5.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='black poster.jpg' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>BLACK</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Black"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie jocker
const vet6= document.querySelector('#cine7');
vet6.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='joker poster.webp' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>JIGRA</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Joker"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie devera
const vet7= document.querySelector('#cine8');
vet7.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='devara poster.jpg' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Devera</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Devara"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie goodrich
const vet8= document.querySelector('#cine9');
vet8.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='goodrich poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>GOOD RICH</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Good Rich"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie binniy and it family
const vet9= document.querySelector('#cine10');
vet9.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='binny and family poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Binniny and it's family</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Binny and Family"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie swag
const vet10= document.querySelector('#cine11');
vet10.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='swag poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>SWAG</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Swag"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie the wild robot
const vet11= document.querySelector('#cine12');
vet11.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='the wild robot poster.webp' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>The Wild Robot</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: The wild Robot"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie viswam
const vet12= document.querySelector('#cine13');
vet12.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='viswam poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>VISWAM</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Viswam"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie martin
const vet13= document.querySelector('#cine14');
vet13.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='martin poster.jpg' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>MArtin</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Martin"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie kishkinda kandam
const vet14= document.querySelector('#cine15');
vet14.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='kishkindha kandam poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Kishkinda Kandam</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Kishkinda kandam"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie stree2
const vet15= document.querySelector('#cine16');
vet15.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='stree poster.jpg' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Stree 2</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Stree 2"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie ma nana superhero
const vet16= document.querySelector('#cine17');
vet16.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='maa nanna super hero poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Ma Nana Super Hero</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Maa Nanna Super Hero"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie arm 3d
const vet17= document.querySelector('#cine18');
vet17.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='arm poster.webp' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>ARM-3D</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="INOX,Marina Mall,OMR,Channai">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: A.R.M 3D"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie janaka ayyita sanka
const vet18= document.querySelector('#cine19');
vet18.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='jag poster.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>Janaka Ayite Ganaka</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Janaka Ayite Ganaka"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie demonty colony 2
const vet19= document.querySelector('#cine20');
vet19.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='DEMONTE COLONY 2 POSTER.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>DEMONTE COLONY 2</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="">Select Cinema</option>
        <option value="">INOX,Marina Mall,OMR,Channai</option>
        <option value="">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="">Cinepolis,BSR Mall,Chennai</option>
        <option value="">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="">PVR Heritage,ECR,Chennai</option>
        <option value="">PVR,Grand mall,Velacherry</option>
        <option value="">PVR,Aerohub,Chennai</option>
        <option value="">PVR VR,Anna nagar,Chennai</option>
        <option value="">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="">Select Timing</option>
        <option value="">9:00 AM . Tamil</option>
        <option value="">10:30 AM . Telugu</option>
        <option value="">12:00 PM . Tamil</option>
        <option value="">1:30 PM . Telugu</option>
        <option value="">3:00 PM . Tamil</option>
        <option value="">5:30 PM . Tamil</option>
        <option value="">6:30 PM . Telugu</option>
        <option value="">8:30 PM . Tamil</option>
        <option value="">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Demonte Colony 2"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});
// displaying the movie shows and theaters and timings
// for the movie vaazai
const vet20= document.querySelector('#cine21');
vet20.addEventListener('click',()=>
{
  const mov = document.createElement('div');
  mov.style.background='black';
  mov.style.color='white';
  mov.style.width='800px';
  mov.style.position='fixed';
  mov.style.height='550px';
  mov.style.top='0px';
  mov.style.left='23%';
  mov.style.transform='translateX(45%)';
  mov.style.transform='translateY(23%)';
  mov.style.zIndex='1000';
  mov.style.borderRadius='0.5rem';

  mov.innerHTML = `
    <center>
    <h2 style='margin-bottom:0px'display:inline-block;><strong>Select to <b style=' background-color: greenyellow;color:black;'>STEAL</b></strong></h2>
    </center>
    <button id="cls" style='top:-2rem;margin-left:95%;display:inline-block;'>X</button> 
    <hr/>
    <div style='width:100%;height:450px;display:flex;'>
    <div style='width:45%;height:450px;float:left;'>
    <center>
    <img src='VAAZHAI POSTER.avif' style='width:225px;height:350px;margin-top:2rem;margin-left:2rem;'>
    <p><strong>VAAJHAI</strong></p>
    </center>
    </div>
    <div style='width:55%;height:440px;border-left:1px solid greenyellow;float:right'>
  <h3 style='margin-left:0.5rem;border-bottom:1px solid whitesmoke;paddin-bottom:0.5rem;display:inline-block;'><strong>About the movie</strong></h3>
<p style='text-allign:justify;margin-left:1rem;font-family:cursive'>Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddies last dance.
</p>

    <center>
    <select
        name="cinema"
        id="cinema-select"
        style="height:40px;width:320px;border-radius: 8px; border: 1px solid black;margin-left:0rem;margin-bottom:0px;margin-top:1rem"
      >
        <option value="Select Cinema">Select Cinema</option>
        <option value="INOX,Marina Mall,OMR,Channai">INOX,Marina Mall,OMR,Channai</option>
        <option value="IMAX,Phoenix Marketcity,Chennai">IMAX,Phoenix Marketcity,Chennai</option>
        <option value="Cinepolis,BSR Mall,Chennai">Cinepolis,BSR Mall,Chennai</option>
        <option value="Mayajaal Cinemas,ECR,Chennai">Mayajaal Cinemas,ECR,Chennai</option>
        <option value="">Sathyam Cinemas,Chennai</option>
        <option value="PVR Heritage,ECR,Chennai">PVR Heritage,ECR,Chennai</option>
        <option value="PVR,Grand mall,Velacherry">PVR,Grand mall,Velacherry</option>
        <option value="PVR,Aerohub,Chennai">PVR,Aerohub,Chennai</option>
        <option value="PVR VR,Anna nagar,Chennai">PVR VR,Anna nagar,Chennai</option>
        <option value="PVR,Perambur">PVR,Perambur</option>
      </select>
      <select
        name="timing"
        id="timing-select"
        style="width: 320px; height:40px; border-radius: 8px; border: 1px solid black;margin-top:50px;margin-bottom:50px"
      >
        <option value="Select Timing">Select Timing</option>
        <option value="9:00 AM . Tamil">9:00 AM . Tamil</option>
        <option value="10:30 AM . Telugu">10:30 AM . Telugu</option>
        <option value="12:00 PM . Tamil">12:00 PM . Tamil</option>
        <option value="1:30 PM . Telugu">1:30 PM . Telugu</option>
        <option value="3:00 PM . Tamil">3:00 PM . Tamil</option>
        <option value="5:30 PM . Tami">5:30 PM . Tamil</option>
        <option value="6:30 PM . Telugu">6:30 PM . Telugu</option>
        <option value="8:30 PM . Tamil">8:30 PM . Tamil</option>
        <option value="10:30 PM . Telugu">10:30 PM . Telugu</option>
      </select>
      <br/>
      <a href="booking.html">
        <button
          class="button"
          id="book-button"
          style="width:200px margin-right: 60px;height:20px;"
        >
          STEAL
        </button>
      </a>
      </center>
    </div>
    </div>
  `;
  document.body.appendChild(mov);
  const cinema = "Your booking details Movie: Vaazhai"; 
    localStorage.setItem("bookingInfo", cinema);
    alert("Booking details saved!"); 
    window.location.href='booking.html'

  const close = document.querySelector('#cls');
  close.addEventListener('click', () => {
    document.body.removeChild(mov);
  });
});