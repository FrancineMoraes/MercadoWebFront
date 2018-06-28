import axios from 'axios'

export const del = {
   methods: {
        handleDelete() {
          this.el();

          axios
            .delete(this.url + this.route + this.id)
            .then(response => {
              console.log('response deleteeeeeeee    ' + response.data);
            })
            .catch(error => console.log(error));
              this.showModal = false;
        },

        handleDelete2(){
          this.el();
          axios
            .delete(this.url + this.route + this.cupom.id.cupom_id + '/' +this.cupom.id.produto_id)
            .then(response => {
              this.countPrice -= this.cupom.valorProduto;
              this.count -= this.cupom.quantVendida;
              console.log('response deleteeeeeeee compostooo    ' + response.data);
            })
            .catch(error => console.log(error));
              this.showModal = false;
        }
      },

}