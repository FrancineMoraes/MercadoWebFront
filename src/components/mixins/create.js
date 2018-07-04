import axios from 'axios'

export const create = {

    data(){
        return{
            showModal: false,
        };
    },

    methods:{
        show(){
          this.showModal = true;
          this.reset();
        },
    
        cancel(){
          this.showModal = false;
          this.reset();
        },
        
       onSubmit() {
           this.el();
           axios
            .post(this.url + this.route, this.datas, {
                headers: { 'Content-Type': 'application/json',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUzMDc0NDk4NX0.bEa3C-vz5WABLc8KucLnHTXN0XbYdE9j1nKqj89gm_FCbFYE1MOIuC0lHyn78IorUv8wDZvK2V4Vn27PPTNGDg'
                },
            })
            .then( (response) => {
            })
            .catch(error => console.log(error))
              
            this.$emit('create');
            this.showModal = false;
          }
        }
      } 