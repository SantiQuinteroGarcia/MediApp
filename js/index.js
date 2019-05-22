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
 */var pantalladecarga;
 var pantallaprincipal;

 window.onload = inicio;
function inicio(){

    inicializarvariables();
    main();
}

function main(){
    
    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantallaprincipal,pantalladecarga)", 1000);
    }


var app = {
    // Application Constructor
    initialize: function() {
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

        //acá escucha los botones--------------------------------------------------------------------
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





function inicializarvariables(){
 
    pantalladecarga=document.getElementById("pantallacarga");
    pantallaprincipal=document.getElementById("inicio");
}

function mostrarpantalla(pantalla){

    pantalla.className = pantalla.className.replace( /(?:^|\s)ocultar(?!\S)/g , '' );
}

 function cambiopantalla(pantalla, pantallaanterior){
    
    pantallaanterior.className += " ocultar";
    pantalla.className = pantalla.className.replace( /(?:^|\s)ocultar(?!\S)/g , '' );
}

function ocultar(){

    document.getElementById("pantallacarga").className = "ocultar";
    document.getElementById("inicio").className = "ocultar";
    document.getElementById("pantallaMedicamentos").className = "ocultar";
    document.getElementById("citas").className = "ocultar";
    document.getElementById("pantallaAnadirMedicina").className = "ocultar";
}

function mostrarInicio(){

    ocultar();
    document.getElementById("inicio").className = "Pantalla1 animated fadeIn";
}

function mostrarMedicamentos(){

    ocultar();
    document.getElementById("pantallaMedicamentos").className = "Pantalla2 animated fadeIn";
}

function mostrarcitas(){

    ocultar();
    document.getElementById("citas").className = "Pantalla2 animated fadeIn";
}

function mostrarAnadirMedicina(){

    ocultar();
    document.getElementById("pantallaAnadirMedicina").className = "Pantalla2 animated fadeIn";
}

function configurarDias(){

    document.getElementById("btnDesplegarInicio").src = "img/desplegar hoverinicio.png";
}



//acá pone las funciones-------------------------------------------------------------------------------------

app.initialize();