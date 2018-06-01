<template>
    <div>
        <div class="col-sm-12">
            <div class="col-sm-8" style="margin: auto;">
                <label for="nome">Descrição do produto: </label>
                <input type="text" name="nome">
                <br><br>
            </div>
        </div>

        <div class="col-sm-12"><br></div>

        <div class="col-sm-3">
            <div class="col-sm-12">
            <label for="codigoDeBarra">Código de Barra: </label>
            <input type="text" name="codigoDeBarra">
            </div>

            <div class="col-sm-12">
            <label for="estoque">Quantidade: </label>
            <input type="text" name="estoque">
            </div>

            <div class="col-sm-12">
            <label for="valorUn">Valor unitário: </label>
            <input type="text" name="valorUn">
            </div>
        </div>

        <div class="col-sm-5" style="float: right;">
            <table>
                <tr>
                    <th>Nome</th>
                    <th> actons </th>  
                </tr>
                <tr>
                    <td>oioioi</td>
                    <td>oioii</td>
                    <th>
                        <input type="radio" name="prod" @change="select(prod)">
                    </th>
                </tr>
            </table>
        </div>
    </div>
</template>
