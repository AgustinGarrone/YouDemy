/*  $(".videos__notas").append(` <input type="text" placeholder="Crea una nueva nota en${}">
<button class="submitvideo">SUBMIT</button>`)  */
$(".videos__notas").append(` <div class="videos__notas--div"><input class="videos__notas--agregar" placeholder="Crea una nueva nota en" type="text">
<button class="videos__notas--submit">SUBMIT</button></div>`) 

function secondsToString(seconds) {
    if (seconds>=3600) {
        let hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        let minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ':' + minute + ':' + second;
    } else {
        let minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return minute + ':' + second;
    }
    
  }

function tiempoEnPausa(event) {
    if (event.data == YT.PlayerState.PAUSED) {
      console.log("PAUSASTE EL VIDEO")
      let tiempoNota=secondsToString(Math.trunc(player.getCurrentTime()))
     $(".videos__notas--agregar").attr("placeholder",`Crea una nueva nota en  ${tiempoNota}`) 
    }
  }

  $(".videos__notas--submit").click(agregarNota)

  function agregarNota() {
     let nota=$(".videos__notas--agregar").val()
     $(".videos__notas").append( `<div class="videos__notas--notacontainer">
                                      <div class="videos__notas--notadata">
                                            <p>VIDEO1</p>
                                            <span>3:33</span>
                                            <p>${nota}</p>
                                      </div>
                                  </div>`    )
  }
