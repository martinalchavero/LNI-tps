//distintos botones para las distintas figuras retoricas

let estado;

//----- variables 1
let opacidad;
let aumentando=false;

//----- variables 2
let circulos = [];
let circuloRojoPausado = false;

//------ variable 3
let circuloCompleto = false;

//------ variable 4
let tamañoCirculo;
let velocidad;
let titilacion;

//--------- variable 5
let circulos1 = [];
let circuloObjetivo;

//----variable 6
let angulo = 0;
let velocidad1 = 0.05;

function setup() {
    createCanvas(windowWidth, windowHeight);
    estado = 0;
    //-------1-------
    opacidad=10;
    //-------2-------
    // Crear círculos con baja opacidad
    for (let i = 0; i < 50; i++) {
        let circulo = {
          x: random(width),
          y: random(height),
          tamano: random(20, 50),
          velocidadX: random(-2, 2),
          velocidadY: random(-2, 2),
          color: color(random(250), random(0, 2), random(0, 2), 95) // Color aleatorio con opacidad
        };
        circulos.push(circulo);
      }
    //----------3--------
    //-------4---------
    tamañoCirculo = 100; // Tamaño inicial del círculo
    velocidad = 3; // Velocidad de aumento del tamaño
    titilacion = true; // Comienza titilando
    //-------5----
    // Crear círculos aleatorios
    for (let i = 0; i < 120; i++) {
        let x = random(width);
        let y = random(height);
        let tamaño = random(5, 45);
        circulos1.push({ x, y, tamaño, creciendo: true });
  }
    // Crear el círculo rojo
    circuloObjetivo = { x: random(width), y: random(height), tamaño: 10, creciendo: true };
}

