
var lado1 = document.getElementById("lado1");
var lado2 = document.getElementById("lado2");
var lado3 = document.getElementById("lado3");
var lado4 = document.getElementById("lado4");
var lado5 = document.getElementById("lado5");
var lado6 = document.getElementById("lado6");
var lado7 = document.getElementById("lado7");
var lado8 = document.getElementById("lado8");
var lado9 = document.getElementById("lado9");


/*Color*/
var blue    = 'rgb(0, 0, 170)';
var green   = 'rgb(0, 170, 0)';
var red     = 'rgb(170, 0, 0)';
var yellow  = 'rgb(255, 255, 0)';
var orange  = 'rgb(255, 88, 0)';
var white   = 'rgb(255, 255, 255)';
var prevColor1, prevColor2, prevColor3;
var prevColor4, prevColor5, prevColor6;
var prevColor7, prevColor8, prevColor9;
var color1, color2, color3;
var color4, color5, color6;
var color7, color8, color9;
/*Asignacion */
lado1.style.backgroundColor = blue;

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

lado1.addEventListener('click',function(e){
    prevColor1 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor1) {
        case orange:
            this.style.backgroundColor = white;
            color1 = 'blanco';
            //document.getElementById("texto-color").innerHTML = "Blanco!"; 
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color1 = 'naranja';
            //document.getElementById("texto-color").innerHTML = "Naranja!";
            break;
        case red:
            this.style.backgroundColor = yellow;
            color1 = 'amarillo';
            //document.getElementById("texto-color").innerHTML = "Amarillo!";
            break;
        case green:
            this.style.backgroundColor = red;
            color1 = 'rojo';
            //document.getElementById("texto-color").innerHTML = "Rojo!";
            break;
        case blue:
            this.style.backgroundColor = green;
            color1 = 'verde';
            //document.getElementById("texto-color").innerHTML = "Verde!";
            break;    
        default:
            this.style.backgroundColor = blue;
            color1 = 'azul';
            //document.getElementById("texto-color").innerHTML = "Azul!";
    }
    checkColor();
});

lado2.addEventListener('click',function(e){
    prevColor2 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor2) {
        case orange:
            this.style.backgroundColor = white;
            color2 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color2 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color2 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color2 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color2 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color2 = 'azul';
    }
    checkColor();   
});

lado3.addEventListener('click',function(e){
    prevColor3 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor3) {
        case orange:
            this.style.backgroundColor = white;
            color3 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color3 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color3 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color3 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color3 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color3 = 'azul';
    }
    checkColor();   
});

lado4.addEventListener('click',function(e){
    prevColor4 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor4) {
        case orange:
            this.style.backgroundColor = white;
            color4 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color4 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color4 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color4 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color4 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color4 = 'azul';
    }
    checkColor(); 
});

lado5.addEventListener('click',function(e){
    prevColor5 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor5) {
        case orange:
            this.style.backgroundColor = white;
            color5 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color5 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color5 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color5 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color5 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color5 = 'azul';
    }
    checkColor(); 
});

lado6.addEventListener('click',function(e){
    prevColor6 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor6) {
        case orange:
            this.style.backgroundColor = white;
            color6 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color6 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color6 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color6 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color6 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color6 = 'azul';
    }
    checkColor(); 
});

lado7.addEventListener('click',function(e){
    prevColor7 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor7) {
        case orange:
            this.style.backgroundColor = white;
            color7 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color7 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color7 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color7 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color7 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color7 = 'azul';
    }
    checkColor(); 
});

lado8.addEventListener('click',function(e){
    prevColor8 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor8) {
        case orange:
            this.style.backgroundColor = white;
            color8 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color8 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color8 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color8 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color8 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color8 = 'azul';
    }
    checkColor(); 
});

lado9.addEventListener('click',function(e){
    prevColor9 = this.style.backgroundColor;
    this.style.backgroundColor = green;
    switch (prevColor9) {
        case orange:
            this.style.backgroundColor = white;
            color9 = 'blanco';
            break;
        case yellow:
            this.style.backgroundColor = orange;
            color9 = 'naranja';
            break;
        case red:
            this.style.backgroundColor = yellow;
            color9 = 'amarillo';
            break;
        case green:
            this.style.backgroundColor = red;
            color9 = 'rojo';
            break;
        case blue:
            this.style.backgroundColor = green;
            color9 = 'verde';
            break;    
        default:
            this.style.backgroundColor = blue;
            color9 = 'azul';
    }
    checkColor(); 
});

function checkColor(){
    if(color1 == color2 && color2 == color3 && color3 == color4 && color4 == color5 && color5 == color6 && color6 == color7 && color7 == color8 && color8 == color9)
    {
        switch(color1) {
            case 'blanco':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Blanco!";
                //rotateDIV(1);
                rotateYDIV(1);                
                break;
            case 'naranja':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Naranja!";
                //rotateDIV(2);
                rotateYDIV(1);
                break;
            case 'amarillo':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Amarillo!";
                //rotateDIV(3);
                rotateYDIV(1);
                break;
            case 'rojo':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Rojo!";
                //rotateDIV(4);
                rotateYDIV(1);
                break;
            case 'verde':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Verde!";
                //rotateDIV(5);
                rotateYDIV(1);
                break;
            case 'azul':
                document.getElementById("texto-color").innerHTML = "Has reunido el color Azul!";
                //rotateDIV(6);
                rotateYDIV(1);
                break;
        } 
    }
    else
    {
        document.getElementById("texto-color").innerHTML = "";
        /*document.getElementById("lado1").classList.toggle('flexible');
        document.getElementById("lado3").classList.toggle('flexible');
        document.getElementById("lado7").classList.toggle('flexible');
        document.getElementById("lado9").classList.toggle('flexible');*/
    }
    
}