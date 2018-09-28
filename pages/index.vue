<template>
  <div>
    <div class="wel-text">
      <div>
        <h1>🤟 digital design tailored for you. </h1>
      </div>
    </div>
    <b-container>
      <b-row class="porto-list">
        <b-col cols="12" class="porto-item" v-for="porto in portos.items" :key="porto.sys.id">
          <img :src="porto.fields.gambar" :alt="porto.fields.judul">
           <div class="overlay">
          <b-link class="text rmore" :to="'/porto/' + porto.sys.id">
              {{ porto.fields.judul }}
            </b-link>
          
        </div>        
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  async asyncData({ app }) {
    
    const credentials = {
      space_id: 'upxii2s06ovl',
      access_token: 'ecc0dbcf99e214ba0175bb8b0e432558d727cde7d04c978974c30214b2455e37',
      env: 'master'
    }
    
    const portos = await app.$axios.$get('https://cdn.contentful.com' + '/spaces/' + credentials.space_id + '/environments/' + credentials.env + '/entries?access_token=' + credentials.access_token + '&content_type=porto')
    return { portos }
  }
}
</script>

