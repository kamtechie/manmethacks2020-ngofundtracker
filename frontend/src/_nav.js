export default {
  items: [
    {
      name: 'Overall Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'User',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Invest',
      url: '/invest',
      icon: 'icon-credit-card'
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: "icon-graph"
    },
  ]
}