function draw() {
    //inicio
    if (estado == 0) {
        push();
        //( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);
        background(255);
            // Botón - Repetición
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.08) && (mouseY < height * 0.08 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.08, width , height * 0.07);
                    fill(255);
                    textAlign(CENTER,CENTER);
                    textSize(25);
                    text("Repetición", width * 0.5, height * 0.115);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.08, width , height * 0.07);
                    noStroke();
                    fill(0);
                    textAlign(CENTER,CENTER);
                    textSize(25);
                    text("Repetición", width * 0.5, height * 0.115);
                pop();
            }

            // Botón - Acumulación
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.2) && (mouseY < height * 0.2 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.2, width, height * 0.07);
                    fill(255);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Acumulación", width * 0.5, height * 0.238);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.2, width, height * 0.07);
                    noStroke();
                    fill(0);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Acumulación", width * 0.5, height * 0.238);
                pop();
            }

            // Botón - Elipsis
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.32) && (mouseY < height * 0.32 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.32, width, height * 0.07);
                    fill(255);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Elipsis", width * 0.5, height * 0.355);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.32, width, height * 0.07);
                    noStroke();
                    fill(0);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Elipsis", width * 0.5, height * 0.355);
                pop();
            }

            // Botón - Hiperbole
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.45) && (mouseY < height * 0.45 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.45, width, height * 0.07);
                    fill(255);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Hipérbole", width * 0.5, height * 0.49);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.45, width, height * 0.07);
                    noStroke();
                    fill(0);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Hipérbole", width * 0.5, height * 0.49);
                pop();
            }

            // Botón - Metáfora
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.58) && (mouseY < height * 0.58 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.58, width, height * 0.07);
                    fill(255);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Metáfora", width * 0.5, height * 0.62);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.58, width, height * 0.07);
                    noStroke();
                    fill(0);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Metáfora", width * 0.5, height * 0.62);
                pop();
            }

            // Botón - Metonimia
            if ((mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.71) && (mouseY < height * 0.71 + height * 0.07)) {
                push();
                    fill(0);
                    noStroke();
                    rect(0, height * 0.71, width, height * 0.07);
                    fill(255);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Metonimia", width * 0.5, height * 0.75);
                pop();
            } else {
                push();
                    cursor(ARROW);
                    strokeWeight(2);
                    stroke(0);
                    fill(255);
                    rect(0, height * 0.71, width, height * 0.07);
                    noStroke();
                    fill(0);
                    textSize(25);
                    textAlign(CENTER,CENTER);
                    text("Metonimia", width * 0.5, height * 0.75);
                pop();
            }
        pop();
    }
    else if (estado == 1) { //repeticion
        //idea: fondo blanco cuatro circulos dos ariba y dos abajo, mas uno central en rojo donde al ser presionado hace que vaya subiendo la opacidad de los otros cuatro circulos llegando al rojo y al dejar de ser presionado vuelven a no tener color
        background(255);
        noStroke();
        push();
        fill(255,0,0,opacidad);
        circle(width * 0.25, height * 0.3, 150);
        circle(width * 0.75, height * 0.3, 150);
        circle(width * 0.25, height * 0.7, 150);
        circle(width * 0.75, height * 0.7, 150);
        pop();

        if (dist(mouseX, mouseY, width * 0.5, height * 0.5) < 100) {
            push();
                cursor(HAND);
                fill(0); // Cambia el color del círculo a negro cuando el mouse está sobre él
                circle(width * 0.5, height * 0.5, 100);
            pop();
          } 
        else {
            push();
                cursor(ARROW);
                strokeWeight(3);
                stroke(0);
                fill(255); // Círculo blanco cuando el mouse no está sobre él
                circle(width * 0.5, height * 0.5, 100);
            pop();
        }

        // Aumentar opacidad al presionar el botón
        if (aumentando) {
            opacidad += 5;
        } else {
            opacidad -= 5; // Disminuir opacidad cuando no se presiona
        }

        // Limitar el rango de opacidad
        opacidad = constrain(opacidad, 10, 255);

        //boton volver
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }

    }
    else if (estado == 2) { //acumulacion
        background(255);
                
        // Dibujar y mover los círculos
        for (let circulo of circulos) {
            fill(circulo.color);
            noStroke();
            ellipse(circulo.x, circulo.y, circulo.tamano);

            // Si el círculo rojo está pausado, los demás se acercan a él
            if (circuloRojoPausado) {
            let angulo = atan2(height / 2 - circulo.y, width / 2 - circulo.x);
            circulo.x += cos(angulo) * 2;
            circulo.y += sin(angulo) * 2;

            // Acumular en el borde del círculo rojo
            if (dist(circulo.x, circulo.y, width / 2, height / 2) < 50 + circulo.tamano / 2) {
                circulo.x = width / 2 + cos(angulo) * (40 + circulo.tamano / 2);
                circulo.y = height / 2 + sin(angulo) * (40 + circulo.tamano / 2);
            }
            } else {
            // Mover los círculos
            circulo.x += circulo.velocidadX;
            circulo.y += circulo.velocidadY;

            // Rebotar en los bordes
            if (circulo.x < 0 || circulo.x > width) {
                circulo.velocidadX *= -1;
            }
            if (circulo.y < 0 || circulo.y > height) {
                circulo.velocidadY *= -1;
            }
            }
        }

        // Dibujar el círculo rojo
        if (dist(mouseX, mouseY, width * 0.5, height * 0.5) < 50) {
            push();
            cursor(HAND);
            fill(178, 31, 0);
            ellipse(width / 2, height / 2, 100); // Tamaño 100 para el círculo rojo
            pop();
        } else {
            push();
            cursor(ARROW);
            fill(255, 0, 0);
            ellipse(width / 2, height / 2, 100); // Tamaño 100 para el círculo rojo
            pop();
        }
        /*fill(0);
        textSize(15);
        text("presiona aqui",width * 0.46, height * 0.6);*/

        //boton volver
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }
    }
    else if (estado == 3){ //elipsis
        background(255,0,0);

        if (!circuloCompleto) {
            noStroke();
            fill(255);
            ellipse(width / 2.8, height / 3.6, 150, 150);
        } else {
            fill(255,0,0);
            ellipse(width / 2.8, height / 3.6, 150, 150); // Dibuja el círculo completo
        }

        //BOTON VOLVER
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }
    }
    else if (estado == 4){ //hiperbole
        background(255); // Fondo blanco
  
        // Cambia el color del círculo entre rojo y blanco para crear el efecto de titilación
        if (titilacion) {
            fill(255, 0, 0); // Color rojo
        } else {
            fill(255); // Color blanco (para titilación)
        }

        noStroke();
        ellipse(width / 2, height / 2, tamañoCirculo); // Dibuja el círculo en el centro

        // Incrementa el tamaño del círculo
        tamañoCirculo += velocidad;

        // Si el tamaño del círculo es mayor que el ancho o alto de la ventana, reinicia el tamaño
        if (tamañoCirculo > width * 2.5 || tamañoCirculo > height * 2.5) {
            tamañoCirculo = 100; // Restablece el tamaño del círculo a su valor inicial
        }

        // Controla la titilación del círculo
        if (frameCount % 15 === 0) { // Cambia el color cada 5 cuadros
            titilacion = !titilacion; // Alterna entre titilación y no titilación
        }


        //boton volver
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }
    }
    else if (estado == 5){ //metáfora
        background(0);
        // Dibujar círculos
        for (let circulo of circulos1) {
            noStroke();
            fill(255);
            if (circulo.creciendo) {
            circulo.tamaño += 0.6; // Aumentar el tamaño
            }
            ellipse(circulo.x, circulo.y, circulo.tamaño);
        }
        
        // Dibujar el círculo rojo
        if (circuloObjetivo.creciendo) {
            circuloObjetivo.tamaño += 0.5; // Aumentar el tamaño
            if (circuloObjetivo.tamaño > width) {
            circuloObjetivo.creciendo = false; // Dejar de crecer
            }
        }
  

        // Calcular el color en degradado
        let t = map(circuloObjetivo.tamaño, 10, width / 8, 0, 1); // Normalizar el tamaño
        let r = lerp(255, 255, t); // Rojo
        let g = lerp(0, 255, t);   // Verde
        let b = lerp(0, 255, t);   // Azul
        
        fill(r, g, b);
        ellipse(circuloObjetivo.x, circuloObjetivo.y, circuloObjetivo.tamaño);
        
        // Verificar si el círculo rojo ha crecido lo suficiente
        if (circuloObjetivo.tamaño > width) {
            // Pintar toda la pantalla de blanco
            background(255);
        }
        //boton volver
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }
    }
    else if (estado == 6){ //Metonimia
        background(255);
        noStroke();
        push();
            fill(255, 0, 0,150);
            translate(width / 2, height / 2);
            for (let i = 0; i < 6; i++) {
                let x = cos(angulo + TWO_PI * i / 6) * 54;
                let y = sin(angulo + TWO_PI * i / 6) * 54;
                ellipse(x, y, 25, 25);
            }
            angulo += velocidad1;
        pop();

        if (dist(mouseX, mouseY, width * 0.5, height * 0.5) < 40) {
            push();
                cursor(HAND);
                fill(255,0,0); // Cambia el color del círculo a rojo cuando el mouse está sobre él
                circle(width * 0.5, height * 0.5, 40);
            pop();
          } 
        else {
            push();
                cursor(ARROW);
                fill(255,0,0,10); // Círculo blanco cuando el mouse no está sobre él
                circle(width * 0.5, height * 0.5, 40);
            pop();
        }

        //boton volver
        if ((mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) {
            push();
                fill(0);
                noStroke();
                rect(0, 0, width *0.02+56, height * 0.04);
                fill(255);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        } else {
            push();
                cursor(ARROW);
                fill(255);
                rect(0, 0, width *0.02+56, height * 0.04);
                noStroke();
                fill(0);
                textSize(15);
                textAlign(CENTER,TOP);
                text("Volver", 25+15, 8);
            pop();
        }
    }
}

