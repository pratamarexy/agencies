<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">agencies.</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/about">about</b-nav-item>
      
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      
      <b-nav-item href="/contact  ">contact</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <nuxt/>
    <footer>
      @2018 agencies. vue reserved allright 
    </footer>
  </div>
</template>



