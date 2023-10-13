<template>
  <!-- Formulario para agregar una nueva tarea (inicialmente oculto) -->
  <div class="container">
    <h2>SELECCION DE CIUDADES</h2>
    <div class="form-group">
        <label for="pais">Paises:</label>
        <select id="pais" v-model="paisSeleccionado">
          <option v-for="pais in Paises" :key="pais.id"> {{ pais.name }} </option>
        </select>
      </div>
  </div>
</template>


<script>
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
  
  data() {
    return {
      paisSeleccionado: '',
      paises: []
    };
  },
  created() {

    this.cargarPaises();
  },
  methods: {
    async cargarPaises() {
          try {
            const response = await axios.get(`http://localhost:9999/api/v1/country`);
            this.paises = response.data.result;

        } catch (error) {
          console.error('Error al cargar etiquetas:', error);
        }
      }
  },
};
</script>
  
  <style scoped>
  .add-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  select {
    width: 10%;
  }
  
.etiqueta-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 5px;
}

/* Estilos para el botón "Guardar Tarea" */
.guardar-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px; /* Espacio entre botones */
}

/* Estilos para el botón "Cancelar" */
.cancelar-button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
  </style>
  