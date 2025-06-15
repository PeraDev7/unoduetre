var $ = Dom7;


var app = new Framework7({
  name: 'Quiz', // App name
  theme: 'ios', // Automatic theme detection
  el: '#app', // App root element
  // App store
  store: store,
  dialog: {
    buttonOk: 'Ok',
    buttonCancel: "No"
  },
  // App routes
  routes: routes,
});
//HOME
if (localStorage.getItem("modulo")){
  var modulo = localStorage.getItem("modulo");
  if (modulo != null){
    app.views.main.router.navigate("/home/")
  }
}
document.getElementById("logo_aziendale").onclick = function(){
  var ref = window.open('https://www.ispettorirevisione.it', '_blank', 'location=yes');
}
var blocco = document.querySelectorAll(".blocco");
blocco.forEach(function(b){
  b.onclick = function(){
    var id_modulo = b.getAttribute("idmodulo");
    localStorage.setItem("modulo", id_modulo);
    app.views.main.router.navigate("/home/")
  }
})
$(document).on('page:init', '.page[data-name="home"]', function (e) {
  const store = window.localStorage;
  var idmodulo = store.getItem("modulo");
  store.clear();
  store.setItem("modulo", idmodulo);
  if (store.getItem("modulo") == "b"){
    document.getElementById("modulo").innerHTML = "Modulo B";
    document.getElementById("esame_txt").innerHTML = "Rispondi ai quesiti estratti secondo i criteri d’esame con 60 domande in 40 minuti";
  } else {
    document.getElementById("modulo").innerHTML = "Modulo C";
    document.getElementById("esame_txt").innerHTML = "Rispondi ai quesiti estratti secondo i criteri d’esame con 30 domande in 20 minuti.";
  }
  var modalita = document.querySelectorAll(".modalita");
  modalita.forEach(function(mb){
    mb.onclick = function(){
      var modalita = mb.getAttribute("modalita");
      if (modalita == "1"){
        app.views.main.router.navigate("/esame/");
      } else if (modalita == "2"){
        app.views.main.router.navigate("/argomento/");
      } else if(modalita == "3"){
        app.views.main.router.navigate("/ripasso/");
      } else if(modalita == "4"){
        app.views.main.router.navigate("/strumenti/");
      }
    }
  })
  document.getElementById("cambia").onclick = function(){
    localStorage.clear();
    window.location.reload();
  }
})
$(document).on('page:init', '.page[data-name="esame"]', function (e) {
  app.dialog.preloader('Caricamento esame...')
  const storage = window.localStorage;
  const modulo = storage.getItem("modulo");
  storage.clear();
  document.getElementById("torna-home").onclick = function(){
    app.dialog.confirm('Sei sicuro di voler uscire dal QUIZ?', function () {
      app.views.main.router.navigate('/home/');
    }, function(){
      
    });
  }
  storage.setItem("modulo", modulo);
  var domande_finite = [];
  var elenco_domande = [];
  if(storage.getItem("modulo") == "b"){
    fetch("assets/b.json")
    .then(response => response.json())
    .then(data =>{
      var dati = data.Foglio1;
      var b1a = (Object.values(dati).filter(user => user.Code.startsWith("B1A")));
      for (let i = 0; i < 3; i++) {
        var randomAnswer = b1a[Math.floor(Math.random() * b1a.length)];
        domande_finite.push(randomAnswer);
      }
      var b1b = (Object.values(dati).filter(user => user.Code.startsWith("B1B")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b1b[Math.floor(Math.random() * b1b.length)];
        domande_finite.push(randomAnswer);
      }
      var b1c = (Object.values(dati).filter(user => user.Code.startsWith("B1C")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b1c[Math.floor(Math.random() * b1c.length)];
        domande_finite.push(randomAnswer);
      }
      var b1d = (Object.values(dati).filter(user => user.Code.startsWith("B1D")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = b1d[Math.floor(Math.random() * b1d.length)];
        domande_finite.push(randomAnswer);
      }
      var b1e = (Object.values(dati).filter(user => user.Code.startsWith("B1E")));
      for (let i = 0; i < 4; i++) {
        var randomAnswer = b1e[Math.floor(Math.random() * b1e.length)];
        domande_finite.push(randomAnswer);
      }
      var b1f = (Object.values(dati).filter(user => user.Code.startsWith("B1F")));
      for (let i = 0; i < 9; i++) {
        var randomAnswer = b1f[Math.floor(Math.random() * b1f.length)];
        domande_finite.push(randomAnswer);
      }
      var b1g = (Object.values(dati).filter(user => user.Code.startsWith("B1G")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = b1g[Math.floor(Math.random() * b1g.length)];
        domande_finite.push(randomAnswer);
      }
      var b1h = (Object.values(dati).filter(user => user.Code.startsWith("B1H")));
      for (let i = 0; i < 5; i++) {
        var randomAnswer = b1h[Math.floor(Math.random() * b1h.length)];
        domande_finite.push(randomAnswer);
      }
      var b1i = (Object.values(dati).filter(user => user.Code.startsWith("B1I")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b1i[Math.floor(Math.random() * b1i.length)];
        domande_finite.push(randomAnswer);
      }
      var b2a = (Object.values(dati).filter(user => user.Code.startsWith("B2A")));
      for (let i = 0; i < 8; i++) {
        var randomAnswer = b2a[Math.floor(Math.random() * b2a.length)];
        domande_finite.push(randomAnswer);
      }
      var b2b = (Object.values(dati).filter(user => user.Code.startsWith("B2B")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b2b[Math.floor(Math.random() * b2b.length)];
        domande_finite.push(randomAnswer);
      }
      var b2c = (Object.values(dati).filter(user => user.Code.startsWith("B2C")));
      for (let i = 0; i < 7; i++) {
        var randomAnswer = b2c[Math.floor(Math.random() * b2c.length)];
        domande_finite.push(randomAnswer);
      }
      var b2d = (Object.values(dati).filter(user => user.Code.startsWith("B2D")));
      for (let i = 0; i < 7; i++) {
        var randomAnswer = b2d[Math.floor(Math.random() * b2d.length)];
        domande_finite.push(randomAnswer);
      }
      var b2e = (Object.values(dati).filter(user => user.Code.startsWith("B2E")));
      for (let i = 0; i < 3; i++) {
        var randomAnswer = b2e[Math.floor(Math.random() * b2e.length)];
        domande_finite.push(randomAnswer);
      }
      var b3a = (Object.values(dati).filter(user => user.Code.startsWith("B3A")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b3a[Math.floor(Math.random() * b3a.length)];
        domande_finite.push(randomAnswer);
      }
      var b3b = (Object.values(dati).filter(user => user.Code.startsWith("B3B")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b3b[Math.floor(Math.random() * b3b.length)];
        domande_finite.push(randomAnswer);
      }
      var b3c = (Object.values(dati).filter(user => user.Code.startsWith("B3C")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = b3c[Math.floor(Math.random() * b3c.length)];
        domande_finite.push(randomAnswer);
      }
      var b3d = (Object.values(dati).filter(user => user.Code.startsWith("B3D")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b3d[Math.floor(Math.random() * b3d.length)];
        domande_finite.push(randomAnswer);
      }
      var b3e = (Object.values(dati).filter(user => user.Code.startsWith("B3E")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = b3e[Math.floor(Math.random() * b3e.length)];
        domande_finite.push(randomAnswer);
      }
      var swiper = app.swiper.create('.swiper', {
        speed: 400,
        spaceBetween: 100,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });
    domande_finite.forEach(function(domanda){
      var testo_domanda = domanda.QUESITI;
      var id = domanda.Code;
      elenco_domande.push(id);
      localStorage.setItem(id, "0");
      var risposta = domanda.Risposta;
      swiper.appendSlide(`
      <div class="swiper-slide">
      <p class="testo-domanda">${testo_domanda}</p>
      <div class="row pulsanti-domanda">
          <div idDomanda="${id}" id="v${id}" check="${risposta}" val="V" class="vero col-50">
              <a href="#">Vero</a>
          </div>
          <div idDomanda="${id}" id="f${id}" check="${risposta}" val="F"  class="falso col-50">
              <a href="#">Falso</a>
          </div>
      </div>
      <div class="avanti_indietro">
      <a class="indietro-slide" id="indietro" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_left_circle_fill</i></a>
      <a class="avanti-slide" id="avanti" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_right_circle_fill</i></a>
  </div>`);
    })
    swiper.on('slideChange', function (e) {
      var numero = (swiper.realIndex)+1;
      if (numero == 21){
        document.getElementById("numero_domanda").innerHTML = "";
        document.getElementById("trattino").style.display = "none";
      } else {
        document.getElementById("numero_domanda").style.display = "block";
        document.getElementById("trattino").style.display = "block";
        var n = document.getElementById("numero_domanda");
        n.innerHTML = numero + " di 60";
      }
      var avanti = document.querySelectorAll(".avanti-slide");
      avanti.forEach(function(a){
        a.onclick = function(){
          swiper.slideNext();
        }
      })
      var indietro = document.querySelectorAll(".indietro-slide");
      indietro.forEach(function(i){
        i.onclick = function(){
          swiper.slidePrev();
        }
      })
      var vero = document.querySelectorAll(".vero");
      vero.forEach(function(v){
      v.onclick = function(){
        var iddomanda = v.getAttribute("idDomanda");
        elenco_domande = elenco_domande.filter(function(item) {
          return item !== iddomanda
      })
        var esatta = v.getAttribute("check");
        var data = v.getAttribute("val");
        var idvero = "v"+iddomanda;
        var idfalso = "f"+iddomanda;
        document.getElementById(idvero).classList.add("selezionato");
        document.getElementById(idfalso).classList.remove("selezionato");
        if (data == esatta){
          storage.setItem(iddomanda, "1");
          swiper.slideNext();
        } else {
          storage.setItem(iddomanda, "0");
          swiper.slideNext();
        }
      }
    })
    var falso = document.querySelectorAll(".falso");
    falso.forEach(function(f){
      f.onclick = function(){
        
        var iddomanda = f.getAttribute("idDomanda");
        elenco_domande = elenco_domande.filter(function(item) {
          return item !== iddomanda
      })
        var esatta = f.getAttribute("check");
        var data = f.getAttribute("val");
        var idvero = "v"+iddomanda;
        var idfalso = "f"+iddomanda;
        document.getElementById(idfalso).classList.add("selezionato");
        document.getElementById(idvero).classList.remove("selezionato");
        if (data == esatta){
          storage.setItem(iddomanda, "1");
          swiper.slideNext();
        } else {
          storage.setItem(iddomanda, "0");
          swiper.slideNext();
        }
      }
    })
  });
  document.getElementById("fineQuiz").onclick = function(){
    if (elenco_domande.length >0){
      const container = document.getElementById("risposte_nondate");
      container.innerHTML = "";
      var storage = window.localStorage;
      var stringatto = storage.getItem("stringato");
      var stringato_finale = JSON.parse(stringatto);
      elenco_domande.forEach(function(dm, index){
        var content = "<a iddomanda='"+dm+"' class='non_risposta' href='#'>"+dm+"</a>";
        container.innerHTML +=content;
      })
      var nonRisp = document.querySelectorAll(".non_risposta");
      nonRisp.forEach(function(nr){
        nr.onclick = function(){
          var id_domanda = (nr.getAttribute("iddomanda"));
          var index_finale = stringato_finale.indexOf(id_domanda);
          var index_final = index_finale+1;
          swiper.slideTo(index_final);
          document.getElementById("chiudi_popup").click();
        }
      })
    } else {
      document.getElementById("no_risposta").style.display = "none";
    }
  }
  document.getElementById("checcka").onclick = function(){
    const storage = window.localStorage;
    storage.removeItem("stringato");
    document.getElementById("chiudi_popup").click();
    app.views.main.router.navigate('/checkesame/');
  }
    setTimeout(() => {
      swiper.slideTo(1);
      document.getElementById("barra").style.zIndex = "999999";
      var stringato = JSON.stringify(elenco_domande);
      storage.setItem("stringato", stringato);
        countdown( "countdown2", 40, 0 );
        document.getElementById("loader").style.display = "none";
      app.dialog.close();
     }, 1500);
    })
    function countdown(a,b,c){var d,e,g,h,i,j;function k(a){return a<=9?"0"+a:a}function f(){(i=e- +new Date)<1e3?(d.innerHTML="TEMPO SCADUTO!",app.dialog.alert("Il tempo \xe8 scaduto! Il quiz \xe8 completato","Attenzione!"),app.views.main.router.navigate("/checkesame/")):(g=(j=new Date(i)).getUTCHours(),h=j.getUTCMinutes(),d.innerHTML=(g?g+":"+k(h):h)+":"+k(j.getUTCSeconds()),setTimeout(f,j.getUTCMilliseconds()+500))}d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,f()}
  } else {
    fetch("assets/c.json")
    .then(response => response.json())
    .then(data =>{
      var dati = data.Foglio1;
      var c1a = (Object.values(dati).filter(user => user.Code.startsWith("C1A")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = c1a[Math.floor(Math.random() * c1a.length)];
        domande_finite.push(randomAnswer);
      }
      var c1b = (Object.values(dati).filter(user => user.Code.startsWith("C1B")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c1b[Math.floor(Math.random() * c1b.length)];
        domande_finite.push(randomAnswer);
      }
      var c1c = (Object.values(dati).filter(user => user.Code.startsWith("C1C")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c1c[Math.floor(Math.random() * c1c.length)];
        domande_finite.push(randomAnswer);
      }
      var c1d = (Object.values(dati).filter(user => user.Code.startsWith("C1D")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c1d[Math.floor(Math.random() * c1d.length)];
        domande_finite.push(randomAnswer);
      }
      var c1e = (Object.values(dati).filter(user => user.Code.startsWith("C1E")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = c1e[Math.floor(Math.random() * c1e.length)];
        domande_finite.push(randomAnswer);
      }
      var c1f = (Object.values(dati).filter(user => user.Code.startsWith("C1F")));
      for (let i = 0; i < 8; i++) {
        var randomAnswer = c1f[Math.floor(Math.random() * c1f.length)];
        domande_finite.push(randomAnswer);
      }
      var c1g = (Object.values(dati).filter(user => user.Code.startsWith("C1G")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c1g[Math.floor(Math.random() * c1g.length)];
        domande_finite.push(randomAnswer);
      }
      var c1h = (Object.values(dati).filter(user => user.Code.startsWith("C1H")));
      for (let i = 0; i < 3; i++) {
        var randomAnswer = c1h[Math.floor(Math.random() * c1h.length)];
        domande_finite.push(randomAnswer);
      }
      var c1i = (Object.values(dati).filter(user => user.Code.startsWith("C1I")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c1i[Math.floor(Math.random() * c1i.length)];
        domande_finite.push(randomAnswer);
      }
      var c2a = (Object.values(dati).filter(user => user.Code.startsWith("C2A")));
      for (let i = 0; i < 5; i++) {
        var randomAnswer = c2a[Math.floor(Math.random() * c2a.length)];
        domande_finite.push(randomAnswer);
      }
      var c2b = (Object.values(dati).filter(user => user.Code.startsWith("C2B")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c2b[Math.floor(Math.random() * c2b.length)];
        domande_finite.push(randomAnswer);
      }
      var c2c = (Object.values(dati).filter(user => user.Code.startsWith("C2C")));
      for (let i = 0; i < 2; i++) {
        var randomAnswer = c2c[Math.floor(Math.random() * c2c.length)];
        domande_finite.push(randomAnswer);
      }
      var c2d = (Object.values(dati).filter(user => user.Code.startsWith("C2D")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c2d[Math.floor(Math.random() * c2d.length)];
        domande_finite.push(randomAnswer);
      }
      var c2e = (Object.values(dati).filter(user => user.Code.startsWith("C2E")));
      for (let i = 0; i < 1; i++) {
        var randomAnswer = c2e[Math.floor(Math.random() * c2e.length)];
        domande_finite.push(randomAnswer);
      }
      var swiper = app.swiper.create('.swiper', {
        speed: 400,
        spaceBetween: 100,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });
    domande_finite.forEach(function(domanda){
      var testo_domanda = domanda.QUESITI;
      var id = domanda.Code;
      elenco_domande.push(id);
      localStorage.setItem(id, "0");
      var risposta = domanda.Risposta;
      swiper.appendSlide(`
      <div class="swiper-slide">
      <p class="testo-domanda">${testo_domanda}</p>
      <div class="row pulsanti-domanda">
          <div idDomanda="${id}" id="v${id}" check="${risposta}" val="V" class="vero col-50">
              <a href="#">Vero</a>
          </div>
          <div idDomanda="${id}" id="f${id}" check="${risposta}" val="F"  class="falso col-50">
              <a href="#">Falso</a>
          </div>
      </div>
      <div class="avanti_indietro">
      <a class="indietro-slide" id="indietro" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_left_circle_fill</i></a>
      <a class="avanti-slide" id="avanti" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_right_circle_fill</i></a>
  </div>`);
    })
    swiper.on('slideChange', function (e) {
      var numero = (swiper.realIndex)+1;
      if (modulo == "b"){
        if (numero == 61){
          document.getElementById("numero_domanda").innerHTML = "";
          document.getElementById("trattino").style.display = "none";
        } else {
          document.getElementById("numero_domanda").style.display = "block";
          document.getElementById("trattino").style.display = "block";
          var n = document.getElementById("numero_domanda");
          n.innerHTML = numero + " di 60";
        }
      } else {
        if (numero == 31){
          document.getElementById("numero_domanda").innerHTML = "";
          document.getElementById("trattino").style.display = "none";
        } else {
          document.getElementById("numero_domanda").style.display = "block";
          document.getElementById("trattino").style.display = "block";
          var n = document.getElementById("numero_domanda");
          n.innerHTML = numero + " di 30";
        }
      }
      var avanti = document.querySelectorAll(".avanti-slide");
      avanti.forEach(function(a){
        a.onclick = function(){
          swiper.slideNext();
        }
      })
      var indietro = document.querySelectorAll(".indietro-slide");
      indietro.forEach(function(i){
        i.onclick = function(){
          swiper.slidePrev();
        }
      })
      var vero = document.querySelectorAll(".vero");
      vero.forEach(function(v){
      v.onclick = function(){
        var iddomanda = v.getAttribute("idDomanda");
        elenco_domande = elenco_domande.filter(function(item) {
          return item !== iddomanda
      })
        var esatta = v.getAttribute("check");
        var data = v.getAttribute("val");
        var idvero = "v"+iddomanda;
        var idfalso = "f"+iddomanda;
        document.getElementById(idvero).classList.add("selezionato");
        document.getElementById(idfalso).classList.remove("selezionato");
        if (data == esatta){
          storage.setItem(iddomanda, "1");
          swiper.slideNext();
        } else {
          storage.setItem(iddomanda, "0");
          swiper.slideNext();
        }
      }
    })
    var falso = document.querySelectorAll(".falso");
    falso.forEach(function(f){
      f.onclick = function(){
        
        var iddomanda = f.getAttribute("idDomanda");
        elenco_domande = elenco_domande.filter(function(item) {
          return item !== iddomanda
      })
        var esatta = f.getAttribute("check");
        var data = f.getAttribute("val");
        var idvero = "v"+iddomanda;
        var idfalso = "f"+iddomanda;
        document.getElementById(idfalso).classList.add("selezionato");
        document.getElementById(idvero).classList.remove("selezionato");
        if (data == esatta){
          storage.setItem(iddomanda, "1");
          swiper.slideNext();
        } else {
          storage.setItem(iddomanda, "0");
          swiper.slideNext();
        }
      }
    })
  });
  document.getElementById("fineQuiz").onclick = function(){
    if (elenco_domande.length >0){
      const container = document.getElementById("risposte_nondate");
      container.innerHTML = "";
      var storage = window.localStorage;
      var stringatto = storage.getItem("stringato");
      var stringato_finale = JSON.parse(stringatto);
      elenco_domande.forEach(function(dm, index){
        var content = "<a iddomanda='"+dm+"' class='non_risposta' href='#'>"+dm+"</a>";
        container.innerHTML +=content;
      })
      var nonRisp = document.querySelectorAll(".non_risposta");
      nonRisp.forEach(function(nr){
        nr.onclick = function(){
          var id_domanda = (nr.getAttribute("iddomanda"));
          var index_finale = stringato_finale.indexOf(id_domanda);
          var index_final = index_finale+1;
          swiper.slideTo(index_final);
          document.getElementById("chiudi_popup").click();
        }
      })
    } else {
      document.getElementById("no_risposta").style.display = "none";
    }
  }
  document.getElementById("checcka").onclick = function(){
    const storage = window.localStorage;
    storage.removeItem("stringato");
    document.getElementById("chiudi_popup").click();
    app.views.main.router.navigate('/checkesame/');
  }
    setTimeout(() => {
      swiper.slideTo(1);
      document.getElementById("barra").style.zIndex = "999999";
      var stringato = JSON.stringify(elenco_domande);
      storage.setItem("stringato", stringato);
      countdown( "countdown2", 20, 0 );
      document.getElementById("loader").style.display = "none";
      app.dialog.close();
     }, 1500);
    })
    function countdown(a,b,c){var d,e,g,h,i,j;function k(a){return a<=9?"0"+a:a}function f(){(i=e- +new Date)<1e3?(d.innerHTML="TEMPO SCADUTO!",app.dialog.alert("Il tempo \xe8 scaduto! Il quiz \xe8 completato","Attenzione!"),app.views.main.router.navigate("/checkesame/")):(g=(j=new Date(i)).getUTCHours(),h=j.getUTCMinutes(),d.innerHTML=(g?g+":"+k(h):h)+":"+k(j.getUTCSeconds()),setTimeout(f,j.getUTCMilliseconds()+500))}d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,f()}
  }
})

$(document).on('page:init', '.page[data-name="checkesame"]', function (e) {
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  storage.removeItem("modulo");
  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;
while ( i-- ) {
  values.push( localStorage.getItem(keys[i]) );
}
var punteggi = values;
var arrayOfNumbers = punteggi.map(Number);
const sum = arrayOfNumbers.reduce((accumulator, value) => {
return accumulator + value;
}, 0);
var risultato = sum;
storage.setItem("modulo", idmodulo);
if (idmodulo == "b"){
  document.getElementById("errori").innerHTML = "Domande esatte : " + risultato + " su 60";
  if (risultato >= 56){
    document.getElementById("superato").innerHTML = "Hai superato l'esame!"
    document.getElementById("superato").classList.add("superato");
    } else {
    document.getElementById("superato").innerHTML = "Non hai superato l'esame!"
    document.getElementById("superato").classList.add("nonsuperato");
    }
} else {
  document.getElementById("errori").innerHTML = "Domande esatte : " + risultato + " su 30";
  if (risultato >= 28){
    document.getElementById("superato").innerHTML = "Hai superato l'esame!"
    document.getElementById("superato").classList.add("superato");
    } else {
    document.getElementById("superato").innerHTML = "Non hai superato l'esame!"
    document.getElementById("superato").classList.add("nonsuperato");
    }
}
})
$(document).on('page:init', '.page[data-name="checkargomento"]', function (e) {
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  storage.removeItem("modulo");
  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;
while ( i-- ) {
  values.push( localStorage.getItem(keys[i]) );
}
var punteggi = values;
var arrayOfNumbers = punteggi.map(Number);
const sum = arrayOfNumbers.reduce((accumulator, value) => {
return accumulator + value;
}, 0);
var risultato = sum;
storage.setItem("modulo", idmodulo);
if (idmodulo == "b"){
  document.getElementById("errori").innerHTML = "Domande esatte : " + risultato + " su 30";
  if (risultato >= 26){
    document.getElementById("superato").innerHTML = "Hai superato l'esame!"
    document.getElementById("superato").classList.add("superato");
    } else {
    document.getElementById("superato").innerHTML = "Non hai superato l'esame!"
    document.getElementById("superato").classList.add("nonsuperato");
    }
} else {
  document.getElementById("errori").innerHTML = "Domande esatte : " + risultato + " su 15";
  if (risultato >= 13){
    document.getElementById("superato").innerHTML = "Hai superato l'esame!"
    document.getElementById("superato").classList.add("superato");
    } else {
    document.getElementById("superato").innerHTML = "Non hai superato l'esame!"
    document.getElementById("superato").classList.add("nonsuperato");
    }
}
})
$(document).on('page:init', '.page[data-name="errori"]', function (e) {
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  storage.removeItem("modulo");
  var errate = [];
  var totali = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    totali.push(key);
    if (value == 0){
      errate.push(key);
    } else {
    }
  }
  var totali_domande = totali.length;
  var errori_totali = errate.length;
  if(errori_totali == 0){
    errori_totali = 0;
  }
  if (errori_totali >= 5){
    document.getElementById("superato").innerHTML = "Esame non superato";
  } else {
    document.getElementById("superato").innerHTML = "Esame superato";

  }
storage.setItem("modulo", idmodulo);
if (idmodulo == "b"){
  fetch("assets/b.json")
 .then(response => response.json())
 .then(data =>{
   var dati = data.Foglio1;
   const container = document.getElementById("errori_mostra");
   errate.forEach(function(errata){
    var fetched = (Object.values(dati).filter(user => user.Code === errata));
    var fetched_finale = fetched[0];
    var domanda = fetched_finale.QUESITI;
    var risposta = fetched_finale.Risposta;
    var codice = fetched_finale.Code;
    if (risposta == "V"){
      var content = `
      <div class="risposte">
      <div class="list media-list"> 
        <ul>
        <h2>Codice : ${codice}</h2>
          <p>${domanda}</p>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" checked name="demo-media-checkbox" value="1" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Vero</div>
                </div>
                <div class="item-subtitle">La risposta corretta era vero</div>
                </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" name="demo-media-checkbox" value="2" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Falso</div>
                </div>
                <div class="item-subtitle">Hai risposto falso</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>`;
    } else {
      var content = `
      <div class="risposte">
      <div class="list media-list"> 
        <ul>
        <h2>Codice : ${codice}</h2>
          <p>${domanda}</p>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox"  name="demo-media-checkbox" value="1" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Vero</div>
                </div>
                <div class="item-subtitle">Hai risposto vero</div>
                </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" checked name="demo-media-checkbox" value="2" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Falso</div>
                </div>
                <div class="item-subtitle">La risposta corretta era falso</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>`;
    }
    var id = fetched_finale.Code;
  container.innerHTML += content;
  document.getElementById("invia_email").onclick = function(){
    var contenuto = (document.getElementById("errori_mostra").innerHTML);
    var email = document.getElementById("email_invio").value;
    if(email == ""){
      app.dialog.alert("Inserisci un indirizzo email valido!", "Attenzione");
    } else {
      var storage = window.localStorage;
      var idmodulo = storage.getItem("modulo");
      var myObject = JSON.stringify({"totali" : totali_domande, "email" : email, "contenuto" : contenuto, "modulo" : idmodulo, "errori" : errori_totali});
      var xhr = new XMLHttpRequest();
      xhr.open("POST","https://www.peradev.it/inviamail.php",false);
      xhr.setRequestHeader("Content-type","application/json");
      xhr.onreadystatechange = function(){
          if(xhr.readyState==4){
           const resp = xhr.response;
           app.dialog.alert("Email inviata con successo!", "Attenzione");
           document.getElementById("chiudi_email").click();
          }
      };
      xhr.send(myObject);
    }
   }
   })
  })
} else {
  fetch("assets/c.json")
 .then(response => response.json())
 .then(data =>{
   var dati = data.Foglio1;
   const container = document.getElementById("errori_mostra");
   errate.forEach(function(errata){
    var fetched = (Object.values(dati).filter(user => user.Code === errata));
    var fetched_finale = fetched[0];
    var domanda = fetched_finale.QUESITI;
    var risposta = fetched_finale.Risposta;
    var codice = fetched_finale.Code;
    if (risposta == "V"){
      var content = `
      <div class="risposte">
      <div class="list media-list"> 
        <ul>
        <h2>Codice : ${codice}</h2>
          <p>${domanda}</p>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" checked name="demo-media-checkbox" value="1" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Vero</div>
                </div>
                <div class="item-subtitle">La risposta corretta era vero</div>
                </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" name="demo-media-checkbox" value="2" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Falso</div>
                </div>
                <div class="item-subtitle">Hai risposto falso</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>`;
    } else {
      var content = `
      <div class="risposte">
      <div class="list media-list"> 
        <ul>
        <h2>Codice : ${codice}</h2>
          <p>${domanda}</p>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox"  name="demo-media-checkbox" value="1" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Vero</div>
                </div>
                <div class="item-subtitle">Hai risposto vero</div>
                </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input disabled type="checkbox" checked name="demo-media-checkbox" value="2" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Falso</div>
                </div>
                <div class="item-subtitle">La risposta corretta era falso</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>`;
    }
    var id = fetched_finale.Code;
  container.innerHTML += content;
  document.getElementById("invia_email").onclick = function(){
    var contenuto = (document.getElementById("errori_mostra").innerHTML);
    var email = document.getElementById("email_invio").value;
    if(email == ""){
      app.dialog.alert("Inserisci un indirizzo email valido!", "Attenzione");
    } else {
      var storage = window.localStorage;
      var idmodulo = storage.getItem("modulo");
      var myObject = JSON.stringify({"totali" : totali_domande, "email" : email, "contenuto" : contenuto, "modulo" : idmodulo, "errori" : errori_totali});
      var xhr = new XMLHttpRequest();
      xhr.open("POST","https://www.peradev.it/inviamail.php",false);
      xhr.setRequestHeader("Content-type","application/json");
      xhr.onreadystatechange = function(){
          if(xhr.readyState==4){
           const resp = xhr.response;
           app.dialog.alert("Email inviata con successo!", "Attenzione");
           document.getElementById("chiudi_email").click();
          }
      };
      xhr.send(myObject);
    }
   }
   })
  })
}
})
$(document).on('page:init', '.page[data-name="quizargomento"]', function (e) {
  const page = e.detail;
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  var idquiz = page.route.params.id;
  var swiper = app.swiper.create('.swiper20', {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    speed: 400,
    loop:true,
    spaceBetween: 100,
    onSlideChangeEnd:function(swipe){
      console.log(geSlideDataIndex(swipe))
  }
});
app.dialog.preloader('Caricamento esame...')
function countdown(a,b,c){var d,e,g,h,i,j;function k(a){return a<=9?"0"+a:a}function f(){(i=e- +new Date)<1e3?(d.innerHTML="TEMPO SCADUTO!",app.dialog.alert("Il tempo \xe8 scaduto! Il quiz \xe8 completato","Attenzione!"),document.getElementById("checcka_argomento").click()):(g=(j=new Date(i)).getUTCHours(),h=j.getUTCMinutes(),d.innerHTML=(g?g+":"+k(h):h)+":"+k(j.getUTCSeconds()),setTimeout(f,j.getUTCMilliseconds()+500))}d=document.getElementById(a),e=+new Date+1e3*(60*b+c)+500,f()}
document.getElementById("torna-home").onclick = function(){
  app.dialog.confirm('Sei sicuro di voler uscire dal QUIZ?', function () {
    app.views.main.router.navigate('/home');
  }, function(){
    
  });
}
var elenco_domande = [];
if (idmodulo == "b"){
  fetch("assets/b.json")
 .then(response => response.json())
 .then(data =>{
   var dati = data.Foglio1;
    var fetched = (Object.values(dati).filter(user => user.Code.startsWith(idquiz)));
    for (let i = 0; i < 30; i++) {
      var randomAnswer = fetched[Math.floor(Math.random() * fetched.length)];
      var domanda = randomAnswer.QUESITI;
      var risposta = randomAnswer.Risposta;
      var id = randomAnswer.Code;
      elenco_domande.push(id);
      localStorage.setItem(id, "0");
      swiper.appendSlide(`
      <div class="swiper-slide">
      <p class="testo-domanda">${domanda}</p>
      <div class="row pulsanti-domanda">
          <div idDomanda="${id}" id="v${id}" check="${risposta}" val="V" class="vero col-50">
              <a href="#">Vero</a>
          </div>
          <div idDomanda="${id}" id="f${id}" check="${risposta}" val="F"  class="falso col-50">
              <a href="#">Falso</a>
          </div>
      </div>
      <div class="avanti_indietro">
      <a class="indietro-slide" id="indietro" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_left_circle_fill</i></a>
      <a class="avanti-slide" id="avanti" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_right_circle_fill</i></a>
  </div>`);
  swiper.on('slideChange', function (e) {
      var numero = (swiper.realIndex)+1;
        document.getElementById("numero_domanda").style.display = "block";
        document.getElementById("trattino").style.display = "block";
        var n = document.getElementById("numero_domanda");
        n.innerHTML = numero + " di 30";
  });
        var vero = document.querySelectorAll(".vero");
        vero.forEach(function(v){
        v.onclick = function(){
          var iddomanda = v.getAttribute("idDomanda");
          elenco_domande = elenco_domande.filter(function(item) {
            return item !== iddomanda
        })
          var esatta = v.getAttribute("check");
          var data = v.getAttribute("val");
          var idvero = "v"+iddomanda;
          var idfalso = "f"+iddomanda;
          document.getElementById(idvero).classList.add("selezionato");
          document.getElementById(idfalso).classList.remove("selezionato");
          if (data == esatta){
            storage.setItem(iddomanda, "1");
            swiper.slideNext();
          } else {
            storage.setItem(iddomanda, "0");
            swiper.slideNext();
          }
        }
      })
      var avanti = document.querySelectorAll(".avanti-slide");
      avanti.forEach(function(a){
        a.onclick = function(){
          swiper.slideNext();
        }
      })
      var indietro = document.querySelectorAll(".indietro-slide");
      indietro.forEach(function(i){
        i.onclick = function(){
          swiper.slidePrev();
        }
      })
      var falso = document.querySelectorAll(".falso");
      falso.forEach(function(f){
        f.onclick = function(){
          var iddomanda = f.getAttribute("idDomanda");
          elenco_domande = elenco_domande.filter(function(item) {
            return item !== iddomanda
        })
          var esatta = f.getAttribute("check");
          var data = f.getAttribute("val");
          var idvero = "v"+iddomanda;
          var idfalso = "f"+iddomanda;
          document.getElementById(idfalso).classList.add("selezionato");
          document.getElementById(idvero).classList.remove("selezionato");
          if (data == esatta){
            storage.setItem(iddomanda, "1");
            swiper.slideNext();
          } else {
            storage.setItem(iddomanda, "0");
            swiper.slideNext();
          }
        }
      })
    }
    setTimeout(() => {
      swiper.slideTo(1);
      document.getElementById("barra_argomento").style.zIndex = "999999";
      var stringato = JSON.stringify(elenco_domande);
      storage.setItem("stringato", stringato);
      document.getElementById("loader").style.display = "none";
      app.dialog.close();
      countdown( "countdown2", 20, 0 );
     }, 1500);
   })
   document.getElementById("fineQuiz").onclick = function(){
    if (elenco_domande.length >0){
      const container = document.getElementById("risposte_nondate");
      container.innerHTML = "";
      var storage = window.localStorage;
      var stringatto = storage.getItem("stringato");
      var stringato_finale = JSON.parse(stringatto);
      elenco_domande.forEach(function(domanda, index){
        var content = "<a iddomanda='"+domanda+"' class='non_risposta' href='#'>"+domanda+"</a>";
        container.innerHTML +=content;
      })
      var nonRisp = document.querySelectorAll(".non_risposta");
      nonRisp.forEach(function(nr){
        nr.onclick = function(){
          var id_domanda = (nr.getAttribute("iddomanda"));
          var index_finale = stringato_finale.indexOf(id_domanda);
          var index_final = index_finale+1;
          swiper.slideTo(index_final);
          document.getElementById("chiudi_popup").click();
        }
      })
    } else {
      document.getElementById("no_risposta").style.display = "none";
    }
  }
  document.getElementById("checcka_argomento").onclick = function(){
    const storage = window.localStorage;
    storage.removeItem("stringato");
    document.getElementById("chiudi_popup").click();
    app.views.main.router.navigate('/checkargomento/');
  }
} else {
  fetch("assets/c.json")
 .then(response => response.json())
 .then(data =>{
   var dati = data.Foglio1;
    var fetched = (Object.values(dati).filter(user => user.Code.startsWith(idquiz)));
    for (let i = 0; i < 15; i++) {
      var randomAnswer = fetched[Math.floor(Math.random() * fetched.length)];
      var domanda = randomAnswer.QUESITI;
      var risposta = randomAnswer.Risposta;
      var id = randomAnswer.Code;
      elenco_domande.push(id);
      localStorage.setItem(id, "0");
      swiper.appendSlide(`
      <div class="swiper-slide">
      <p class="testo-domanda">${domanda}</p>
      <div class="row pulsanti-domanda">
          <div idDomanda="${id}" id="v${id}" check="${risposta}" val="V" class="vero col-50">
              <a href="#">Vero</a>
          </div>
          <div idDomanda="${id}" id="f${id}" check="${risposta}" val="F"  class="falso col-50">
              <a href="#">Falso</a>
          </div>
      </div>
      <div class="avanti_indietro">
      <a class="indietro-slide" id="indietro" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_left_circle_fill</i></a>
      <a class="avanti-slide" id="avanti" href="#"><i style="font-size: 12vw;" class="icons f7-icons">chevron_right_circle_fill</i></a>
  </div>`);
  swiper.on('slideChange', function (e) {
      var numero = (swiper.realIndex)+1;
      if (numero == 21){
        document.getElementById("numero_domanda").innerHTML = "";
        document.getElementById("trattino").style.display = "none";
      } else {
        document.getElementById("numero_domanda").style.display = "block";
        document.getElementById("trattino").style.display = "block";
        var n = document.getElementById("numero_domanda");
        n.innerHTML = numero + " di 15";
      }
      
  });
        var vero = document.querySelectorAll(".vero");
        vero.forEach(function(v){
        v.onclick = function(){
          var iddomanda = v.getAttribute("idDomanda");
          elenco_domande = elenco_domande.filter(function(item) {
            return item !== iddomanda
        })
          var esatta = v.getAttribute("check");
          var data = v.getAttribute("val");
          var idvero = "v"+iddomanda;
          var idfalso = "f"+iddomanda;
          document.getElementById(idvero).classList.add("selezionato");
          document.getElementById(idfalso).classList.remove("selezionato");
          if (data == esatta){
            storage.setItem(iddomanda, "1");
            swiper.slideNext();
          } else {
            storage.setItem(iddomanda, "0");
            swiper.slideNext();
          }
        }
      })
      var avanti = document.querySelectorAll(".avanti-slide");
      avanti.forEach(function(a){
        a.onclick = function(){
          swiper.slideNext();
        }
      })
      var indietro = document.querySelectorAll(".indietro-slide");
      indietro.forEach(function(i){
        i.onclick = function(){
          swiper.slidePrev();
        }
      })
      var falso = document.querySelectorAll(".falso");
      falso.forEach(function(f){
        f.onclick = function(){
          var iddomanda = f.getAttribute("idDomanda");
          elenco_domande = elenco_domande.filter(function(item) {
            return item !== iddomanda
        })
          var esatta = f.getAttribute("check");
          var data = f.getAttribute("val");
          var idvero = "v"+iddomanda;
          var idfalso = "f"+iddomanda;
          document.getElementById(idfalso).classList.add("selezionato");
          document.getElementById(idvero).classList.remove("selezionato");
          if (data == esatta){
            storage.setItem(iddomanda, "1");
            swiper.slideNext();
          } else {
            storage.setItem(iddomanda, "0");
            swiper.slideNext();
          }
        }
      })
    }
    setTimeout(() => {
      swiper.slideTo(1);
      document.getElementById("barra_argomento").style.zIndex = "999999";
      var stringato = JSON.stringify(elenco_domande);
      storage.setItem("stringato", stringato);
      document.getElementById("loader").style.display = "none";
      app.dialog.close();
      countdown( "countdown2", 10, 0 );
     }, 1500);
   })
}
   document.getElementById("fineQuiz").onclick = function(){
    if (elenco_domande.length >0){
      const container = document.getElementById("risposte_nondate");
      container.innerHTML = "";
      var storage = window.localStorage;
      var stringatto = storage.getItem("stringato");
      var stringato_finale = JSON.parse(stringatto);
      elenco_domande.forEach(function(domanda, index){
        var content = "<a iddomanda='"+domanda+"' class='non_risposta' href='#'>"+domanda+"</a>";
        container.innerHTML +=content;
      })
      var nonRisp = document.querySelectorAll(".non_risposta");
      nonRisp.forEach(function(nr){
        nr.onclick = function(){
          var id_domanda = (nr.getAttribute("iddomanda"));
          var index_finale = stringato_finale.indexOf(id_domanda);
          var index_final = index_finale+1;
          swiper.slideTo(index_final);
          document.getElementById("chiudi_popup").click();
        }
      })
    } else {
      document.getElementById("no_risposta").style.display = "none";
    }
  }
  document.getElementById("checcka_argomento").onclick = function(){
    const storage = window.localStorage;
    storage.removeItem("stringato");
    document.getElementById("chiudi_popup").click();
    app.views.main.router.navigate('/checkargomento/');
  }
})
$(document).on('page:init', '.page[data-name="argomento"]', function (e) {
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  if (idmodulo == "b"){
    fetch("assets/ba.json")
    .then(response => response.json())
    .then(data =>{
      const container = document.getElementById("elenco_sezioni");
      data.Foglio1.forEach(function(sezione){
        if (sezione.ID == "B1" || sezione.ID == "B2" || sezione.ID == "B3"){
          var content = `
          <li style="padding: 5px 15px;">
                  <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                    <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                    <div class="item-inner">
                      <div style=" font-weight: bold; " class="item-title">${sezione.Nome}</div>
                    </div>
                  </a>
                </li>`
        } else {
        var content = `
        <li style="padding: 5px 15px;">
                <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                  <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                  <div class="item-inner">
                    <div class="item-title">${sezione.Nome}</div>
                  </div>
                </a>
              </li>`
        }
      container.innerHTML+=content;
      var argomento = document.querySelectorAll(".seleziona_argomento");
      argomento.forEach(function(a){
        a.onclick = function(){
          var idargomento = a.getAttribute("codice");
          app.views.main.router.navigate('/quizargomento/' + idargomento, {  reloadCurrent: false, ignoreCache: false,});
        }
      })
      });
    })
  } else {
    fetch("assets/ca.json")
    .then(response => response.json())
    .then(data =>{
      const container = document.getElementById("elenco_sezioni");
      data.Foglio1.forEach(function(sezione){
        if (sezione.ID == "B1" || sezione.ID == "B2" || sezione.ID == "B3"){
          var content = `
          <li style="padding: 5px 15px;">
                  <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                    <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                    <div class="item-inner">
                      <div style=" font-weight: bold; " class="item-title">${sezione.Nome}</div>
                    </div>
                  </a>
                </li>`
        } else {
        var content = `
        <li style="padding: 5px 15px;">
                <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                  <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                  <div class="item-inner">
                    <div class="item-title">${sezione.Nome}</div>
                  </div>
                </a>
              </li>`
        }
      container.innerHTML+=content;
      var argomento = document.querySelectorAll(".seleziona_argomento");
      argomento.forEach(function(a){
        a.onclick = function(){
          var idargomento = a.getAttribute("codice");
          app.views.main.router.navigate('/quizargomento/' + idargomento, {  reloadCurrent: false, ignoreCache: false,});
        }
      })
      });
    })
  }
})
$(document).on('page:init', '.page[data-name="domanderisposte"]', function (e) {
  app.preloader.show();
  const storage = window.localStorage;
  const page = e.detail;
  var idquiz = page.route.params.id;
  var idargomento = storage.getItem("modulo");
  if (idargomento == "b"){
    var url = "assets/b.json";
  } else {
    var url = "assets/c.json";
  }
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    var dati = data.Foglio1;
    var fetched = (Object.values(dati).filter(user => user.Code.startsWith(idquiz)));
    const container = document.getElementById("errori_mostra");
    fetched.forEach(function(domanda){
      var risposta = domanda.Risposta;
      var codice = domanda.Code;
      if (risposta == "V"){
        var content = `
        <div class="risposte">
        <div class="list media-list"> 
          <ul>
          <h2>Codice : ${codice}</h2>
            <p>${domanda.QUESITI}</p>
            <li>
              <label class="item-checkbox item-content">
                <input disabled type="checkbox" checked name="demo-media-checkbox" value="1" />
                <i class="icon icon-checkbox"></i>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">Vero</div>
                  </div>
                  </div>
              </label>
            </li>
            <li>
              <label class="item-checkbox item-content">
                <input disabled type="checkbox" name="demo-media-checkbox" value="2" />
                <i class="icon icon-checkbox"></i>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">Falso</div>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>`;
      } else {
        var content = `
        <div class="risposte">
        <div class="list media-list"> 
          <ul>
          <h2>Codice : ${codice}</h2>
          <p>${domanda.QUESITI}</p>
            <li>
              <label class="item-checkbox item-content">
                <input disabled type="checkbox"  name="demo-media-checkbox" value="1" />
                <i class="icon icon-checkbox"></i>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">Vero</div>
                  </div>
                  </div>
              </label>
            </li>
            <li>
              <label class="item-checkbox item-content">
                <input disabled type="checkbox" checked name="demo-media-checkbox" value="2" />
                <i class="icon icon-checkbox"></i>
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">Falso</div>
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>`;
      }
      container.innerHTML += content;
    })
    app.preloader.hide();
    })
})
$(document).on('page:init', '.page[data-name="ripasso"]', function (e) {
  //ripasso
  const storage = window.localStorage;
  var idmodulo = storage.getItem("modulo");
  if (idmodulo == "b"){
    fetch("assets/ba.json")
    .then(response => response.json())
    .then(data =>{
      const container = document.getElementById("elenco_sezioni");
      data.Foglio1.forEach(function(sezione){
        if (sezione.ID == "B1" || sezione.ID == "B2" || sezione.ID == "B3"){
          var content = `
          <li style="padding: 5px 15px;">
                  <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                    <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                    <div class="item-inner">
                      <div style=" font-weight: bold; " class="item-title">${sezione.Nome}</div>
                    </div>
                  </a>
                </li>`
        } else {
        var content = `
        <li style="padding: 5px 15px;">
                <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                  <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                  <div class="item-inner">
                    <div class="item-title">${sezione.Nome}</div>
                  </div>
                </a>
              </li>`
        }
      container.innerHTML+=content;
      var argomento = document.querySelectorAll(".seleziona_argomento");
      argomento.forEach(function(a){
        a.onclick = function(){
          var idargomento = a.getAttribute("codice");
          app.views.main.router.navigate('/domanderisposte/' + idargomento, {  reloadCurrent: false, ignoreCache: false,});
        }
      })
      });
    })
  } else {
    fetch("assets/ca.json")
    .then(response => response.json())
    .then(data =>{
      const container = document.getElementById("elenco_sezioni");
      data.Foglio1.forEach(function(sezione){
        if (sezione.ID == "B1" || sezione.ID == "B2" || sezione.ID == "B3"){
          var content = `
          <li style="padding: 5px 15px;">
                  <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                    <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                    <div class="item-inner">
                      <div style=" font-weight: bold; " class="item-title">${sezione.Nome}</div>
                    </div>
                  </a>
                </li>`
        } else {
        var content = `
        <li style="padding: 5px 15px;">
                <a href="#" codice="${sezione.ID}" class="seleziona_argomento item-link item-content">
                  <div style="color: var(--azzurro);font-weight: 800;" class="item-media">${sezione.ID}</div>
                  <div class="item-inner">
                    <div class="item-title">${sezione.Nome}</div>
                  </div>
                </a>
              </li>`
        }
      container.innerHTML+=content;
      var argomento = document.querySelectorAll(".seleziona_argomento");
      argomento.forEach(function(a){
        a.onclick = function(){
          var idargomento = a.getAttribute("codice");
          app.views.main.router.navigate('/domanderisposte/' + idargomento, {  reloadCurrent: false, ignoreCache: false,});
        }
      })
      });
    })
  }
})
