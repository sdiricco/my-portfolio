<template>
  <div ref="chartContainer" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5wc from "@amcharts/amcharts5/wc";

const chartContainer = ref(null);

onMounted(() => {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  const root = am5.Root.new(chartContainer.value);

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Add series
  // https://www.amcharts.com/docs/v5/charts/word-cloud/
  let series = root.container.children.push(
    am5wc.WordCloud.new(root, {
      minFontSize: am5.percent(4),
      maxFontSize: am5.percent(12),
      angles: [0],
      valueField: "value",
      calculateAggregates: true, // this is needed for heat rules to work
    })
  );



  // Configure labels
  series.labels.template.setAll({
    fontFamily: "Courier New",
  });

  series.set("heatRules", [
    {
      target: series.labels.template,
      dataField: "value",
      min: am5.color(0xffd4c2),
      max: am5.color(0xff621f),
      key: "fill",
    },
  ]);


  series.data.setAll([
    { category: "Vue.js", value: 3.0 },
    { category: "Ionic", value: 2 },
    { category: "Pinia", value: 2.8 },
    { category: "React.js", value: 1.5 },
    { category: "Nuxt.js", value: 2 },
    { category: "Electron.js", value: 2.5 },
    { category: "Axios", value: 2.5 },
    { category: "Amcharts", value: 2.5 },
    { category: "Plotly.js", value: 2.5 },
    { category: "Chart.js", value: 2.0 },
    { category: "PrimeVue", value: 2.8 },
    { category: "Git", value: 2.5 },
    { category: "GitHub", value: 2.5 },
    { category: "i18n", value: 2.8 },
    {
      category: "Typescript",
      value: 2.5,
    },
    {
      category: "C/C++",
      value: 2.5,
    },
    { category: "Html5", value: 2.8 },
    { category: "Css3", value: 2.8 },
  ]);

  setInterval(function () {
    am5.array.each(series.dataItems, function (dataItem) {
      const category = dataItem.get('category');
      if (category !== 'Vue.js') {
        const value = Math.random() * 3;
        dataItem.set("value", value);
        dataItem.set("valueWorking", value);
      }

    })
  }, 5000)


});
</script>
