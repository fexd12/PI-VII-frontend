<template>
  <div class="container_full">
    <h3 class="titulo">Seus Pedidos</h3>
    <div class="container">
      <form action="">
        <div class="pedidos">
          <div class="input-field">
            <label>Produto: </label>
            <input
              type="text"
              name="produto"
              id="produto"
              value="Raspberry 4"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Data: </label>
            <input
              type="text"
              name="data"
              id="data"
              value="28/04/2021"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>N° Pedido: </label>
            <input
              type="number"
              name="numpedido"
              id="numpedido"
              value="1536987136"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Status: </label>
            <input
              type="text"
              name="status"
              id="status"
              value="Entregue"
              disabled
            />
            <div class="underline"></div>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <form action="">
        <div class="pedidos">
          <div class="input-field">
            <label>Produto: </label>
            <input
              type="text"
              name="produto"
              id="produto"
              value="Teclado Gamer"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Data: </label>
            <input
              type="text"
              name="data"
              id="data"
              value="15/03/2021"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>N° Pedido: </label>
            <input
              type="number"
              name="numpedido"
              id="numpedido"
              value="1478523690"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Status: </label>
            <input
              type="text"
              name="status"
              id="status"
              value="Entregue"
              disabled
            />
            <div class="underline"></div>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <form action="">
        <div class="pedidos">
          <div class="input-field">
            <label>Produto: </label>
            <input
              type="text"
              name="produto"
              id="produto"
              value="Mouse Gamer"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Data: </label>
            <input
              type="text"
              name="data"
              id="data"
              value="23/02/2021"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>N° Pedido: </label>
            <input
              type="number"
              name="numpedido"
              id="numpedido"
              value="9635874210"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Status: </label>
            <input
              type="text"
              name="status"
              id="status"
              value="Entregue"
              disabled
            />
            <div class="underline"></div>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <form action="">
        <div class="pedidos">
          <div class="input-field">
            <label>Produto: </label>
            <input
              type="text"
              name="produto"
              id="produto"
              value="Iphone 12"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Data: </label>
            <input
              type="text"
              name="text"
              id="text"
              value="23/12/2021"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>N° Pedido: </label>
            <input
              type="number"
              name="numpedido"
              id="numpedido"
              value="1533697131"
              disabled
            />
            <div class="underline"></div>
          </div>
          <div class="input-field">
            <label>Status: </label>
            <input
              type="text"
              name="status"
              id="status"
              value="Entregue"
              disabled
            />
            <div class="underline"></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.container_full {
  flex-direction: row;
  
}

.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  color: #fff;
  font-weight: bold;
}

.container {
  margin-top: 30px;
  background: white;
  height: 210px;
  width: 450px !important;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

label {
  display: inline-block;
  width: 160px;
  text-align: left;
  padding: 1px;
  font-weight: bold;
  font-size: 15px;
}

.input-field{
  padding-top: 10px;
  width: auto;
  font-size: 15px;
}

input > label {
  right: auto;
}

#status {
  color: green;
}

</style>