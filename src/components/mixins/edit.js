
import axios from 'axios'

export const edit = {
    methods:{
      
        handleEdit() {
           this.el();
            axios
              .put(this.url + this.route + this.id, this.datas, {
                headers: { "Content-Type": "application/json" }
              })
              .then(response => {
                console.log('response do edit caralhoooww' + response.data);
              })
              .catch(error => console.log(error));
                
              this.showModal = false;

          }
    }   
}