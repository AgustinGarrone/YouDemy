const apiYT="https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE&channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet,id&order=date&maxResults=5"
const apiPLAYLIST="https://www.googleapis.com/youtube/v3/playlists"

/*CARGAR VIDEOS YA SUBIDOS DESDE LOCAL*/
for (let i=0; i<=localStorage.length;i++) {
    if (localStorage.key(i)==="video"+i) {
        let videoscargados=localStorage.getItem("video"+i)
        $(".playlist__content").append(videoscargados)
    }
}
/* var videoscargados=localStorage.getItem("video")
console.log(videoscargados)
$(".playlist__content").append(videoscargados) */


var inputeano=document.querySelector("input")
var botonazo=$(".submitvideo")
var eliminarVideo=document.querySelector(".eliminar")
var playlist=[]
var key="AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE"
/* var apiActualizada=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE&channelId=${canalid}&part=snippet,id&order=date&maxResults=70`
 */
/* $.get(apiYT,function (response,status){
    if (status==="success") {
        console.log(response)
        botonazo.addEventListener("click",analiza) 
        function analiza (){
            let cortar=inputeano.value.indexOf("=")
            let videoid=inputeano.value.substring(cortar+1, undefined);
            console.log(videoid)
            document.querySelector(".videos").innerHTML+=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button class=eliminar>ELIMINAR</button>`
        /*     eliminarvideo.addEventListener("click",()=>document.querySelector(".videos").innerHTML-="") 
            document.querySelector(".eliminar").addEventListener("click",()=>document.querySelector(".videos").innerHTML="")
     
        }

    }
}) */

function analiza (){
    let cortar=inputeano.value.indexOf("=")
    let videoId=inputeano.value.substring(cortar+1, undefined);
    let i=1
    console.log(videoId)
    
/*     eliminarVideo.addEventListener("click",()=>document.querySelector(".videos").innerHTML-="")  */
    /* document.querySelector(".eliminar").addEventListener("click",()=>document.querySelector(".playlist").innerHTML="") */
    var videoApi=`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${key}&part=snippet,contentDetails,statistics,status`
    $.get(videoApi,function (response,status){
        if (status==="success") {
            $(".playlist__content").append(`<details><summary class="playlist__content__name">${response.items[0].snippet.title}</summary><img class="playlistPlay" src="${response.items[0].snippet.thumbnails.medium.url}"></img></details>`)
            $(".playlistPlay").click(seleccionarVideo) 
            let video=`<details><summary class="playlist__content__name">${response.items[0].snippet.title}</summary><img class="playlistPlay" src=${response.items[0].snippet.thumbnails.medium.url}></img></details>`
            guardarlocal(i,video)
            i++
        }
    })
 
    function seleccionarVideo() {
        document.querySelector(".videos").innerHTML+=`<iframe width="792" height="400" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    } 
    function guardarlocal(numero,valor) {
        localStorage.setItem("video"+numero,valor)
        i++
    }
}
botonazo.click(analiza) 


/*https://www.youtube.com/embed/-wb_Coby-Cc*/



/* let apiActualizada=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCA-C8FV2ihEUqkU58Hix1gJF2N_YGFlfE&channelId=${canalid}&part=snippet,id&order=date&maxResults=70`
 */
/* $.get(APIYOUTUBE,function (response,status){
    if (status==="success") {
        console.log(response)
        botonazo.addEventListener("click",analiza) 
        function analiza (){
            let cortar=inputeano.value.indexOf("=")
            let videoid=inputeano.value.substring(cortar+1, undefined);
            console.log(videoid)
            document.querySelector(".videos").innerHTML+=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><button class=eliminar>ELIMINAR</button>`
        /*     eliminarvideo.addEventListener("click",()=>document.querySelector(".videos").innerHTML-="") 
            document.querySelector(".eliminar").addEventListener("click",()=>document.querySelector(".videos").innerHTML="")
     
        }

    }
}) */


document.querySelector(".videos").innerHTML+=`<iframe width="792" height="400" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`