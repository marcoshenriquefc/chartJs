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
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement  } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default defineComponent({
    name: 'GraficData',
    components: {
        Bar,
        Line
    },
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
