let input1;
let input2;
let pg;
let button;
let fontSelect;
let fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];


function setup() {
    createCanvas(540, 540).parent('sketch-holder');
    pg = createGraphics(1080, 1080); // Crea un buffer de alta resolución
    input1 = createInput('Promoción');
    input2 = createSlider(50,150);
    button = createButton('Descargar');
    button.mousePressed(saveCanva);

    
    input1.parent('titulo');
    input2.parent('titulo__tamaño');
    button.parent('descargar__png');
    
    input1.size(200)
    input2.size(200);
    input2.value(100);

    // Crear un selector de fuentes
    fontSelect = createSelect();
    
    // Añadir fuentes al selector
    for (let i = 0; i < fonts.length; i++) {
        fontSelect.option(fonts[i]);
    }
    
    // Cambiar la fuente cuando se selecciona una opción
    fontSelect.changed(changeFont);
    fontSelect.parent('selector__fuente');
}

 
function draw() {
    let s = input2.value();
    // Dibuja algo en el buffer
    pg.background(220);

    pg.textSize(s);
    pg.textAlign('center','center');
    pg.text(input1.value(), 270*2, 120*2); // Dibuja el texto en el canvas


    // Dibuja el objeto pg en el lienzo principal
    image(pg, 0, 0, width, height);
}

function changeFont() {
    let f = fontSelect.value();
    pg.textFont(f);
  }

function saveCanva() {
    if (pg instanceof p5.Graphics) {
        save(pg, 'miCanvasAltaResolucion', 'png'); // Guarda el buffer como PNG
    } else {
       console.log('pg no es una instancia de p5.Graphics');
    }
}