/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var pantalladecarga;
var pantallaprincipal;
var cit = new Object();
let citasmed;
var med = new Object();
let medimed;
var objetoNota = new Object();


var audio, play, stop;
var contadorCalendario = 0;
var inicioOmedicamentos = 1;

window.onload = inicio;
function inicio() {

    inicializarvariables();
    main();
}

function main() {

    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantallaprincipal,pantalladecarga)", 1000);
}


var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById("btnMedicamentos").addEventListener("click", mostrarMedicamentos);
        document.getElementById("btncitas").addEventListener("click", mostrarcitas);
        document.getElementById("btninicio").addEventListener("click", mostrarInicio);
        document.getElementById("btnMedicamentosAInicio").addEventListener("click", mostrarInicio);
        //document.getElementById("btnMedicamentosAMedicamentos").addEventListener("click", mostrarMedicamentos);
        document.getElementById("btnMedicamentosACitas").addEventListener("click", mostrarcitas);
        document.getElementById("btnCitasAMedicamentos").addEventListener("click", mostrarMedicamentos);
        document.getElementById("btnAnadirMedicina").addEventListener("click", mostrarAnadirMedicina);
        document.getElementById("btnAnadirMedicinaDesdeInicio").addEventListener("click", mostrarAnadirMedicina);
        document.getElementById("btnDesplegarInicio").addEventListener("click", configurarDias);
        document.getElementById("btnCantidadInicio").addEventListener("click", configurarHora);
        document.getElementById("btnCerrarConfigurarDia").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnVolverAAnadirMedicina").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnVolverDeSonidoAAnadirMedicina").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnGuardar").addEventListener("click", guardarMedicamento);
        document.getElementById("btnGuardar").addEventListener("click", pintarMedicamentos);
        document.getElementById("btnGuardar").addEventListener("click", pintarMedicamentospt);
        document.getElementById("btnguardarCitas").addEventListener("click", guardarCitas);
        document.getElementById("btnVolverAInicio").addEventListener("click", mostrarInicio);
        

       //document.getElementById("btnañadircita2").addEventListener("click", pintarCitas);

        document.getElementById("btnañadircita").addEventListener("click", mostraranadircitas);
        document.getElementById("btnvolver").addEventListener("click", volvercitas);
        
        document.getElementById("btnConfigurarForma").addEventListener("click", configurarForma);
        document.getElementById("btnConfigurarColor").addEventListener("click", configurarColor);
        document.getElementById("btnConfigurarSonido").addEventListener("click", configurarSonido);
        document.getElementById("btnCerrarConfigurarForma").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnCerrarConfigurarColor").addEventListener("click", seguirConfigurandoMedicina);

        audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('loop', 'loop');
        document.getElementById("cancionUno").addEventListener("click", reproducirCancionUno);
        document.getElementById("cancionDos").addEventListener("click", reproducirCancionDos);
        document.getElementById("cancionTres").addEventListener("click", reproducirCancionTres);

        document.getElementById("flechaDerechaCalendarioUno").addEventListener("click", mostrarCalendarioDos);
        document.getElementById("flechaIzquierdaCalendarioDos").addEventListener("click", mostrarCalendarioUno);
        document.getElementById("flechaDerechaCalendarioTres").addEventListener("click", mostrarCalendarioUno);
        document.getElementById("flechaDerechaCalendarioDos").addEventListener("click", mostrarCalendarioTres);
        document.getElementById("flechaIzquierdaCalendarioUno").addEventListener("click", mostrarCalendarioTres);
        document.getElementById("flechaIzquierdaCalendarioTres").addEventListener("click", mostrarCalendarioDos);

        document.getElementById("nombremedpt1").addEventListener("click", configurarAlarma);        
        document.getElementById("nombremed1").addEventListener("click", configurarAlarma);        
        document.getElementById("btnCerrarConfigurarAlarma").addEventListener("click", mostrarInicioOmostrarMedicamentos);        
        document.getElementById("btnPostergarAlarma").addEventListener("click", postergarAlarma);        
        document.getElementById("btnCerrarPostergar").addEventListener("click", configurarAlarma);      
        document.getElementById("btnReprogramarAlarma").addEventListener("click", reprogramarAlarma);        
        document.getElementById("btnCerrarReprogramar").addEventListener("click", configurarAlarma);      
        document.getElementById("cancelarReprogramarHora").addEventListener("click", configurarAlarma);   
        document.getElementById("btnEditarAlarma").addEventListener("click", mostrarEditarMedicina);   
        
        document.getElementById("btnInicioAMas").addEventListener("click", mostrarMas);
        document.getElementById("btnCitasAMas").addEventListener("click", mostrarMas);
        document.getElementById("btnMedicamentosAMas").addEventListener("click", mostrarMas);
        document.getElementById("btnMasAInicio").addEventListener("click", mostrarInicio);
        document.getElementById("btnMasAMedicamentos").addEventListener("click", mostrarMedicamentos);
        document.getElementById("btnMasACitas").addEventListener("click", mostrarcitas);

        document.getElementById("btnMiDiario").addEventListener("click", mostrarMiDiario);
        document.getElementById("btnanadirNota").addEventListener("click", mostrarNota2);
        document.getElementById("volverDiario").addEventListener("click", mostrarMas);
        document.getElementById("btnvolverNota").addEventListener("click", mostrarMiDiario);

        document.getElementById("btnguardarNota").addEventListener("click", guardarNota);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function inicializarvariables() {

    pantalladecarga = document.getElementById("pantallacarga");
    pantallaprincipal = document.getElementById("inicio");
}