function mousePressed() {
    if (estado == 0 && (mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.08) && (mouseY < height * 0.08 + height * 0.07)) 
    { estado = 1; }//repeticion
    //boton volver a principal
    if (estado == 1 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
    { estado = 0; }
    // Si el mouse está dentro del círculo central, comienza a aumentar la opacidad
    if (dist(mouseX, mouseY, width * 0.5, height * 0.5) < 100) 
    {aumentando = true;}

    //---------------------------------------------------------

    if (estado == 0 && (mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.2) && (mouseY < height * 0.2 + height * 0.07)) 
    { estado = 2; }//acumulacion
    // Verificar si se presionó el círculo rojo
    if (dist(mouseX, mouseY, width * 0.5, height * 0.5) < 50) 
    {circuloRojoPausado = !circuloRojoPausado;} // Alternar el estado de pausa
    //boton volver a principal
    if (estado == 2 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
    { estado = 0; }
    
    //---------------------------------------------------------

    if (estado == 0 && (mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.32) && (mouseY < height * 0.32 + height * 0.07)) 
    {   estado = 3; circuloCompleto = false;}//elipsis
    // Verifica si el clic ocurre dentro del área donde se encuentra el círculo
    let distancia = dist(mouseX, mouseY, width / 2.8, height / 3.6);
    if (distancia < 150/2) { // 100 es el radio del círculo
        circuloCompleto = true; // Cambia el estado a true cuando se hace clic dentro del círculo
    }
    //boton volver a principal
    if (estado == 3 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
        { estado = 0; circuloCompleto = false;}

    //---------------------------------------------------------

    if(estado == 0 && (mouseX > 0) && (mouseX < 0 + width ) && (mouseY > height * 0.45) && (mouseY < height * 0.45 + height * 0.07))
    { estado = 4; }//hiperbole
    //boton volver a principal
    if (estado == 4 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
    { estado = 0; }

    //---------------------------------------------------------
    if(estado == 0 && (mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.58) && (mouseY < height * 0.58 + height * 0.07))
    { estado = 5; }//metáfora
    //boton volver a principal
    if (estado == 5 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
    { estado = 0; }

    //--------------------------------------------
    if(estado ==0 && (mouseX > 0) && (mouseX < 0 + width) && (mouseY > height * 0.71) && (mouseY < height * 0.71 + height * 0.07))
    { estado = 6; }
    //boton volver a principal
    if (estado == 6 && (mouseX > 0) && (mouseX < 0 + width * 0.1) && (mouseY > 0) && (mouseY < 0 + height * 0.04)) 
    { estado = 0; }

}

function mouseReleased() {
    // Detener el aumento de opacidad cuando se suelta el mouse
    aumentando = false;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Ajustar el tamaño del canvas cuando se redimensiona la ventana
}
