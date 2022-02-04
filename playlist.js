const APIYOUTUBE="https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE&channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet,id&order=date&maxResults=5"
const apiPLAYLIST="https://www.googleapis.com/youtube/v3/playlists"
const APIFRAME="https://www.youtube.com/iframe_api"

/* let videoscargados=localStorage.getItem("video")
console.log(videoscargados)
$(".playlist__content").append(videoscargados) */


let inputeano=document.querySelector(".playlist__buscador--search")
let botonazo=$(".submitvideo")
let eliminarVideo=document.querySelector(".eliminar")
let playlist=[]
let key="AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE"

let numeroDeClase=0

function indexCaracter(string,caracter) {
    return string.indexOf(caracter)
}
function cortarString (string,inicio,final) {
    return string.substring(inicio+1,final)
}

function analiza (){
    let cortar=indexCaracter(inputeano.value,"=")
    let videoId=cortarString(inputeano.value,cortar,undefined)
    console.log(videoId)
    
/*     eliminarVideo.addEventListener("click",()=>document.querySelector(".videos").innerHTML-="")  */
    /* document.querySelector(".eliminar").addEventListener("click",()=>document.querySelector(".playlist").innerHTML="") */
    const VIDEOAPI=`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${key}&part=snippet,contentDetails,statistics,status`
    $.get(VIDEOAPI,function (response,status){
        if (status==="success") {
            console.log(response)
            let corte1=indexCaracter(response.items[0].contentDetails.duration,"T")
            let corte2=indexCaracter(response.items[0].contentDetails.duration,"M")
            let timeVideo=cortarString(response.items[0].contentDetails.duration,corte1,corte2+1)
            numeroDeClase++
            $(".playlist__content").append(`<details><summary><span class="playlist__content--classnum">${numeroDeClase} -</span><input type="text" class="playlist__content--changename"><p class="playlist__content--name">${response.items[0].snippet.title}  <span class="playlist__content--time">${timeVideo}</span></p></summary><img class="playlistPlay" src="${response.items[0].snippet.thumbnails.medium.url}"></img></details>`)
            $(".playlist__content--changename").hide()
            $(".playlistPlay").click(seleccionarVideo) 
        }
        $(".playlist__content--changename").on("click",nombrarClase(response.items[0].snippet.title)) 
    })
    
    function seleccionarVideo() {
       playThisVideo(videoId)
    }
    inputeano.value=""
}


botonazo.click(analiza) 
 
 
function nombrarClase (nombre) {
  console.log("SE EJECUTA NOMBRAR")
 $(".playlist__content--name").hide()
 let inputCambioNombre=$(".playlist__content--changename")
 inputCambioNombre.show()
 inputCambioNombre.value="nombre"
inputCambioNombre.mouseleave(function () {
console.log("SE APRETÓ ENTER")
    $(".playlist__content--name").html(`${inputCambioNombre.val()}`)
    inputCambioNombre.hide()
    $(".playlist__content--name").show()
    inputCambioNombre.val()=""
 })
} 
 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
    console.log("yt api ready")
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
   /* currentTime()  //! NO SE PA Q ESTA */
 }

 function durationTime() { 
    return player.getDuration()
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
/*  var done = false;*/
 
 /*
 function stopVideo() {
   player.stopVideo();
 } */
 
 function playThisVideo (vidid) {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: vidid,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': tiempoEnPausa 
        }
      })

 }
