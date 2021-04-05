<template>
  <div>
    <div class="container">
      <ul class="progressbar">
        <li class="active" data-step="1">Envio</li>
        <li class="theactive" data-step="2">Enviado para Transportadora</li>
        <li data-step="3">Saiu para entrega</li>
        <li data-step="4">Entregue</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --dark-grey: #9fabae;
  --ligth-grey: #dfe3e4;
  --green: #2ecc71;
  --white: #000;
}

ul {
  list-style: none;
  display: flex;
  width: 650px;
  padding: 0;
  margin-top: 500px;
}

ul li {
  position: relative;
  color: var(--dark-grey);
  width: 150px;
  text-align: center;
}

ul li::before {
  display: flex;
  align-items: center;
  justify-content: center;
  content: attr(data-step);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--ligth-grey);
  color: #9fabae;
  position: absolute;
  top: -50px;
  left: calc(50% - 20px);
  z-index: 99;
}

ul li::after {
  content: "";
  width: 150px;
  height: 5px;
  background: var(--ligth-grey);
  position: absolute;
  top: -35px;
  left: -50%;
}

ul li:first-child::after {
  width: 0;
}

ul li.active::before {
  background: var(--green);
  color: #fff;
}

ul li.active::after {
  background: var(--green);
}

ul li.active {
  color: var(--green);
}

ul li.theactive::before {
  background: var(--ligth-grey);
  color: #9fabae;
}

ul li.theactive::after {
  background: var(--ligth-grey);
}

ul li.theactive {
  color: #9fabae;
}
</style>
