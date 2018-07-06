import axios from 'axios'

export const del = {
   methods: {
        handleDelete() {
          this.el();

          axios
            .delete(this.url + this.route + this.id, {
              headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
              }
            })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => console.log(error));
              this.showModal = false;
        },

        handleDelete2(){
          this.el();
          axios
            .delete(
              this.url + this.route + this.cupom.cupomId.cupom_id + '/' +this.cupom.cupomId.produto_id,{
              headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
              }
            },
          )
            .then(response => {
              this.countPrice -= this.cupom.valorProduto;
              this.count -= this.cupom.quantVendida;
              console.log('response deleteeeeeeee compostooo    ' + response.data);
              console.log('entrei no delete 2'),
            console.log(this.cupom.cupomId.cupom_id+'     '+this.cupom.cupomId.produto_id)
            })
            .catch(error => console.log(error));
            console.log('entrei no delete 2'),
            console.log(this.cupom.cupomId.cupom_id+'     '+this.cupom.cupomId.produto_id)
              this.showModal = false;
        }
      },

}