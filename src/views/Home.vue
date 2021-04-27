<template>
  <div class="home">
    <header-shayna/>
    <hero-shayna/>
    <women-banner/>
    <insta-shayna/>
    <partner-shayna/>
    <footer-shayna/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderShayna from '@/components/HeaderShayna'
import HeroShayna from '@/components/HeroShayna'
import WomenBanner from '@/components/WomenBanner'
import InstaShayna from '@/components/InstaShayna'
import PartnerShayna from '@/components/PartnerShayna'
import FooterShayna from '@/components/FooterShayna'

export default {
  name: 'Home',
  components: {
    HeaderShayna,
    HeroShayna,
    WomenBanner,
    InstaShayna,
    PartnerShayna,
    FooterShayna,
  }
}
</script>
