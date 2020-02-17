<template>
  <header id='custom-header'>
    <br/>
    <b-navbar toggleable="md" class="navbar-custom">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">{{ title }}</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <br/>
          <b-navbar-nav>
            <b-nav-item to="/groups">Aulas</b-nav-item>
            <b-nav-item to="/mentoring">Apadrinhamento</b-nav-item>
            <b-nav-item to="/about">Sobre</b-nav-item>
            <b-nav-item to="/contact">Contato</b-nav-item>
          </b-navbar-nav>
         </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'customHeader',
  data () {
    return {
      title: 'Pró - Estudar Feedback App'
    }
  }
}
</script>

<style>
</style>
