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
                headers: { 'Content-Type': 'application/json'},
            })
            .then( (response) => {
                console.log('sucess')
            })
            .catch(error => console.log(error))
              
            this.$emit('create');
            this.showModal = false;
          }
        }
      } 