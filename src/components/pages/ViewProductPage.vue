<template lang="pug">
    .container
        .row
            .col-xs-12
                section.search
                    h1
                        | search product in {{ $route.params.title }}
                    div.form
                        div
                            input( type="text" name="search" id="search" placeholder="write product id" v-model.trim="search.id" @input="searchProduct()")

                section.panel.panel-success( v-if="product.name || !search.id" )
                    .panel-heading
                        | list of products
                    table.table.table-striped
                        tr
                            th Name
                            th Price
                        tr
                            td {{ product.name }}
                            td {{ product.price }}
                            td
                // ---
                section.panel.panel-danger( v-else )
                    p
                        | {{ search.inSearch ? `Search product ${search.id}` : `Product with id ${search.id} not found` }}
                router-link( :to="{ name: 'Shops' }" )
                    | go to list of shops
</template>

<script>
  import ShopsService from '@/services/ShopsService'

  const SEARCH_DELAY = 300

  export default {
    name: 'ViewProductPage',
    data () {
      return {
        search: {
          id: '',
          inSearch: false
        },
        product: {
          name: '',
          price: ''
        }
      }
    },
    methods: {
      async searchProduct () {
        this.search.inSearch = true

        if (this.timer) {
          clearTimeout(this.timer)
        }

        this.timer = setTimeout(async () => {
          const response = await ShopsService.searchProduct({ shop: this.$route.params.shop, id: this.search.id })
            .catch(() => {
              return { data: {} }
            })
          this.search.inSearch = false
          this.product.name = response.data.name
          this.product.price = response.data.price
        }, SEARCH_DELAY)
      }
    }
  }
</script>

<style lang="scss" scoped>
    //
</style>