AFRAME.registerComponent("art-section", {
  schema: {
    paintings: { type: "array" },

    width: { type: "number", default: 10 },
    height: { type: "number", default: 10 },
    name: { type: "string", default: "painting" },
  },

  init: function () {
    const maxPaintingsPerIsle = this.data.width/(0.5 + 1); // margin + img width
    const islesCount = this.data.paintings.length / maxPaintingsPerIsle;
    
    for (let i = 0; i < islesCount; i++) {
      const isle = document.createElement("a-entity");
      isle.setAttribute("template", "src: ./templates/isle.template");
      isle.setAttribute("data-height","3");

      isle.setAttribute("data-paintings", "list:"+this.data.paintings.slice(i * maxPaintingsPerIsle, (i+1) * maxPaintingsPerIsle).join(",")+";");
      console.log(this.data.paintings.slice(i * maxPaintingsPerIsle, (i+1) * maxPaintingsPerIsle).join(","));
      isle.setAttribute("data-margin", "0.5");
      isle.setAttribute("data-imgwidth", "1");
      isle.setAttribute("position","0 0 "+(i* this.data.height/islesCount - this.data.height/2));
      this.el.appendChild(isle);
    }
  },
});
