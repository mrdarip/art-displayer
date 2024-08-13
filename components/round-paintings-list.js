AFRAME.registerComponent('round-paintings-list', {
    schema: {
      list: { type: 'array' }
    },
  
    init: function () {
      const len = this.data.list.length;
      for (let i = 0; i <len; i++) {
        // Create image element and appnd to this entity <a-entity template="src: ./painting.template" data-thumb="#city-thumb"></a-entity>
        const painting = document.createElement('a-entity');
        painting.setAttribute('template', 'src: ./templates/painting.template');
        painting.setAttribute('data-thumb', this.data.list[i]);
        painting.setAttribute('rotation', "0 "+ (-i *360/len + 90) +" 0");

        this.el.appendChild(painting);

        console.log("painting", painting);
      }
    },
  });