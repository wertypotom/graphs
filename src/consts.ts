export const graphConfig = {
  automaticRearrangeAfterDropNode: true,
  directed: true,
  height: 600,
  width: 1500,
  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  highlightOpacity: 0.2,
  initialZoom: 0.4,
  node: {
    color: 'black',
    size: 120,
    highlightStrokeColor: 'blue',
    fontSize: 16,
    highlightFontSize: 25,
    highlightFontWeight: 'bold',
    // labelProperty: (node: any) => {
    //   return 'node.label';
    // },
  },
  link: {
    highlightColor: 'black',
    fontSize: 14,
    // labelProperty: (link: any) => {
    //   return link.source + ' links ' + link.target;
    // },
    renderLabel: true,
    highlightFontWeight: 'bold',
  },
  d3: {
    gravity: -300,
    alphaTarget: 0.5,
  },
};
