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

  // Add wrapper container
  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout,
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/word-cloud/
  var series = container.children.push(
    am5wc.WordCloud.new(root, {
      categoryField: "tag",
      valueField: "weight",
      calculateAggregates: true, // this is needed for heat rules to work
    })
  );

  // Set up heat rules
  // https://www.amcharts.com/docs/v5/charts/word-cloud/#Via_heat_rules
  series.set("heatRules", [
    {
      target: series.labels.template,
      dataField: "value",
      min: am5.color(0xffd4c2),
      max: am5.color(0xff621f),
      key: "fill",
    },
  ]);

  // Configure labels
  series.labels.template.setAll({
    fontFamily: "Courier New",
    cursorOverStyle: "pointer",
  });

  // Add click event on words
  // https://www.amcharts.com/docs/v5/charts/word-cloud/#Events
  series.labels.template.events.on("click", function (ev) {
    const category = ev.target.dataItem.get("category");
    window.open(
      "https://stackoverflow.com/questions/tagged/" +
        encodeURIComponent(category)
    );
  });

  // Data from:
  // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
  series.data.setAll([
    { tag: "Vue.js", weight: 40 },
    { tag: "JavaScript", weight: 40 },
    { tag: "HTML/CSS", weight: 35 },
    { tag: "Electron.js", weight: 30 },
    { tag: "Pinia", weight: 30 },
    { tag: "Vue-Router", weight: 30 },
    { tag: "TypeScript", weight: 25 },
    { tag: "Ionic", weight: 25 },
    { tag: "Node.js", weight: 23 },
    { tag: "Composition API", weight: 20 },
    { tag: "Axios", weight: 20 },
    { tag: "Amchart", weight: 15 },
    { tag: "Chart.js", weight: 15 },
    { tag: "Plotly.js", weight: 15 },
    { tag: "i18n", weight: 15 },
    { tag: "Nuxt.js", weight: 12 },
  ]);
});
</script>
