function getDayOfWeek(day) {
    var d = new Date();
    var other = new Date(d.getFullYear(), d.getMonth(), d.getDate() + day, 18, 0, 0, 0);
    return other.getTime();
}

function dayOfWeekAsString(dayIndex) {
    return ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][dayIndex];
}

function getDayLabel(d) {
    var temp = new Date(d);
    return dayOfWeekAsString(temp.getDay()) + "-" + temp.getDate();
}

function getRandomInt(min, max) {
    return Math.floor(Math.floor(Math.random() * (max - min + 1)) + min);
}

function fillDataArray() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        var item = {};
        item.period = getDayOfWeek(i);
        item.nearby = getRandomInt(200, 500);
        // item.dishes = getRandomInt(300, 400);
        item.eatIn = getRandomInt(25, 125);
        arr.push(item);
    }
    return arr;
}

function empForecast(hour) {
    var dinnerDist = 1+Math.abs(hour - 19);
    var highest = getRandomInt(8/dinnerDist, 15/dinnerDist);
    var lunchDist = 1+Math.abs(hour - 12);
    highest = max(highest, getRandomInt(5/lunchDist, 8/lunchDist));
    return highest;
}

function fillEmpArray() {
    var d = new Date();
    var arr = [];
    for (var i = 1; i < 7; i++) {
        var item = {};
        var hours = d.getHours() + i;
        var t = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, 0, 0, 0);
        item.period = t.getTime();
        hours %= 24;
        var forecast = empForecast(hours);
        item.forecast = forecast;
        arr.push(item);
    }
    return arr;
}

$(function() {

    var area = Morris.Area({
        element: 'morris-area-chart',
        data: fillDataArray(),
        xkey: 'period',
        xLabels: "day",
        behaveLikeLine: true,
        ykeys: ['nearby','eatIn'],
        labels: ['Nearby', 'Eat In'],
        // ykeys: ['nearby', 'dishes', 'eatIn'],
        // labels: ['Nearby', 'Dishes', 'Eat In'],
        pointSize: 2,
        hideHover: 'false',
        resize: true,
        xLabelFormat: getDayLabel,
        lineColors: ['DodgerBlue', 'gray'],
        dateFormat: function(x) {
            var d = new Date(x);
            var dayOfWeek = dayOfWeekAsString(d.getDay());
            return dayOfWeek + " " + d.getMonth() + "/" + d.getDate();
        },
    });

    area.options.labels.forEach(function(label, i){
        var legendItem = $('<span></span>').text(label).css('color', area.options.lineColors[i]);
        $('#legend').append(legendItem);
    });

    Morris.Area({
        element: 'emp-scheduling',
        data: fillEmpArray(),
        xkey: 'period',
        behaveLikeLine: true,
        ykeys: ['forecast'],
        labels: ['Employee Forecast'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['DodgerBlue'],
        dateFormat: function(x) {return new Date(x).getHours().toString() + ":00";},
        // yLabelFormat: function(y) {return y.toString() + " employees";}
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "In-Store Sales",
            value: 73
        },{
            label: "Takeout Orders",
            value: 35
        },{
            label: "Online Orders",
            value: 27
        }],
        resize: true
    });

    var bar = Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Sunday',
            a: 100,
            b: 90
        }, {
            y: 'Monday',
            a: 75,
            b: 65
        }, {
            y: 'Tuesday',
            a: 50,
            b: 40
        }, {
            y: 'Wednesday',
            a: 75,
            b: 65
        }, {
            y: 'Thursday',
            a: 50,
            b: 40
        }, {
            y: 'Friday',
            a: 75,
            b: 65
        }, {
            y: 'Saturday',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Eat In', 'Takeout'],
        hideHover: 'auto',
        resize: true,
        barColors: ['gray', 'green'],
    });

    bar.options.labels.forEach(function(label, i){
        var legendItem = $('<span></span>').text(label).css('color', bar.options.barColors[i]);
        $('#barLegend').append(legendItem);
    });

});
