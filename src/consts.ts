export const graphConfig = {
  automaticRearrangeAfterDropNode: true,
  directed: true,
  height: 850,
  width: 1500,

  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  highlightOpacity: 0.2,
  initialZoom: 0.4,
  node: {
    color: 'black',
    size: 600,
    highlightStrokeColor: 'blue',
    fontSize: 16,
    highlightFontSize: 25,
    highlightFontWeight: 'bold',
  },
  link: {
    highlightColor: 'black',
    fontSize: 14,
    renderLabel: true,
    highlightFontWeight: 'bold',
  },
  d3: {
    gravity: -300,
    alphaTarget: 0.5,
  },
};
