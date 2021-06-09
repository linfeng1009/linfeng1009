<template>
  <div class="Toast" :class="type" v-if="showToast">
    {{ message }}
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
}

@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.success {
  color: #67c23a;
  background: rgb(225, 243, 216);
}

.warning {
  color: #e6a23c;
  background: rgb(250, 236, 216);
}

.fail {
  color: #f56c6c;
  background: rgb(253, 226, 226);
}
</style>