function mostrarpantalla(pantalla) {

    pantalla.className = pantalla.className.replace(/(?:^|\s)ocultar(?!\S)/g, '');
}

function cambiopantalla(pantalla, pantallaanterior) {

    pantallaanterior.className += " ocultar";
    pantalla.className = pantalla.className.replace(/(?:^|\s)ocultar(?!\S)/g, '');
}

function ocultar() {

    document.getElementById("pantallacarga").className = "ocultar";
    document.getElementById("inicio").className = "ocultar";
    document.getElementById("pantallaMedicamentos").className = "ocultar";
    document.getElementById("citas").className = "ocultar";
    document.getElementById("pantallaAnadirMedicina").className = "ocultar";
    document.getElementById("pantallaMas").className = "ocultar";
    document.getElementById("divMidiario").className = "ocultar";
    document.getElementById("divNota").className = "ocultar";

    document.getElementById("divconfigurarAlarma").className = "ocultar";
    document.getElementById("divConfigurarDia").className = "ocultar";
    document.getElementById("divConfigurarHora").className = "ocultar";
    document.getElementById("divConfigurarForma").className = "ocultar";
    document.getElementById("divConfigurarSonido").className = "ocultar";
    document.getElementById("divConfigurarColor").className = "ocultar";
    document.getElementById("divPostergarAlarma").className ="ocultar";
    document.getElementById("divReprogramarAlarma").className = "ocultar";
}

function mostrarInicio() {

    ocultar();
    document.getElementById("inicio").className = "Pantalla1 animated fadeIn";
    inicioOmedicamentos = 1;
}

function mostrarMedicamentos() {

    ocultar();
    document.getElementById("pantallaMedicamentos").className = "Pantalla2 animated fadeIn";
    inicioOmedicamentos = 2;
}

function mostrarInicioOmostrarMedicamentos(){
    if (inicioOmedicamentos == 1){
        mostrarInicio();
    }
    if (inicioOmedicamentos == 2){
        mostrarMedicamentos();
    }
}

function mostrarcitas() {

    ocultar();
    document.getElementById("citas").className = "Pantalla2 animated fadeIn";
}

