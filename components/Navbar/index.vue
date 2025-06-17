<script setup lang="ts">
const { locales, setLocal } = useI18n()
</script>

<template>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <div> Navbar {{ $t('AboutMe.para_1') }}</div>
</template>