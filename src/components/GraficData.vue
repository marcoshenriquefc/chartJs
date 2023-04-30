<template>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { defineComponent } from 'vue'

// IMPORTANDO COMPONENTE DA BIBLIOTECA
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
    name: 'GraficData',
    components: { Bar },
    data() {
        return {
            chartOptions: {
                responsive: true
            }
        }
    },
    props: {
        // PROPS QUE RECEBE OS DADOS DA API TRATADOS NO CMOPONENTE PAI
        chartData: {
            type: Object,
            required: true,
        },
    },
})
</script>
