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
        document.getElementById("btnDesplegarInicio").addEventListener("click", configurarDias);
        document.getElementById("btnCantidadInicio").addEventListener("click", configurarHora);
        document.getElementById("btnCerrarConfigurarDia").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnVolverAAnadirMedicina").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnVolverDeSonidoAAnadirMedicina").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnGuardar").addEventListener("click", guardarMedicamento);
        document.getElementById("btnguardarCitas").addEventListener("click", guardarCitas);
        document.getElementById("btnVolverAInicio").addEventListener("click", mostrarInicio);
        document.getElementById("btnañadircita2").addEventListener("click", pintarCitas);

        document.getElementById("btnañadircita").addEventListener("click", mostraranadircitas);
        document.getElementById("btnvolver").addEventListener("click", volvercitas);
        
        document.getElementById("btnConfigurarForma").addEventListener("click", configurarForma);
        document.getElementById("btnConfigurarColor").addEventListener("click", configurarColor);
        document.getElementById("btnConfigurarSonido").addEventListener("click", configurarSonido);
        document.getElementById("btnCerrarConfigurarForma").addEventListener("click", seguirConfigurandoMedicina);
        document.getElementById("btnCerrarConfigurarColor").addEventListener("click", seguirConfigurandoMedicina);

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
}

function mostrarInicio() {

    ocultar();
    document.getElementById("inicio").className = "Pantalla1 animated fadeIn";
}

function mostrarMedicamentos() {

    ocultar();
    document.getElementById("pantallaMedicamentos").className = "Pantalla2 animated fadeIn";
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
}

function mostraranadircitas() {

    ocultar();
    document.getElementById("pantallaAnadirCita").className = "Pantalla2 animated fadeIn";
}

function configurarDias() {

    document.getElementById("btnDesplegarInicio").src = "img/desplegar hoverinicio.png";
    document.getElementById("divConfigurarDia").className = "zindex";
    //document.getElementById("divConfigurarHorario").className = "divConfigZindex";

}

function configurarHora() {

    document.getElementById("btnCantidadInicio").src = "img/desplegar hoverinicio.png";
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
}

function guardarMedicamento() {

    var medicamento = document.getElementById("nombremedtxt").value;
    var cantidad = document.getElementById("cantidadtxt").value;
    var hora2 = document.getElementById("horamedtxt").value;
    var fecha2 = document.getElementById("diatxt").value;



    if (medicamento.length > 0 && cantidad.length > 0 && fecha2.length > 0) {
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
            document.getElementById("medicotxt").value = "";
            document.getElementById("fechatxt").value = "";
            document.getElementById("horatxt").value = "";


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
        }

    }
    else {
        alert("rellene los campos");
    }
}

function pintarCitas() {


    //se recorre el arreglo de rutinas  
    var i = 0

    var nombrecitas = localStorage.getItem("CitasMedica");
    var listacitas = JSON.parse(nombrecitas);
    console.log(listacitas);


    /*Mostrar datos almacenados*/
    for (i = 0; i < listacitas.length; i++) {
        document.getElementById("nombrecitas").innerHTML = listacitas[i].citas;
    }

}

app.initialize();