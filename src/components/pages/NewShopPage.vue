<template lang="pug">
    .container
        .row
            .col-xs-12
                h1
                    | Add New Shop
                // ---
                form
                    .form-group
                        input.form-control( type="text", name="title", id="title", placeholder="Title", v-model.trim="shop.title" )
                    .form-group
                        textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Description", v-model.trim="shop.description" )
                    .form-group
                        textarea.form-control( type="text", rows="5", name="config", id="config", placeholder="Configuration", v-model.trim="shop.config" )
                    .form-group
                        button.btn.btn-block.btn-primary( type="button", name="addShop", id="addShop", @click="addShop()" )
                            | add new shop
                    // ---
                    section
                        button.btn.btn-success.btn-block( type="button", @click="goBack()" )
                            | go to shops page
</template>

<script>
  import ShopsService from '@/services/ShopsService'
  export default {
    name: 'NewShopPage',
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
      async addShop () {
        if (this.shop.title !== '' && this.shop.description !== '' && this.shop.config !== '') {
          await ShopsService.addNewShop({
            title: this.shop.title,
            description: this.shop.description,
            config: this.shop.config
          })
          this.$router.push({ name: 'Shops' })
        } else {
          alert('Empty fields!')
        }
      },
      goBack () {
        this.$router.push({ name: 'Shops' })
      }
    }
  }
</script>

<style lang="scss" scoped>
    //
</style>
