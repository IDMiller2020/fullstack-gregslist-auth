
import { AppState } from '../AppState.js'
import router from '../router.js'
import { api } from './AxiosService.js'

class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    AppState.cars = res.data
  }

  async getCarById(id) {
    const res = await api.get('api/cars/' + id)
    AppState.activeCar = res.data
  }

  async createCar(newCar) {
    const res = await api.post('api/cars', newCar)
    AppState.cars.push(res.data)
    router.push({ name: 'CarDetails', params: { id: res.data.id } })
  }

  async addComment(newComment) {
    await api.post(`api/cars/${newComment.carId}/comments`, newComment)
    this.getCarById(newComment.carId)
  }

  async deleteComment(carId, commentId) {
    await api.delete(`api/cars/${carId}/comments/${commentId}`)
    this.getCarById(carId)
  }

  async bid(car) {
    await api.put('api/cars/' + car.id + '/bid', car)
  }

  async deleteCar(id) {
    await api.delete('api/cars/' + id)
    AppState.cars = AppState.cars.filter(car => car.id !== id)
  }
}

export const carsService = new CarsService()
