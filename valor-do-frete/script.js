const a = window.document.getElementById("btapertar");

a.onclick = () => {
  const bairros = document.getElementById('setor');
  const bairro = bairros.value;
  const resultado = document.getElementById('res');
  let entrega;
  switch (bairro) {
    case 'CasaVerde':
      entrega = 25.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});             
      resultado.innerHTML =`Sua entrega custara  ${realbr}`            ;   
      break;

    case 'limao':
      entrega = 35.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      resultado.innerHTML =`Sua entrega custara  ${realbr}`;
      break;

    case 'santana':
      entrega = 15.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      resultado.innerHTML =`Sua entrega custara  ${realbr}`;
      break;
    
    case 'centro':
      entrega = 50.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      resultado.innerHTML =`Sua entrega custara  ${realbr}`;
      break;

    case 'lapa': 
      entrega = 100.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      resultado.innerHTML =`Sua entrega custara  ${realbr}`;
      break;

    default: 
      entrega = 200.00;
      realbr = entrega.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      resultado.innerHTML =`Sua entrega custara  ${realbr}`;
      break;
  }
}