export default {
  widgets: [
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
                  buildHookId: '5edfcc92ec3b68040b801377',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tqqggyzm',
                  apiId: '9d437003-ebb7-4d1c-96c5-38b1f010bdae'
                },
                {
                  buildHookId: '5edfcc93f2f34579e1450cae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rukrn1j2',
                  apiId: '3167c19e-be35-443f-9170-6d226725b6b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thebuilder/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rukrn1j2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
