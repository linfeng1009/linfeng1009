<template>
  <div id="app">
    <button class="btn" @click="showToast">点击显示弹窗</button>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$request.post("zfy/zbigshow_confession.html", {
      myname: "aaa",
      whoname: "aaa",
      whotel: "13569203035",
      content: "aaaa",
    }).then(res=>{
      console.log(res)
    })
  },
  methods: {
    showToast() {
      this.$Toast("成功弹出✔", 3000, "success");
    },
  },
};
</script>

<style scoped>
.btn {
  display: block;
  margin: 30px auto;
  padding: 10px 20px;
}
</style>
