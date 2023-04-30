import http from "./config";

//CLASSE PARA UNIR TODAS AS FUNÇÕES QUE VÃO FAZER AS REQUISIÇÕES
export default class CovidService {
    
    // FUNÇÃO QUE FAZ UM GET NO LINK BASE + ESTADO PASSADO PELOS PARAMETROS
    static async getDataCovid(estado) {
        return http.get(
            `/${estado}` // Link da API (após o link base) nesse caso, ele recebe 'al'
        )
    }
}