'use strict';

const Parser = require('xml2js');

exports.parseToXML = (json, callback) => {
    const builder = new Parser.Builder();    
    const pedidos = [];
    
    json.forEach(element => {
        const obj = {
            pedido: {
                cliente: {
                  nome: element.person_id.name,
                  tipoPessoa: 'F',
                  endereco: element.org_id.address,
                  numero: '',
                  complemento: '',
                  bairro: '',
                  cep: '',
                  cidade: '',
                  uf: '',
                  fone: element.person_id.phone.value,
                  email: element.person_id.email.value,
                },
                transporte: {
                  transportadora: 'Transportadora XYZ',
                  tipo_frete: 'R',
                  servico_correios: 'SEDEX - CONTRATO',
                  dados_etiqueta: {
                    nome: 'Endereço de entrega',
                    endereco: 'Rua Visconde de São Gabriel',
                    numero: '392',
                    complemento: 'Sala 59',
                    municipio: 'Bento Gonçalves',
                    uf: 'RS',
                    cep: '95.700-000',
                    bairro: 'Cidade Alta',
                  },
                  volumes: {
                    volumes: [
                      {
                        servico: 'SEDEX - CONTRATO',
                        codigoRastreamento: '',
                      },
                      {
                        servico: 'PAC - CONTRATO',
                        codigoRastreamento: '',
                      },
                    ],
                  },
                },
                itens: {
                  item: [
                    {
                      codigo: '001',
                      descricao: element.title,                      
                      qtde: '1',
                      vlr_unit: element.value,
                    }
                  ],
                },
                parcelas: {
                  parcela: [
                    {
                      data: element.add_time,
                      vlr: element.value,
                    },    
                  ],
                },
              },
            };
        
        const xml = builder.buildObject(obj);      

        pedidos.push(encodeURI(xml));
    });

    callback(pedidos);
}