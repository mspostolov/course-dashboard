jQuery(document).ready(function() {
  jQuery('input[placeholder]').placeholder();

  jQuery('.tooltip-link').tooltip();

  jQuery(".block-content .list-group").readMoreReadLess({
    itemInSummary: 4,
    itemClass: 'list-group-item',
    readMoreClass: 'show-readmore readmore',
    readLessClass: 'hide-readmore readmore',
    readMoreText: 'Show more <span>»</span>',
    readLessText: 'Hide <span>«</span>'
  });

  jQuery('#experience-chart').highcharts({
    title: 'none',
    legend: {
      enabled: false
    },
    chart: {
      plotBackgroundColor: '#eaedf1',
      height: '155'
    },
    xAxis: {
      categories: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      lineWidth: 0,
      labels: {
        style:{
          'color': '#9ea7b3',
          'font-size': '11px'
        }
      },
      tickWidth: 0
    },
    yAxis: {
      title: {
        text: null
      },
      alternateGridColor: '#fff',
      gridLineWidth: 0,
      labels: {
        enabled: false
      },
      tickPixelInterval: 24,
    },
    series: [{
      name: 'Exp',
      data: [21, 24, 12, 2, 14, 36, 46, 33, 22, 29, 43],
      marker: {
        symbol: 'url(img/chart_marker.png)'
      },
      color: '#2ecc71',
      lineWidth: 3
    }],
    credits: {
      enabled: false
    }
  });

});
