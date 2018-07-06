
import axios from 'axios'

export const edit = {
    methods:{
      
        handleEdit() {
           this.el();
            axios
              .put(this.url + this.route + this.id, this.datas, {
                headers: { 
                  "Content-Type": "application/json" ,
                  Authorization: 'Bearer '+localStorage.getItem('token')
                }
              })
              .then(response => {
                console.log(response.data);
              })
              .catch(error => console.log(error));
                
              this.showModal = false;

          }
    }   
}