function volvercitas() {

    pantallaAnadirCita.className += " ocultar";
    document.getElementById("citas").className = "Pantalla2 animated fadeIn";
}

function mostrarAnadirMedicina() {

    ocultar();
    document.getElementById("pantallaAnadirMedicina").className = "Pantalla2 animated fadeIn";
    document.getElementById("tituloMedicina").innerHTML = "Añadir medicina";
}

function mostrarEditarMedicina(){
    ocultar();
    document.getElementById("pantallaAnadirMedicina").className = "Pantalla2 animated fadeIn";
    document.getElementById("tituloMedicina").innerHTML = "Editar medicina";
}

function mostraranadircitas() {

    ocultar();
    document.getElementById("pantallaAnadirCita").className = "Pantalla2 animated fadeIn";
}

function mostrarMas(){

    ocultar();
    document.getElementById("pantallaMas").className = "Pantalla2 animated fadeIn";
}

function mostrarMiDiario(){

    ocultar();
    document.getElementById("divMidiario").className = "Pantalla2 animated fadeIn";
}

function mostrarNota(){

    ocultar();
    document.getElementById("divNota").className = "Pantalla2 animated fadeIn";
}

function mostrarNota2(){

    ocultar();
    document.getElementById("divNota").className = "Pantalla2 animated fadeIn";
    document.getElementById("nombreNota").value = "";
    document.getElementById("descripcionNota").value = "";
    document.getElementById('nombreNota').disabled = false;
}

function configurarDias() {

    document.getElementById("btnDesplegarInicio").src = "img/desplegar hoverinicio.png";
    document.getElementById("divConfigurarDia").className = "zindex";
    //document.getElementById("divConfigurarHorario").className = "divConfigZindex";

}

function configurarHora() {

    document.getElementById("btnCantidadInicio").src = "img/cantidad hover.png";
    document.getElementById("divConfigurarHora").className = "zindex";
}

function configurarForma(){

    document.getElementById("btnConfigurarForma").src = "img/forma hoverinicio.png";
    document.getElementById("divConfigurarForma").className = "zindex";
}

function configurarColor(){

    document.getElementById("btnConfigurarColor").src = "img/color hoverinicio.png";
    document.getElementById("divConfigurarColor").className = "zindex";
}

function configurarSonido(){

    document.getElementById("btnConfigurarSonido").src = "img/sonido hoverinicio.png";
    document.getElementById("divConfigurarSonido").className = "zindex";
}

function seguirConfigurandoMedicina() {

    document.getElementById("btnDesplegarInicio").src = "img/desplegarinicio.png";
    document.getElementById("divConfigurarDia").className = "ocultar";
    //document.getElementById("divConfigurarHorario").className = "divConfig alto90";

    document.getElementById("btnCantidadInicio").src = "img/cantidadinicio.png";
    document.getElementById("divConfigurarHora").className = "ocultar";

    document.getElementById("btnConfigurarForma").src = "img/formainicio.png";
    document.getElementById("divConfigurarForma").className = "ocultar";

    document.getElementById("btnConfigurarColor").src = "img/colorinicio.png";
    document.getElementById("divConfigurarColor").className = "ocultar";

    document.getElementById("btnConfigurarSonido").src = "img/sonidoinicio.png";
    document.getElementById("divConfigurarSonido").className = "ocultar";

    audio.pause();
}

function reproducirCancionUno(){
    audio.pause();
    audio.setAttribute('src', 'sounds/BigHornsIntro.mp3');

    document.getElementById("divCancionUno").className = "margenArriba divSonidoElegido";
    document.getElementById("divCancionDos").className = "margenArriba";
    document.getElementById("divCancionTres").className = "margenArriba";
    document.getElementById("cancionUno").className = "colorTipoLetra marginSiete letraPequeña";
    document.getElementById("cancionDos").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("cancionTres").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("imgCancionUno").src = "img/volumen.png";
    document.getElementById("imgCancionDos").src = "img/sonido1inicio.png";
    document.getElementById("imgCancionTres").src = "img/sonido1inicio.png";

    
    audio.play();
}

