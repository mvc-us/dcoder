$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        // data: [{
        //     period: '2010 Q1',
        //     iphone: 2666,
        //     ipad: null,
        //     itouch: 2647
        // }, {
        //     period: '2010 Q2',
        //     iphone: 2778,
        //     ipad: 2294,
        //     itouch: 2441
        // }, {
        //     period: '2010 Q3',
        //     iphone: 4912,
        //     ipad: 1969,
        //     itouch: 2501
        // }, {
        //     period: '2010 Q4',
        //     iphone: 3767,
        //     ipad: 3597,
        //     itouch: 5689
        // }, {
        //     period: '2011 Q1',
        //     iphone: 6810,
        //     ipad: 1914,
        //     itouch: 2293
        // }, {
        //     period: '2011 Q2',
        //     iphone: 5670,
        //     ipad: 4293,
        //     itouch: 1881
        // }, {
        //     period: '2011 Q3',
        //     iphone: 4820,
        //     ipad: 3795,
        //     itouch: 1588
        // }, {
        //     period: '2011 Q4',
        //     iphone: 15073,
        //     ipad: 5967,
        //     itouch: 5175
        // }, {
        //     period: '2012 Q1',
        //     iphone: 10687,
        //     ipad: 4460,
        //     itouch: 2028
        // }, {
        //     period: '2012 Q2',
        //     iphone: 8432,
        //     ipad: 5713,
        //     itouch: 1791
        // }],

        // data: [{"takeout": 87, "inside": 15, "nearby": 82, "time": "10am"}, {"takeout": 21, "inside": 58, "nearby": 71, "time": "11am"}, {"takeout": 63, "inside": 84, "nearby": 42, "time": "12pm"}, {"takeout": 39, "inside": 11, "nearby": 74, "time": "1pm"}, {"takeout": 16, "inside": 70, "nearby": 89, "time": "2pm"}, {"takeout": 10, "inside": 83, "nearby": 74, "time": "3pm"}, {"takeout": 49, "inside": 71, "nearby": 73, "time": "4pm"}, {"takeout": 13, "inside": 25, "nearby": 59, "time": "5pm"}, {"takeout": 64, "inside": 40, "nearby": 83, "time": "6pm"}, {"takeout": 30, "inside": 24, "nearby": 65, "time": "7pm"}, {"takeout": 86, "inside": 22, "nearby": 18, "time": "8pm"}, {"takeout": 31, "inside": 54, "nearby": 12, "time": "9pm"}],
        // data: dateArray(),
        data:[{"takeout": 87, "inside": 15, "nearby": 82, "time": "Sun Oct 18 2015 22:51:05 GMT-0700 (PDT)"}],
        xkey: 'time',
        ykeys: ['takeout', 'inside', 'nearby'],
        labels: ['Takeout', 'Eat In', 'Nearby'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        xLabels: "hour",
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "In-Store Sales",
            value: 35
        },{
            label: "Takeout Orders",
            value: 73
        },{
            label: "Catering Orders",
            value: 5
        }],
        resize: true
    });

    Morris.Bar({
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
        labels: ['In Store', 'Takeout'],
        hideHover: 'auto',
        resize: true
    });

});
