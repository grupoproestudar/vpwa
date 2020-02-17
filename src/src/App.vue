<template>
    <div id='app' class='tot'>
        <custom-header></custom-header>
        <b-jumbotron class="min-h tot">
            <b-container fluid>
                <main>
                    <detect-network v-on:detected-condition='detected'>
                        <div slot='online'>
                            <router-view></router-view>
                        </div>
                        <div slot='offline'>
                            <message :show='!state' :message='messageError'></message>
                        </div>
                    </detect-network>
                </main>
            </b-container>
        </b-jumbotron>
        <custom-footer></custom-footer>
    </div>
</template>
<script>
import CustomHeader from '@/components/Header'
import CustomFooter from '@/components/Footer'
import Message from '@/components/Message'
import DetectNetwork from 'v-offline'

export default {
  name: 'app',
  components: { CustomHeader, CustomFooter, Message, DetectNetwork },
  created () {
    window.app = this
  },
  data () {
    return {
      state: null,
      messageError: 'Ops... sua internet móvel está desligada!'
    }
  },
  methods: {
    detected (e) {
      this.state = e
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import '../node_modules/vue-loading-overlay/dist/vue-loading.css';
@import './styles/app.css';
</style>
