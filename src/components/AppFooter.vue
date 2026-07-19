<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const subscribed = ref(false)
function subscribe() {
  if (!email.value) return
  subscribed.value = true
  email.value = ''
}
</script>

<template>
  <footer class="bg-[#080D16] py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
      <div>
        <RouterLink to="/" class="flex items-center shrink-0">
          <img
            src="../assets/voima-logo.png"
            alt="Voima CaaS"
            class="h-9 w-auto object-contain sm:h-10"
          />
        </RouterLink>
        <p class="text-white/40 text-sm leading-relaxed">
          Compliance infrastructure for UK SMEs — FCA, AML and GDPR, run as a living system.
        </p>
        <p class="font-['IBM_Plex_Mono'] text-xs text-white/30 mt-6">England, United Kingdom</p>
        <p class="font-['IBM_Plex_Mono'] text-xs text-white/30">+44 735 015 4705</p>
        <p class="font-['IBM_Plex_Mono'] text-xs text-white/30">compliance@voimacaas.co.uk</p>
      </div>
      <div>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-white/30 mb-4">
          Quick links
        </p>
        <ul class="space-y-2 text-sm text-white/50">
          <li>
            <RouterLink to="/about" class="hover:text-white transition-colors"
              >About Voima CaaS</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/services" class="hover:text-white transition-colors"
              >What we do</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-white transition-colors"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
      <div>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-white/30 mb-4">
          Newsletter
        </p>
        <p class="text-white/40 text-sm mb-4">Compliance updates, without the noise.</p>
        <form v-if="!subscribed" @submit.prevent="subscribe" class="flex gap-2">
          <input
            v-model="email"
            type="email"
            required
            placeholder="Your email address"
            class="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1F8A63]"
          />
          <button
            type="submit"
            class="bg-[#1F8A63] text-white text-sm px-4 rounded-lg hover:bg-[#1a7454] transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p v-else class="text-[#3FBF8F] text-sm">You're on the list.</p>
      </div>
    </div>
    <div
      class="max-w-7xl mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-white/10 text-white/30 text-xs font-['IBM_Plex_Mono']"
    >
      © 2026 Voima CaaS. All rights reserved.
    </div>
  </footer>
</template>
