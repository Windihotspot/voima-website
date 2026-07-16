<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'

const values = [
  {
    code: 'VAL-01',
    title: 'Operational, not theoretical',
    desc: 'We build systems your team runs day to day — not policy documents that sit in a drawer.'
  },
  {
    code: 'VAL-02',
    title: 'Regulator-ready by design',
    desc: 'Every framework is mapped to FCA, AML/CFT, UK GDPR, FATF and HMRC requirements from the outset.'
  },
  {
    code: 'VAL-03',
    title: 'Built for SMEs',
    desc: 'Priced and scoped for growing businesses, not large corporates with in-house legal teams.'
  }
]

const credentials = [
  { stat: '12+', label: 'Years regulatory compliance experience' },
  { stat: '4', label: 'Regulated sectors actively supported' },
  { stat: '2 wks', label: 'Typical time to go live' },
  { stat: '£300', label: 'Starting monthly investment' }
]

const timeline = [
  {
    n: '01',
    title: 'Discovery call',
    desc: 'We map your business model and regulatory footprint.'
  },
  {
    n: '02',
    title: 'Gap assessment',
    desc: 'A clear report on where you stand against FCA, AML and GDPR requirements.'
  },
  {
    n: '03',
    title: 'Plan recommendation',
    desc: 'We match you to the right tier and scope the workflows you need.'
  },
  {
    n: '04',
    title: 'Onboarding',
    desc: 'Your compliance system goes live — typically within two weeks.'
  }
]

const revealed = ref(new Set())
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) revealed.value.add(e.target.dataset.reveal)
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
onUnmounted(() => observer && observer.disconnect())
</script>

<template>
  <div class="bg-[#F4F6F5] text-[#0B1220] font-['Inter'] antialiased">
    <AppNavbar />

    <!-- ============ HERO ============ -->
    <section class="relative bg-[#0B1220] overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.07]"
        style="
          background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0);
          background-size: 28px 28px;
        "
      ></div>
      <div
        class="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-[#1F8A63]/20 blur-[120px]"
      ></div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
        <p class="font-['IBM_Plex_Mono'] text-xs text-white/40 mb-6">
          Home <span class="text-white/20 mx-1">/</span> About Us
        </p>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          About Voima CaaS
        </p>
        <h1
          class="font-['Fraunces'] text-white text-4xl sm:text-6xl leading-[1.05] tracking-tight mb-6 max-w-3xl"
        >
          We turn compliance into a system, not a scramble.
        </h1>
        <p class="text-white/60 text-lg leading-relaxed max-w-2xl">
          Voima CaaS was built for one reason: most UK SMEs can't justify a £65,000+ in-house
          compliance hire, but can't afford to ignore FCA, AML and GDPR obligations either. We close
          that gap as an ongoing, operational service.
        </p>
      </div>
    </section>

    <!-- ============ STORY ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-start">
      <div
        data-reveal="story-text"
        class="transition-all duration-700"
        :class="
          revealed.has('story-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Why we exist
        </p>
        <h2 class="font-['Fraunces'] text-4xl tracking-tight mb-6">
          Compliance shouldn't require a hire, or a binder.
        </h2>
        <p class="text-[#5B6472] leading-relaxed mb-4">
          Most SMEs lack the internal expertise, structured systems, and budget to manage compliance
          effectively. Traditional consultancy is project-based and expensive. Software tools still
          require someone in-house to operate them. Project-based consultants add further cost, with
          limited continuity and little operational integration.
        </p>
        <p class="text-[#5B6472] leading-relaxed">
          Voima CaaS was built as the alternative: a partner that converts regulatory requirements
          into a working system inside your business — ongoing oversight, monitoring, and expert
          guidance, without full-time hiring costs or fragmented engagements.
        </p>
      </div>

      <div
        data-reveal="story-stats"
        class="grid grid-cols-2 gap-6 transition-all duration-700 delay-100"
        :class="
          revealed.has('story-stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div
          v-for="c in credentials"
          :key="c.label"
          class="rounded-xl border border-[#DDE3E0] bg-white p-7"
        >
          <p class="font-['Fraunces'] text-4xl text-[#1F8A63] mb-2">{{ c.stat }}</p>
          <p class="text-sm text-[#5B6472] leading-relaxed">{{ c.label }}</p>
        </div>
      </div>
    </section>

    <!-- ============ VALUES ============ -->
    <section class="bg-[#0B1220] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="values-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="
            revealed.has('values-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            How we work
          </p>
          <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight">
            Three principles behind every engagement.
          </h2>
        </div>

        <div
          data-reveal="values-grid"
          class="grid md:grid-cols-3 gap-6 transition-all duration-700 delay-100"
          :class="
            revealed.has('values-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <div
            v-for="v in values"
            :key="v.code"
            class="rounded-xl border border-white/10 bg-[#101B2D] p-8"
          >
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-[#1F8A63] mb-4"
            >
              {{ v.code }}
            </p>
            <h3 class="font-['Fraunces'] text-2xl text-white mb-3">{{ v.title }}</h3>
            <p class="text-white/60 text-sm leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ HOW WE ENGAGE ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="tl-head"
        class="max-w-2xl mb-16 transition-all duration-700"
        :class="revealed.has('tl-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          How we engage
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight">
          From first call to a live system, usually within two weeks.
        </h2>
      </div>

      <div
        data-reveal="tl-grid"
        class="grid md:grid-cols-4 gap-6 transition-all duration-700 delay-100"
        :class="revealed.has('tl-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div v-for="(s, i) in timeline" :key="s.n" class="relative">
          <p class="font-['Fraunces'] text-5xl text-[#1F8A63]/25 mb-4">{{ s.n }}</p>
          <h3 class="font-medium text-lg mb-2">{{ s.title }}</h3>
          <p class="text-sm text-[#5B6472] leading-relaxed">{{ s.desc }}</p>
          <div
            v-if="i < timeline.length - 1"
            class="hidden md:block absolute top-6 -right-3 w-6 h-px bg-[#1F8A63]/30"
          ></div>
        </div>
      </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="relative bg-[#0B1220] py-24 overflow-hidden">
      <div
        class="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#1F8A63]/15 blur-[120px]"
      ></div>
      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <h2 class="font-['Fraunces'] text-white text-3xl sm:text-4xl tracking-tight mb-6">
          Built for SMEs. Backed by 12+ years of regulatory experience.
        </h2>
        <RouterLink
          to="/contact"
          class="inline-block bg-[#1F8A63] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#1a7454] transition-colors"
        >
          Book a free gap assessment call
        </RouterLink>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
