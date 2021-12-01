module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest'
  },
  globals: {
    'vue-jest': {
      transform: {
        i18n: require('@intlify/vue2-i18n-jest')
      }
    }
  }
}
