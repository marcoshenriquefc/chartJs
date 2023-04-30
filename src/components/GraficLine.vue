<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    name: 'App',
    components: {
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
}
</script>
