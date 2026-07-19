<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

const links = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Our Story', to: '/our-story' },
  { name: 'Services', to: '/services' },
  { name: 'Contact Us', to: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DDE3E0]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
      <RouterLink to="/" class="flex items-center shrink-0">
        <img
          src="../assets/voima-logo.png"
          alt="Voima CaaS"
          class="h-9 w-24 w-auto object-contain sm:h-10"
        />
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8 text-sm font-['IBM_Plex_Mono']">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="transition-colors"
          :class="route.path === link.to ? 'text-[#1F8A63]' : 'text-[#5B6472] hover:text-[#0B1220]'"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="https://www.waitlist.voimacaas.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="group hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#0B1220]/15 bg-[#0B1220]/[0.03] backdrop-blur-sm text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#0B1220] transition-all duration-300 ease-out hover:bg-[#1F8A63] hover:border-[#1F8A63] hover:text-white hover:shadow-[0_0_25px_rgba(31,138,99,0.35)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <span class="transition-transform duration-300 group-hover:tracking-[0.18em]">
            Join the Wait List
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        <button
          class="md:hidden text-[#0B1220] p-2 -mr-2"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <svg
            v-if="!open"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round" />
          </svg>
          <svg
            v-else
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="md:hidden border-t border-[#DDE3E0] bg-white px-6 py-4 space-y-1">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block py-2.5 text-sm font-['IBM_Plex_Mono']"
        :class="route.path === link.to ? 'text-[#1F8A63]' : 'text-[#5B6472]'"
        @click="open = false"
      >
        {{ link.name }}
      </RouterLink>
      <a
        href="https://www.waitlist.voimacaas.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-3 text-center text-xs font-['IBM_Plex_Mono'] uppercase tracking-wide border border-[#0B1220]/15 text-[#0B1220] px-4 py-2.5 rounded-full"
        @click="open = false"
      >
        Join the wait list
      </a>
    </div>
  </header>
</template>
