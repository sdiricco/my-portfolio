<template>
  <div ref="chartContainer" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import * as am5 from "@amcharts/amcharts5";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import * as am5wc from "@amcharts/amcharts5/wc";
// import am5index from "@amcharts/amcharts5/index";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const chartContainer = ref(null);

onMounted(() => {
  /* Imports */

  /* Chart code */
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  let root = am5.Root.new(chartContainer.value);

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  let zoomableContainer = root.container.children.push(
    am5.ZoomableContainer.new(root, {
      width: am5.p100,
      height: am5.p100,
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
  let series = zoomableContainer.contents.children.push(
    am5hierarchy.Pack.new(root, {
      maskContent: true, //!important with zoomable containers
      topDepth: 1,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      
    })
  );

  // Generate and set data
  // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
  let data = {
    children: [
      { name: "Vue", value: 1268 },
      { name: "Electron", value: 553 },
      { name: "Nuxt", value: 1300 },
      { name: "Plotly.js", value: 831 },
      { name: "Axios", value: 1009 },
      { name: "Amchart", value: 542 },
      { name: "Chart.js", value: 1226 },
      { name: "Ionic", value: 721 },
      { name: "Pinia", value: 2790 },
      { name: "C/C++", value: 1377 },
      { name: "React.js", value: 1055 },
      { name: "Javascript", value: 614 },
      { name: "Autosar", value: 614 },
      { name: "EB Tresos", value: 614 },
    ],
  };

  series.data.setAll([data]);

  series.nodes.template.set("tooltipText", "{category}");

  // Make stuff animate on load
  series.appear(1000, 100);
});
</script>
