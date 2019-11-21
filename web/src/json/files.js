export default [
  {
    name: 'build',
    type: 'folder',
    src: '',
    list: [
      {
        name: 'build',
        fullName: 'build.js',
        type: 'file',
        ext: 'js',
        src: ''
      },
      {
        name: 'check-versions',
        fullName: 'check-versions.js',
        type: 'file',
        ext: 'js',
        src: ''
      },
      {
        name: 'webpack.dev.config',
        fullName: 'webpack.dev.config.js',
        type: 'file',
        ext: 'js',
        src: ''
      }
    ]
  },
  {
    name: 'config',
    type: 'folder',
    src: '',
    list: [
      {
        name: 'dev.env',
        fullName: 'dev.env.js',
        type: 'file',
        ext: 'js',
        src: ''
      },
      {
        name: 'index',
        fullName: 'index.js',
        type: 'file',
        ext: 'js',
        src: ''
      },
      {
        name: 'webpack.dev.config',
        fullName: 'prod.env.js',
        type: 'file',
        ext: 'js',
        src: ''
      }
    ]
  },
  {
    name: 'src',
    type: 'folder',
    src: '',
    list: [
      {
        name: 'assets',
        type: 'folder',
        src: '',
        list: [
          {
            name: 'index',
            fullName: 'index.js',
            type: 'file',
            ext: 'js',
            src: ''
          }
        ]
      },
      {
        name: 'app',
        fullName: 'app.vue',
        type: 'file',
        ext: 'vue',
        src: ''
      },
      {
        name: 'main',
        fullName: 'main.js',
        type: 'file',
        ext: 'js',
        src: ''
      }
    ]
  },
  {
    name: 'store',
    type: 'folder',
    src: '',
    list: [
      {
        name: 'index',
        fullName: 'index.js',
        type: 'file',
        ext: 'js',
        src: ''
      }
    ]
  },
  {
    name: 'index',
    fullName: 'index.html',
    type: 'file',
    ext: 'html',
    src: ''
  },
  {
    name: 'package',
    fullName: 'package.json',
    type: 'file',
    ext: 'json',
    src: ''
  },
  {
    name: '',
    fullName: '.gitignore',
    type: 'file',
    ext: '.gitignore',
    src: ''
  }
]