function reproducirCancionDos(){
    audio.pause();
    audio.setAttribute('src', 'sounds/LesliesStrutSting.mp3');
    
    document.getElementById("divCancionUno").className = "margenArriba";
    document.getElementById("divCancionDos").className = "margenArriba divSonidoElegido";
    document.getElementById("divCancionTres").className = "margenArriba";
    document.getElementById("cancionUno").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("cancionDos").className = "colorTipoLetra marginSiete letraPequeña";
    document.getElementById("cancionTres").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("imgCancionUno").src = "img/sonido1inicio.png";
    document.getElementById("imgCancionDos").src = "img/volumen.png";
    document.getElementById("imgCancionTres").src = "img/sonido1inicio.png";

    audio.play();
}

function reproducirCancionTres(){
    audio.pause();
    audio.setAttribute('src', 'sounds/ShortGuitarClip.mp3');

    document.getElementById("divCancionUno").className = "margenArriba";
    document.getElementById("divCancionDos").className = "margenArriba";
    document.getElementById("divCancionTres").className = "margenArriba divSonidoElegido";
    document.getElementById("cancionUno").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("cancionDos").className = "color2TipoLetra marginSiete letraPequeña";
    document.getElementById("cancionTres").className = "colorTipoLetra marginSiete letraPequeña";
    document.getElementById("imgCancionUno").src = "img/sonido1inicio.png";
    document.getElementById("imgCancionDos").src = "img/sonido1inicio.png";
    document.getElementById("imgCancionTres").src = "img/volumen.png";
    
    audio.play();
}

function mostrarCalendarioUno(){

    
    document.getElementById("divCalendarioDos").className = "ocultar";
    document.getElementById("divCalendarioTres").className = "ocultar";

    if(contadorCalendario == 2){
        document.getElementById("divCalendarioUno").className = "animated fadeInLeft";
    }

    if(contadorCalendario == 3){
        document.getElementById("divCalendarioUno").className = "animated fadeInRight";
    }

    contadorCalendario = 1;
}

function mostrarCalendarioDos(){

    document.getElementById("divCalendarioUno").className = "ocultar";
    document.getElementById("divCalendarioDos").className = "";
    document.getElementById("divCalendarioTres").className = "ocultar";

    if(contadorCalendario == 3){
        document.getElementById("divCalendarioDos").className = "animated fadeInLeft";
    }

    if(contadorCalendario == 1 || contadorCalendario == 0){
        document.getElementById("divCalendarioDos").className = "animated fadeInRight";
    }

    contadorCalendario = 2;
}

function mostrarCalendarioTres(){

    document.getElementById("divCalendarioUno").className = "ocultar";
    document.getElementById("divCalendarioDos").className = "ocultar";
    document.getElementById("divCalendarioTres").className = "";

    if(contadorCalendario == 1  || contadorCalendario == 0){
        document.getElementById("divCalendarioTres").className = "animated fadeInLeft";
    }
    if(contadorCalendario == 2){

        document.getElementById("divCalendarioTres").className = "animated fadeInRight";
    }

    contadorCalendario = 3;
}

function configurarAlarma(){
    document.getElementById("divconfigurarAlarma").className = "zindex";
    document.getElementById("divPostergarAlarma").className ="ocultar";
    document.getElementById("divReprogramarAlarma").className = "ocultar";
}

function postergarAlarma(){
    document.getElementById("divPostergarAlarma").className ="zindex";
}

function reprogramarAlarma(){
    document.getElementById("divReprogramarAlarma").className = "zindex";
}

