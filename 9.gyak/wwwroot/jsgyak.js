window.onload = () => {
    console.log("betöltődött")
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

function fck() {
    for (var sor = 0; sor < 10; sor++) {
        var uj = document.createElement("div");
        uj.classList.add("sor");
        document.getElementById("Pascal").appendChild(uj);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var nyuv= document.createElement("div");
            nyuv.classList.add("elem");
            nyuv.innerHTML = (faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop)));
            uj.appendChild(nyuv);
        }
    }
}

fck();