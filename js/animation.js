
var x,y,n=0,ny=0,rotINT,rotYINT,nCheck=0;
function rotateDIV(nColor)
{
    switch (nColor) {
        case 1:
            x=document.getElementById("lado1")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        case 2:
            x=document.getElementById("lado2")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        case 3:
            x=document.getElementById("lado3")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;
        case 4:
            x=document.getElementById("lado4")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;    
        case 5:
            x=document.getElementById("lado5")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;                        
        case 6:
            x=document.getElementById("lado6")
            clearInterval(rotINT)
            rotINT=setInterval("startRotate()",10)       
            break;                
        default:
            break;
    }
}
function startRotate()
{
    n=n+1
    x.style.transform="rotate(" + n + "deg)"
    x.style.webkitTransform="rotate(" + n + "deg)"
    x.style.OTransform="rotate(" + n + "deg)"
    x.style.MozTransform="rotate(" + n + "deg)"
    if (n==180 || n==360)
    {
        clearInterval(rotINT)
        if (n==360){n=0}
    }
}

function randomNumber() {
    var x = Math.floor((Math.random() * 9) + 1);
    return x;
}

function rotateYDIV(nColor)
{   
    clearInterval(rotYINT);
    rotYINT=setInterval("startYRotate()",10);
    nCheck+=1;
    var l = 1;
    while(l <= 9)
    {
        if( nCheck % 2 )
        {
            document.getElementById("lado"+l).innerHTML = "";
        }
        else{
            document.getElementById("lado"+l).innerHTML = randomNumber();
        }
        l+=1;
    }
    
}

function startYRotate()
{
    var i = 1;
    while(i <= 9)
    {
        y=document.getElementById("lado"+i);
        ny=ny+1
        y.style.transform="rotateY(" + ny + "deg)"
        y.style.webkitTransform="rotateY(" + ny + "deg)"
        y.style.OTransform="rotateY(" + ny + "deg)"
        y.style.MozTransform="rotateY(" + ny + "deg)"
        if (ny==180 || ny>=360)
        {
            clearInterval(rotYINT)
            if (ny>=360){ny=0}
        }
        i+=1;    
    }
    
}