export default {
  methods: {
    selectAll() {
      this.$nextTick(() => this.$refs.select.select())
    }
  }
};