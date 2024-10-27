import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: true,
  rules: {
    'import/no-mutable-exports': 'off',
    'vue/no-export-in-script-setup': 'off',
  },
})
