function attack(niv, bar) {
    var life = $( bar ).css( "width" );
    var res = life.replace("px", "");
    var cal = res - niv;
    $( bar ).css("width", cal);
};

function ffalse(){return false;}function ftrue(){return true;}document.onselectstart = new Function ("return false");if(window.sidebar){document.onmousedown = ffalse;document.onclick = ftrue;}


function startlazer(){
            document.getElementById('lazer-itself').classList.add('lazer-click');
        }

function startrainbow(){
         document.getElementById('rainbow').classList.add('rainbow-click');
        }

function startwonder(){
         document.getElementById('WWattack').classList.add('wonder-click');
        }