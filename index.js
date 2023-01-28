let rankSong= []
const asyncSong= async function(song){
  try{
   

  let res=await fetch(song)
 


  if (res.ok){
    let data = await res.json()
    let i=0 ;
    let song1= document.getElementById("song1")
    for(i=0; i<=2; i++){
      let element=data.data[i]
      rankSong.push(element)
      song1.innerHTML+= `<div class="card" style="width: 22rem; float: left; margin: 15px 15xp 15px 15px; ">
      <img src="${element.album.cover_medium}" class="card-img-top" alt="">
      <div class="card-body"><h5>${element.title}</h5>
        <p class="card-text">Album: ${element.album.title}<br>Artista: ${element.artist.name}</p>
        <audio controls>
          <source src="${element.preview}" type="audio/mpeg">
        </audio>
         
      </div>
      </div>`
      }
}
      
  } catch(error){
      console.log(error)
  }
};
asyncSong("https://striveschool-api.herokuapp.com/api/deezer/search?q=police");


const asyncFavSong = async function (song) {
    try {
        let res = await fetch(song, {
            method: "GET",
        })
        if (res.ok) {
            let data = await res.json()
            let favSong = document.getElementById("favSong");
            let element=data.data[0];
            rankSong.push(element)
                favSong.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${element.album.cover_big}"class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">}
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">Album:${element.album.title}<br>Artista: ${element.artist.name}</p>
                      <audio controls>
                      <source src="${element.preview}" type="audio/mpeg">
                    </audio>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>`
           
        }
    } catch (error) {
        console.log(error)
    }
}
asyncFavSong("https://striveschool-api.herokuapp.com/api/deezer/search?q=nobody'sWife");

const asyncCarousel = async function (song) {
  try {
      let res = await fetch(song, {
          method: "GET",
      })
      if (res.ok) {
          let data = await res.json()
          let carousel = document.getElementById("carousel");
          let element=data.data[0];
          rankSong.push(element)
              carousel.innerHTML += `
               <div class="carousel-item active">
              <img src="${element.album.cover_big}" class="d-block w-100" alt="...">
            </div>`
      }
  } catch (error) {
      console.log(error)
  }
}

asyncCarousel("https://striveschool-api.herokuapp.com/api/deezer/search?q=theDarkSideOfTheMoon");
asyncCarousel("https://striveschool-api.herokuapp.com/api/deezer/search?q=empire");
asyncCarousel("https://striveschool-api.herokuapp.com/api/deezer/search?q=theResistance");

function stampaRank(){
  rankSong.sort((a,b)=> {return a.rank-b.rank});
  alert(rankSong.map(element=>element.rank+" - "+element.title+"\n"));

  let x="";
  for(let i=0; i<rankSong.length; i++){
    x+=rankSong[i].rank+" - "+rankSong[i].title+"\n";
  }
  alert(x);

  }