<template lang="pug">
    .container
        .row
            .col-xs-12
                section.edit
                    h1
                        | edit shop {{ $route.params.id }}
                    form
                        .form-group
                            input.form-control( type="text", name="title", id="title", placeholder="Title", v-model.trim="shop.title" )
                        .form-group
                            input.form-control( type="text", name="description", id="description", placeholder="Description", v-model.trim="shop.description" )
                        .form-group
                            textarea.form-control( type="text" name="config", rows="5" id="config", placeholder="Configuration", v-model.trim="shop.config" )
                        .form-group
                            button.btn.btn-block.btn-primary( type="button", name="editShop", @click="editShop()" )
                                | edit shop
                    // ---
                    div
                        router-link( :to="{ name: 'Shops' }" )
                            | go to list of shops
</template>

<script>
  import ShopsService from '@/services/ShopsService'
  export default {
    name: 'EditShopPage',
    data () {
      return {
        shop: {
          title: '',
          description: '',
          config: ''
        }
      }
    },
    methods: {
      async getShop () {
        const response = await ShopsService.getShop({ id: this.$route.params.id })
        this.shop.title = response.data.title
        this.shop.description = response.data.description
        this.shop.config = JSON.stringify(response.data.config, true, 2)

        console.log(this.shop)
      },
      async editShop () {
        if (this.shop.title !== '' && this.shop.description !== '' && this.shop.config !== '') {
          await ShopsService.updateShop({
            id: this.$route.params.id,
            title: this.shop.title,
            description: this.shop.description,
            config: this.shop.config
          })
          this.$router.push({ name: 'Shops' })
        }
      }
    },
    mounted () {
      this.getShop()
    }
  }
</script>

<style lang="scss" scoped>
    //
</style>
