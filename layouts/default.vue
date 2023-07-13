<template>
  <div>
    <BNavbar toggleable="lg" type="light" class="fixed-top bg-yellow shadow">
      <BNavbarBrand to="/">
        <span class="fw-bold">Doggo</span>
        <span>shop</span>
      </BNavbarBrand>
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="mx-auto d-flex gap-1 gap-md-2 gap-lg-5">
          <BNavItem to="/">Home</BNavItem>
          <BNavItem to="/breeds">Explore</BNavItem>
          <BNavItem to="/about">About</BNavItem>
        </BNavbarNav>
        <BNavbarNav class="d-flex">
          <BNavItem href="https://github.com/anonGTF/">
            <IBiGithub />
          </BNavItem>
          <BNavItem href="https://www.linkedin.com/in/galih-tegar-febrianto/">
            <IBiLinkedin />
          </BNavItem>
          <BNavItem href="https://www.instagram.com/gt_febrianto/">
            <IBiInstragram />
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
  import IBiGithub from '~icons/bi/github'
  import IBiLinkedin from '~icons/bi/linkedin'
  import IBiInstragram from '~icons/bi/instagram'
</script>

<style scoped>

</style>