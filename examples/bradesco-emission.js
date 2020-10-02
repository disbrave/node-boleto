var express = require('express')
var path = require('path')

var app = express()

var Boleto = require('../index').Boleto

var boleto = new Boleto({
  'banco': 'bradesco',
  'data_emissao': new Date(),
  'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000),
  'valor': 1500,
  'nosso_numero': '6',
  'numero_documento': '1',
  'cedente': 'Pagar.me Pagamentos S/A',
  'grupo_cota_situacao': '220 / 410 / 0',
  'numero_assembleia': '130',
  'data_assembleia': '15/10/2020',
  'hora_assembleia': '18:00',
  'valor_do_bem': 'R$ 180.000.000,00',
  'num_aviso': '53',
  'cedente_cnpj': '18727053000174',
  'agencia': '1229',
  'especie_doc': 'Recibo',
  'codigo_cedente': '469',
  'carteira': '25',
  'mensagem':'Lorem ipsum dolor sit amet',
  'local':'DISBRAVE CONSORCIOS',
  'endereco':'SEPN 503 - ASA NORTE - 70730501 BRASÍLIA - DF',
  'pagador': 'Nome do pagador\nCPF: 000.000.000-00',
  'local_de_pagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
  'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.',
  'codigo_barras': '23793839500000098613416090605614099300018240',
  'numero_documento': '23793416019060561409993000182407383950000009861',
  'nosso_numero_dv': '2'
}, 2)

app.use(express.static(path.join(__dirname, '/../')))

app.get('/', function (req, res) {
  // boleto.renderHTML(function (html) {
  //   return res.send(html)
  // })
  res.send(boleto.returnRenderedHTML())
})

app.listen(3003)
