var y=0;

function sag() {

            document.getElementById('ic1').style.transition=1+'s';
            document.getElementById('ic2').style.transition=1+'s';

            if (y>1) {
                y=0;
            }
            if (y<0) {
                y=1;
            }

        if (y==0) {

            document.getElementById('ic2').style.left=0;
            document.getElementById('ic1').style.left='100%';
            // document.getElementById('ul').style.transform='translate3d(-100%,0,0)';
            
            y++;
            return;
        }

        if(y==1) {

            document.getElementById('ic2').style.left='-100%';
            document.getElementById('ic1').style.left=0;
            // document.getElementById('ul').style.transform='translate3d(-100%,0,0)';

            y++;
            return;
        }
}



function sol() {
    document.getElementById('ic1').style.transition=1+'s';
            document.getElementById('ic2').style.transition=1+'s';

            if (y>1) {
                y=0;
            }
            if (y<0) {
                y=1;
            }

        if (y==0) {

            document.getElementById('ic2').style.left=0;
            document.getElementById('ic1').style.left='100%';
            // document.getElementById('ul').style.transform='translate3d(-100%,0,0)';
            
            y--;
            return;
        }

        if(y==1) {

            document.getElementById('ic2').style.left='-100%';
            document.getElementById('ic1').style.left=0;
            // document.getElementById('ul').style.transform='translate3d(-100%,0,0)';

            y--;
            return;
        }
}