import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);

    var option = {
        title: {
            text: '打卡动态图',
            left: 'center'
        },
        legend: {
            data: ['上班时间', '下班时间'],
            top: 20,
            left: 'center',
            backgroundColor: 'red',
            z: 21
        },
        grid: {
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            show: true
        },
        yAxis: {
            x: 'center',
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            show: true
        },
        series: [{
            name: 'A-下班',
            type: 'line',
            smooth: true,
            data: [7.30, 8.27, 8.25, 8.21, 8.00, 8.15, 8.23]
        }, {
            name: 'B-上班',
            type: 'line',
            smooth: true,
            data: [17.30, 18.07, 17.41, 17.50, 18.17, 18.20, 19.30]
        }]
    };

    chart.setOption(option);
    return chart;
}

Page({
    onShareAppMessage: function (res) {
        return {
            title: 'ECharts 可以在微信小程序中使用啦！',
            path: '/pages/index/index',
            success: function () {
            },
            fail: function () {
            }
        }
    },
    data: {
        ec: {
            onInit: initChart
        }
    },

    onReady() {
    }
});
