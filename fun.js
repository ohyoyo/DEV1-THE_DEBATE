function attack(niv, bar, idattack, classattack) {
    var life = $( bar ).css( "width" );
    var res = life.replace( "px", "" );
    var cal = res - niv;
    $( bar ).css( "width", cal );
    document.getElementById( idattack ).classList.add( classattack );
};

function ffalse(){return false;}function ftrue(){return true;}document.onselectstart=new Function("return false");if(window.sidebar){document.onmousedown=ffalse;document.onclick = ftrue;}