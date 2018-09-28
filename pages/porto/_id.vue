<template>
  <div>
    <div class="wel-text-id">
      <div>
        <h1>{{ portos.fields.judul }}</h1>
        <h5>{{ portos.fields.summary  }}</h5>
      </div>
    </div>
    <b-container>
        <b-row>
            <b-col cols="12" class="text-center porto-detail">
                <div class="porto-img">
                    <img :src="portos.fields.gambar" :alt="portos.fields.judul">
                </div>
                <h2>Project Description</h2>
                <p>{{ portos.fields.description }}</p>
            </b-col>
        </b-row>
        <b-row class="porto-client">
          <b-col cols="4">
            <h4>Category</h4>
            <p>{{ portos.fields.kategori }}</p>
          </b-col>  
          <b-col cols="4">
            <h4>Client</h4>
            <p>{{ portos.fields.klien }}</p>
          </b-col>  
          <b-col cols="4">
            <h4>Years</h4>
            <p>{{ portos.fields.year }}</p>
          </b-col>  
        </b-row>          
    </b-container>
  </div>
</template>

<script>

export default {
  async asyncData({ app, params }) {
    
    const credentials = {
      space_id: 'upxii2s06ovl',
      access_token: 'ecc0dbcf99e214ba0175bb8b0e432558d727cde7d04c978974c30214b2455e37',
      env: 'master'
    }
    
    const portos = await app.$axios.$get('https://cdn.contentful.com' + '/spaces/' + credentials.space_id + '/environments/' + credentials.env + '/entries/'+ params.id +'?access_token=' + credentials.access_token + '&content_type=porto')
    return { portos }
  }
}
</script>

<style>



  

</style>

