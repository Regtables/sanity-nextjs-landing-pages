export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6241dfe6f5836d0075514957',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iohk4gp5',
                  apiId: '61cd00d0-5eaa-4fcb-a680-da93bf48862a'
                },
                {
                  buildHookId: '6241dfe65f8926008c4f229c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h7kvtobv',
                  apiId: '0d7402cb-1001-4edf-aee1-be8e2624fdff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Regtables/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h7kvtobv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
