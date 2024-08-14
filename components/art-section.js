AFRAME.registerComponent("art-section", {
  schema: {
    paintings: { type: "array" },

    width: { type: "number", default: 10 },
    height: { type: "number", default: 10 },
    name: { type: "string", default: "painting" },
  },

  init: function () {
    const paintsPerIsle = this.data.paintings.length / this.data.height;
    for (let i = 0; i < paintsPerIsle; i++) {
      const isle = document.createElement("a-entity");
      isle.setAttribute("template", "src: ./templates/isle.template");
      isle.setAttribute("data-height","3");

      isle.setAttribute("data-paintings", "list:"+this.data.paintings.slice(i * paintsPerIsle, (i+1) * paintsPerIsle).join(","));
      isle.setAttribute("data-margin", "0.5");
      isle.setAttribute("data-imgwidth", "1");
      this.el.appendChild(isle);
    }
  },
});
