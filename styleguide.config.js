module.exports = {
    sections: [
      {
        name: 'Documentation',
        description: 'These sections documents all components and important files in the react app.',
        sections: [
          {
            name: 'Scenes',
            description: 'Each Scene symbolize a unique page in the react app.',
            components: 'src/scenes/**/*.js',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
            
          },
          {
            name: 'Components',
            description: 'Each Component symbolize a reusable part of the react app like titles or tables.',
            components: 'src/components/**/*.js',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
          },
          {
            name: 'Services',
            description: 'A services provides additional functionalities to the react app like parsing or api calls.',
            //components: 'src/services/**/*.js',
            content: 'docs/services.md',
            exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
          }
        ],
      },
    ],
  }
  