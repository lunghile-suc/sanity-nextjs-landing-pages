export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6027b8ad8ca5c5e2b65b331f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xcfyumyz',
                  apiId: '94c53299-3e55-4199-990c-8c4cec698fb4'
                },
                {
                  buildHookId: '6027b8adb3c4acfc54075aeb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-826sgpf7',
                  apiId: '9893bd60-8439-4154-9053-87f6ea3f88cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lunghile-suc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-826sgpf7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
