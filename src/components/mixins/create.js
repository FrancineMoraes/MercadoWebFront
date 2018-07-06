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
           let token = localStorage.getItem('token')
           this.el();
           axios
            .post(this.url + this.route, this.datas, {
                headers: { 
                    Authorization:'Bearer '+localStorage.getItem('token'),
                    'Content-Type': 'application/json'
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