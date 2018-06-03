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
            console.log('selectedddddd mmeu parceiro    ' + this.selected.id)
            this.$bus.$emit("objectEmited", this.selected);
        },
        init() {
            this.el();
            
            axios
              .get(this.url + this.route)
              .then(res => {
                  this.produto = res.data;
                  this.login = res.data;
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