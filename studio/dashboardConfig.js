export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61cc9d716b80655662d74c54',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-c83otsyg',
                  apiId: '26b8c133-3451-4500-8137-d36584d0c9cd'
                },
                {
                  buildHookId: '61cc9d7290dfdef9976a3e72',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-i818caxd',
                  apiId: 'b8400522-3133-44d7-84cf-702b0ec0a9ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeanbaptis123/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-i818caxd.netlify.app', category: 'apps'}
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