function guardarMedicamento() {

    var medicamento = document.getElementById("nombremedtxt").value;
    var cantidad = document.getElementById("cantidadtxt").value;
    var hora2 = document.getElementById("horamedtxt").value;
    var fecha2 = document.getElementById("diatxt").value;



    if (medicamento.length > 0  > 0 && fecha2.length > 0) {
        var medicamentosmedicos = new Object();

        medicamentosmedicos.medicamento = medicamento;
        medicamentosmedicos.cantidad = cantidad;
        medicamentosmedicos.hora2 = hora2;
        medicamentosmedicos.fecha2 = fecha2;


        let medimed = localStorage.getItem("medicamentosmedicos") != null ? JSON.parse(localStorage.getItem("medicamentosmedicos")) : [];
        med = medimed.filter(function (medimed) { return medimed.medicamento == medicamento; });


        if (med.length > 0) {
            alert("Ya se encuentra registrado este titulo de citas , por favor intentelo con otro");

        }
        else {
            //toda cambiarlo para que vaya a otra pantalla
            medimed.push(medicamentosmedicos);
            localStorage.setItem("medicamentosmedicos", JSON.stringify(medimed));

            document.getElementById("nombremedtxt").value = "";
            document.getElementById("cantidadtxt").value = "";
            document.getElementById("unidadestxt").value = "";
            document.getElementById("horamedtxt").value = "";
            document.getElementById("diatxt").value = "";
        }
    }
    else {
        alert("rellene los campos");
    }
}

function guardarCitas() {
    var citas = document.getElementById("citatxt").value;
    var medico = document.getElementById("medicotxt").value;
    var clinica = document.getElementById("clinicatxt").value;
    var fecha = document.getElementById("fechatxt").value;
    var hora = document.getElementById("horatxt").value;


    if (citas.length > 0 && medico.length > 0 && clinica.length > 0 && fecha.length > 0 && hora.length > 0) {
        var CitasMedica = new Object();

        CitasMedica.citas = citas;
        CitasMedica.medico = medico;
        CitasMedica.clinica = clinica;
        CitasMedica.fecha = fecha;
        CitasMedica.hora = hora;

        let citasmed = localStorage.getItem("CitasMedica") != null ? JSON.parse(localStorage.getItem("CitasMedica")) : [];
        cit = citasmed.filter(function (citasmed) { return citasmed.citas == citas; });


        if (cit.length > 0) {
            alert("Ya se encuentra registrado este titulo de citas , por favor intentelo con otro");

        }
        else {
            //toda cambiarlo para que vaya a otra pantalla
            citasmed.push(CitasMedica);
            localStorage.setItem("CitasMedica", JSON.stringify(citasmed));

            document.getElementById("citatxt").value = "";
            document.getElementById("medicotxt").value = "";
            document.getElementById("clinicatxt").value = "";
            document.getElementById("fechatxt").value = "";
            document.getElementById("horatxt").value = "";
            document.getElementById("notatxt").value = "";
            
            pintarCitas();
        }

    }
    else {
        alert("rellene los campos");
    }
}

function pintarCitas() {


    //se recorre el arreglo de rutinas  

    var nombrecitas = localStorage.getItem("CitasMedica");
    var listacitas = JSON.parse(nombrecitas);
    console.log(listacitas);

    var arrayCita = ["nombrecitas1", "nombrecitas2", "nombrecitas3", "nombrecitas4", "nombrecitas5", "nombrecitas6"];

    for(i = 0; i<listacitas.length; i++){
  
        document.getElementById("citasagregadas").children[1].children[i].className = "paddingAbajo displayBlock";
        document.getElementById(arrayCita[i]).innerHTML = listacitas[i].citas;
    }
}


