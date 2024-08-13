AFRAME.registerComponent('paintings-list', {
    schema: {
      list: { type: 'array' },
      objetive : {type: 'string'}
    },
  
    init: function () {
      //this.el.setAttribute('data-nPaintings', this.data.list.length);
      for (let i = 0; i < this.data.list.length; i++) {
        // Create image element and appnd to this entity <a-entity template="src: ./painting.template" data-thumb="#city-thumb"></a-entity>
        const painting = document.createElement('a-entity');
        painting.setAttribute('template', 'src: ./templates/painting.template');
        painting.setAttribute('data-thumb', this.data.list[i]);

        if(this.data.objetive) {
          if(this.data.objetive == "#parent#"){
            painting.setAttribute('look-at', "#"+this.el.parentElement.id);
          }else{
            painting.setAttribute('look-at', this.data.objetive);
            painting.setAttribute('rotation', "0 90 0");
          }
        }

        this.el.appendChild(painting);
      }
    },
  });