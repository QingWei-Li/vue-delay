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

  computed: {
    ms() {
      if (this.form) {
        return this.from - Date.now() + this.wait;
      } else {
        return this.wait;
      }
    }
  },

  data: () => ({
    waiting: true
  }),

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
