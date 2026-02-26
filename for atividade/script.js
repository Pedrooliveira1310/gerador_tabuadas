 function gerarTabuada() {

        let conteudo = "";

            for (let i = 1; i <= 10; i++) { 
            
                conteudo += `<div class="tabuada"><h3>Tabuada do ${i}</h3>`;     

                for (let multiplicador = 1; multiplicador <= 10; multiplicador++) { 

                    let resultado = i * multiplicador;

                    conteudo += `<p>${i} x ${multiplicador} = ${resultado}</p>`;
                }
                conteudo += `</div>`;
            }                 
            document.getElementById("resultado").innerHTML = conteudo;
        }