function pintarMedicamentos() {


    //se recorre el arreglo de rutinas  
    var i = 0

    var nombremedecamentos = localStorage.getItem("medicamentosmedicos");
    var listacitas = JSON.parse(nombremedecamentos);
    console.log(listacitas);

    var arrayMed = ["nombremed1", "nombremed2", "nombremed3"];
    var arrayHora = ["hora1", "hora2", "hora3"];
    /*Mostrar datos almacenados*/
    for (i = 0; i < listacitas.length; i++) {
        
        if(listacitas[i].medicamento){
        
            document.getElementById(arrayMed[i]).innerHTML = listacitas[i].medicamento;
            document.getElementById(arrayHora[i]).innerHTML = listacitas[i].hora2;
            document.getElementById("mostrarmed1").children[i].children[0].className = "centrarVerticalmente";
            document.getElementById("mostrarmed1").children[i].children[2].className = "centrarVerticalmente";
            document.getElementById("mostrarmed1").children[i].className = "paddingAbajo";
        }
    }
}

function pintarMedicamentospt() {


    //se recorre el arreglo de rutinas  
    var i = 0

    var nombremedecamentos = localStorage.getItem("medicamentosmedicos");
    var listacitas = JSON.parse(nombremedecamentos);
    console.log(listacitas);

    var arrayMed = ["nombremedpt1", "nombremedpt2", "nombremedpt3"];
    var arrayHora = ["horapt1", "horapt2", "hora3pt"];


    /*Mostrar datos almacenados*/
    for (i = 0; i < listacitas.length; i++) {
        
        if(listacitas[i].medicamento){
        
            document.getElementById(arrayMed[i]).innerHTML = listacitas[i].medicamento;
            document.getElementById(arrayHora[i]).innerHTML = listacitas[i].hora2;
            document.getElementById("mostrarmed1pm").children[i].children[0].className = "centrarVerticalmente";
            document.getElementById("mostrarmed1pm").children[i].children[2].className = "centrarVerticalmente";
            document.getElementById("mostrarmed1pm").children[i].className = "paddingAbajo";
        }
    }
}

function guardarNota(){

    let nota = localStorage.getItem("itemNota") != null ? JSON.parse(localStorage.getItem("itemNota")) : [];
    var index="";
    var nombreAEncontrar=document.getElementById("nombreNota").value;;

    for(var i = 0; i < nota.length; i++) {
            
        if (nota[i].nombre == nombreAEncontrar){
                        
            index = i+1;
        	break;
    	}
    }
    if(index>0)
    {
        objetoNota.nombre = document.getElementById("nombreNota").value;
        objetoNota.descripcion = document.getElementById("descripcionNota").value;
        nota[index-1]=objetoNota;
        localStorage.setItem("itemNota", JSON.stringify(nota));
        document.getElementById('nombreNota').disabled = false;
        pintarNotas();
    }
    else
    {
        objetoNota.nombre = document.getElementById("nombreNota").value;
        objetoNota.descripcion = document.getElementById("descripcionNota").value;

        if(objetoNota.nombre.length == 0 || objetoNota.descripcion.length == 0){

        alert("Rellene todos los campos");

        }else
        {
            document.getElementById('nombreNota').disabled = false;
            nota.push(objetoNota);
            localStorage.setItem("itemNota", JSON.stringify(nota));

            document.getElementById("nombreNota").value = "";
            document.getElementById("descripcionNota").value = "";

            pintarNotas();
        }
    }
    
}

function pintarNotas()
{
    let nota = localStorage.getItem("itemNota") != null ? JSON.parse(localStorage.getItem("itemNota")) : [];
    $("#contNotas").empty();
    for (let i = 0;i < nota.length; i++) 
    {
        $("#contNotas").append(" <div class='divDiario' id='btnNota1'><img src='img/nota"+i+"inicio.png' onclick='editarNota("+i+")' id='btnNota11'></div>");
        
    }

    mostrarMiDiario();
}

function editarNota(i)
{
    
    let nota = localStorage.getItem("itemNota") != null ? JSON.parse(localStorage.getItem("itemNota")) : [];
    document.getElementById("nombreNota").value = nota[i].nombre ;
    document.getElementById("descripcionNota").value = nota[i].descripcion;
    document.getElementById('nombreNota').disabled = true;
    mostrarNota();
}

app.initialize();