import axios from 'axios'

export const init = {
    
    data() {
        return {
          selected: null,
          object: '',
        }
      },
      
    methods: { 
        
        select(obj) {
            this.selected = obj;
            this.$bus.$emit("objectEmited", this.selected);
        },

        select2(obj) {
            this.selected = obj;
            this.$bus.$emit("objectEmited", this.selected);
        },

        init() {
            this.el();
            
            axios
              .get(this.url + this.route)
              .then(res => {
                  this.produto = res.data;
                  this.usuario = res.data;
                  this.cupom = res.data;
                  this.venda = res.data;
              });
          },
    },
    
    created() {
        this.init();
    },
    
    updated() {
          this.init();
    }
}