import hello from './funcs/index'

export default {
    goosemodHandlers: {
        onImport: () => {
          hello()
        },
        onRemove: () => {}
      }
}