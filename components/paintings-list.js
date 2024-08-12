AFRAME.registerComponent('paintings-list', {
    schema: {
      list: { type: 'array' }    
    },
  
    init: function () {
      for (let i = 0; i < this.data.list.length; i++) {
        // Create image element and appnd to this entity <a-entity template="src: ./painting.template" data-thumb="#city-thumb"></a-entity>
        const painting = document.createElement('a-entity');
        painting.setAttribute('template', 'src: ./templates/painting.template');
        painting.setAttribute('data-thumb', this.data.list[i]);
        this.el.appendChild(painting);
      }
    },
  });