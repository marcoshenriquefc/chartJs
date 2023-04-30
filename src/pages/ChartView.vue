<template>
    <div >
        <GraficData
            v-if="dataObj.datasets"
            :chartData="dataObj"
        />
        <GraficLine
            v-if="dataObj.datasets"
            :chartData="dataObj"
        />
    </div>
</template>


<script>
    //ESSE COMPONENTE É O QUE CARREGA OS DADOS E PASSA PARA O FILHO CARREGAR O CHART

import { defineComponent } from 'vue';

import CovidService from '../services/covid';
import GraficData from '../components/GraficData.vue';
import GraficLine from '../components/GraficLine.vue';

export default defineComponent({
    name: 'ChartView',
    components: {
        GraficData,
        GraficLine
    },
    data(){
        return {
            dataObj: {}
        }
    },
    async beforeMount() {
        const estado = 'al'       // ESTADO QUE SERA PUXADO NA API
        const item = await CovidService.getDataCovid(estado); // CHAMADA DO AXIOS PARA A API
        console.log(item.data)

        const obj = {
            // NOME DE CADA COLUNA (pode ser substituida pelas KEYS do objeto recebido na API)
            labels: ['Cases', 'Deaths', 'Suspects', 'Refuses'],
            // DADOS PARA MONTAR O GRÁFICO
            datasets: [{
                label: `Casos de covid em ${item.data.state}`,                  // TITULO DA TABELA
                borderColor: 'rgba(255, 255, 255, 0.5)',                        // cor da linha
                borderWidth: .8,
                pointBorderWidth: 0,
                pointRadius: 4,
                pointHoverRadius: 6,
                lineTension: 0,
                backgroundColor: ['#f87979', '#36a2eb', '#ffce56', '#4bc0c0'],  // CORES DE CADA COLUNA
                data: [item.data.cases, item.data.deaths, item.data.suspects, item.data.refuses]  // DATA RECEBIDO DA API
            }]
        }

        this.dataObj = obj; // PASSANDO OS DADOS MONTADOS PARA O DATA 
    }
})
</script>