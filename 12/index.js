window.onload = function(){
const body = document.getElementById('body')
const button = document.getElementById('submit')
button.addEventListener('click', () => {
    console.log("I'm here")
    var Vsc = parseFloat(document.getElementById('Vsc').value)
    var Isc = parseFloat(document.getElementById('Isc').value)
    var Wc = parseFloat(document.getElementById('Wc').value)
    var V1 = parseFloat(document.getElementById('V1').value)
    var I0 = parseFloat(document.getElementById('I0').value)
    var Wi = parseFloat(document.getElementById('Wi').value)

    //calculations
    var R01 = (Wc/(Isc*Isc)).toFixed(3)
    var Z01 = (Vsc/Isc).toFixed(3)
    var X01 = (Math.sqrt(Z01*Z01 - R01*R01)).toFixed(3)
    var pf = (Wi/(V1*I0)).toFixed(3)
    var Iw = (Wi/V1).toFixed(3)
    var Im = (Math.sqrt(I0*I0 - Iw*Iw)).toFixed(3)
    var R0 = (V1/Iw).toFixed(3)
    var X0 = (V1/Im).toFixed(3)

    if(I0<=Iw || V1 == 0 || Iw == 0 || Im == 0 || I0 == 0 || Isc == 0 || Z01<=R01){
        body.innerHTML=`
        <div style="
        height: 100vh;
        background-color: pink;
        display: flex;
        flex-direction: column;
        padding: 10% 0;
        margin: 0;
        text-align: center;
        text-transform: uppercase;

        ">
        <h1 style="
        color: red;
        font-size: 40px;
        font-weight: 600;
        "
        >Invalid Input</h1>
        <h2><a
        style="
        text-decoration: none;
        color: blue;
        font-size: 30px;
        font-weight: 600;
        " href="index.html">Click here to re-enter the values</a></h2>
        </div>
        `
    }
    else{
        body.innerHTML=`
    <div style="
        background-color: white;
        height: 100vh;
    ">
    <div style="
    background-color: white;
    display: block;
    ">
        <p
        style="
        position:relative;
        top:380px;
        left:300px;
        ">V1 = 230V
        </p>
        <p
        style="
        position:relative;
        top:229px;
        left:880px;
        ">R01 = ${R01} ohm</p>

        <p style="color: white;
        ">Z01: ${Z01} ohm</p>


        <p
        style="
        position:relative;
        top:229px;
        left:781px;
        ">X01 = ${X01} ohm</p>
        <p style="color: white;
        ">Power Factor: ${pf}</p>
        <p
        style="
        position:relative;
        top:360px;
        right:150px;
        ">Iw = ${Iw} A</p>
        <p style="color: white;
        ">Im = ${Im} A</p>

        <p
        style="
        position:relative;
        top:300px;
        right:280px;
        ">I0 = ${I0} A</p>


        <p
        style="
        position:relative;
        top:360px;
        right:210px;
        ">Iu = ${I0-Iw} A</p>

        <p
        style="
        position:relative;
        top:410px;
        right:600px;
        ">R0 = ${R0} ohm</p>
        <p
        style="
        position:relative;
        top:410px;
        right:451px;
        ">X0 = ${X0} ohm</p>

      
        </div>
        <img src="222.jpeg" alt="Circuit Diagram"
        style=
        "margin-left:18%;
        margin-top:10%;
        "
        />

    </div>
    `
    }





})
}
