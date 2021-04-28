<template>
  <div class="car col-md-4 mb-3">
    <!-- Route parameter getting set with the Params object -->
    <router-link :to="{name: 'CarDetails', params: { id: car.id }}">
      <div class="card shadow">
        <img class="card-img-top" :src="car.imgUrl" alt="">
        <div class="card-body d-flex justify-content-between align-items-center">
          <p class="card-title m-0">
            {{ car.make }} - {{ car.model }}
          </p>
          <div class="user-icon">
            <img class="w-100 rounded-circle" :src="car.creator.picture" alt="">
          </div>
          <div>
            <i class="fas fa-comment"></i>{{ car.comments.length }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Car',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.user-icon {
  width: 2em
 }
a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color:inherit;
    text-decoration:none;
}

.car:hover {
    cursor:pointer;
    transform: translateY(-3px);
}
</style>
