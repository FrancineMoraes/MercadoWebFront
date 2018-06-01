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
        }
      },

}