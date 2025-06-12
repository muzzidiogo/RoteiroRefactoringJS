module.exports = function gerarFaturaStr (fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;
  for (let apre of fatura.apresentacoes) {
    faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApesentacao(apre))} (${apre.audiencia} assentos)\n`;
  }
  faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
  return faturaStr;
}

// module.exports = function gerarFaturaHTML(fatura, calc) {
//   let faturaHTML = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
//   for (let apre of fatura.apresentacoes) {
//     faturaHTML += `<li>  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApesentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
//   }
//   faturaHTML += `</ul>\n`;
//   faturaHTML += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
//   faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n`;
//   faturaHTML += `</html>`;
//   return faturaHTML;
// }