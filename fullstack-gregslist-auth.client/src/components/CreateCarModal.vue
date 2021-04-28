<template>
  <div class="modal fade"
       id="new-car-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            New Car
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="createCar">
          <div class="modal-body">
            <div class="form-group">
              <label for="make">Make</label>
              <input type="text"
                     class="form-control"
                     id="make"
                     placeholder="Make..."
                     v-model="state.newCar.make"
                     required
              >
            </div>
            <div class="form-group">
              <label for="model">Model</label>
              <input type="text"
                     class="form-control"
                     id="model"
                     placeholder="Model..."
                     v-model="state.newCar.model"
                     required
              >
            </div>
            <div class="form-group">
              <label for="make">Year</label>
              <input type="number"
                     class="form-control"
                     id="year"
                     placeholder="Year..."
                     min="1920"
                     max="2021"
                     v-model="state.newCar.year"
                     required
              >
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number"
                     class="form-control"
                     id="price"
                     placeholder="Price..."
                     min="1"
                     v-model="state.newCar.price"
              >
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text"
                     class="form-control"
                     id="description"
                     placeholder="Description..."
                     minlength="3"
                     v-model="state.newCar.description"
              >
            </div>
            <div class="form-group">
              <label for="imgUrl">Image Url</label>
              <input type="text" class="form-control" id="imgUrl" placeholder="Url..." v-model="state.newCar.imgUrl">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-link text-dark" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { carsService } from '../services/CarsService'
import $ from 'jquery'
export default {
  name: 'CreateCarModal',
  setup() {
    const state = reactive({
      newCar: {}
    })
    return {
      state,
      async createCar() {
        try {
          await carsService.createCar(state.newCar)
          state.newCar = {}
          $('#new-car-form').modal('hide')
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
