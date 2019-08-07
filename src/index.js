export default {
  name: 'Delay',

  props: {
    wait: {
      type: Number,
      default: 0
    },
    from: {
      type: Number,
      default: Date.now()
    }
  },

  data: () => ({
    waiting: true
  }),

  computed: {
    ms() {
      if (this.from) {
          return this.from - Date.now() + this.wait;
      } else {
          return this.wait;
      }
    }
  },

  created() {
    this.timer = setTimeout(() => {
      this.waiting = false
    }, this.ms)
  },

  destroyed() {
    clearTimeout(this.timer)
  },

  render(h) {
    return h(
      'div',
      this.waiting ? this.$slots.loading || null : this.$slots.default
    )
  },

  install(Vue, name) {
    Vue.component(name || 'Delay', this)
  }
}
