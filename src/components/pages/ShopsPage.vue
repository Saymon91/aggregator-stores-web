<template lang="pug">
    .container
        .row
            .col-xs-12

                // ---
                h1
                    | Shops
                h3
                    | This file will list all the shops

                div
                    router-link( :to="{ name: 'NewShop' }" )
                        | add new shop

                // ---
                section.panel.panel-success( v-if="shops.length" )
                    .panel-heading
                        | list of shops
                    table.table.table-striped
                        tr
                            th ID
                            th Title
                            th Description
                            th Action
                        tr( v-for="(shop, index) in shops", :key="index" )
                            td( @click="$router.push({ name: 'ViewProduct', params: { shop: shop._id, title: shop.title } })" ) {{ shop._id }}
                            td( @click="$router.push({ name: 'ViewProduct', params: { shop: shop._id, title: shop.title } })" ) {{ shop.title }}
                            td( @click="$router.push({ name: 'ViewProduct', params: { shop: shop._id, title: shop.title } })" ) {{ shop.description }}
                            td
                                router-link( :to="{ name: 'EditShop', params: { id: shop._id } }" )
                                    | edit shop
                                button.btn.btn-danger.btn-sm( type="button", @click="removeShop(shop._id)" )
                                    | delete
                // ---
                section.panel.panel-danger( v-else )
                    p
                        | There are no shops ... Lets add one now!
                    div
                        router-link( :to="{ name: 'NewShop' }" )
                            | add new shop
</template>

<script>
  import ShopsService from '@/services/ShopsService'
  export default {
    name: 'ShopsPage',
    data () {
      return {
        shops: []
      }
    },
    methods: {
      async getShops () {
        const response = await ShopsService.fetchShops()
        this.shops = response.data.shops
      },
      async removeShop (value) {
        await ShopsService.deleteShop(value)
        this.getShops()
      }
    },
    mounted () {
      this.getShops()
    }
  }
</script>

<style scoped>

</style>