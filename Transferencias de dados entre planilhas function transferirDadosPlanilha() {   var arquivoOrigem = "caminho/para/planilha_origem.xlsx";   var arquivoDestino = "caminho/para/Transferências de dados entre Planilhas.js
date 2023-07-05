function transferirDadosPlanilha() {
  var arquivoOrigem = "caminho/para/planilha_origem.xlsx";
  var arquivoDestino = "caminho/para/planilha_destino.xlsx";
  
  var planilhaOrigem = "Planilha1";
  var planilhaDestino = "Planilha2";
  
  var origem = SpreadsheetApp.openByUrl(arquivoOrigem);
  var destino = SpreadsheetApp.openByUrl(arquivoDestino);
  
  var planilhaOrigemObj = origem.getSheetByName(planilhaOrigem);
  var dadosOrigem = planilhaOrigemObj.getDataRange().getValues();
  
  var planilhaDestinoObj = destino.getSheetByName(planilhaDestino);
  planilhaDestinoObj.clearContents();
  planilhaDestinoObj.getRange(1, 1, dadosOrigem.length, dadosOrigem[0].length).setValues(dadosOrigem);
  
  Logger.log("Transferência de dados concluída com sucesso!");
}
