<template>
  <div class="cars container">
    <div class="row">
      <div class="col  py-3">
        <h2>Cars</h2>
        <button title="Open Create Car Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-car-form"
                v-if="state.user.isAuthenticated"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div v-if="state.loading">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <Car :car="car" v-else v-for="car in state.cars" :key="car.id" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
export default {
  name: 'CarsPage',
  setup() {
    const state = reactive({
      loading: true,
      user: computed(() => AppState.user),
      cars: computed(() => AppState.cars)
    })
    // This fires everytime this component is rendered to the Dom
    // similar to how we were using the 'constructor' of the controllers in MVC
    onMounted(async() => {
      try {
        await carsService.getCars()
        state.loading = false
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
