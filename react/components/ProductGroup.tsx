/*
En un CRUD con GraphQL:
    C (Create) Mutation
    R (Read) Query
    U (Update) Mutation
    D (Delete) Mutation
*/

// Esto en vtex.store.graphql
/*{
    category(id:3) {
        name,
        href,
        hasChildren
    }
}*/

/*{
    categories(treeLevel:3){
      id,
      name,
      children {
        id,
        name
      }
    }
}*/

/*{
    categories(treeLevel:3){
        id,
        name,
        href,
        children {
            id,
            name,
            href,
            children {
                id,
                name,
                href
            }
        }
    }
}*/

/*{
  brands {
      name,
      id
  }
  brand(id:2000007){
    id,
    name,
    slug
  }
}*/


/*
{
  orderForm {
    cacheId,
    storeId,
    items {
      id,
      name,
      price
    },
    sellers {
      id,
      name
    }
  }
}
 */

/*
{
  pageType(path:"/zapatos-vans-url/p"){
    id,
    type
  }
}
*/

// vtex.mega-menu@2.8.1
/*
{
  menus {
    id,
    name,
    menu {
      id,
      name
    }
  }
}
*/