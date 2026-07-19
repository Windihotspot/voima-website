<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'

const segments = [
  {
    n: '01',
    title: 'FinTech & startups UK',
    desc: 'Structured, operational compliance for UK FinTech startups regulated by the Financial Conduct Authority.'
  },
  {
    n: '02',
    title: 'Payment firms & IMTOs',
    desc: 'Cross-border operations and international partnerships, backed by structured compliance oversight.'
  },
  {
    n: '03',
    title: 'Digital asset businesses',
    desc: 'Structured, operational compliance for digital asset firms operating across jurisdictions.'
  },
  {
    n: '04',
    title: 'FX & OTC firms',
    desc: 'Structured, operational compliance across cross-border trading relationships and partnerships.'
  }
]

const offerings = [
  {
    code: 'SVC-01',
    title: 'Compliance Infrastructure',
    desc: 'Build and operate your compliance function through a structured, managed framework.',
    includes: [
      'Compliance Health Assessment',
      'Governance Framework',
      'Policies & Controls',
      'Risk Management Framework',
      'Compliance Workspace'
    ],
    outcome: 'A structured compliance function built for day-to-day operations.'
  },
  {
    code: 'SVC-02',
    title: 'Compliance Operations',
    desc: 'Ongoing oversight and operational support to keep your compliance programme effective.',
    includes: [
      'Compliance Task Management',
      'Regulatory Change Management',
      'Compliance Reviews',
      'Management Reporting',
      'Evidence & Audit Management'
    ],
    outcome: 'Continuous compliance oversight with clear accountability.'
  },
  {
    code: 'SVC-03',
    title: 'Compliance Advisory',
    desc: 'Dedicated compliance expertise to support growth, governance, and regulatory readiness.',
    includes: [
      'Dedicated Compliance Partner',
      'Regulatory Guidance',
      'Board & Management Support',
      'Business Expansion Advisory',
      'Compliance Strategy'
    ],
    outcome: 'An experienced compliance function without building one in-house.'
  }
]

const whyUs = [
  {
    title: 'Professional excellence',
    desc: 'Compliance services delivered with professionalism, precision and operational rigour.'
  },
  {
    title: 'Customer satisfaction',
    desc: 'Responsive support, reliable delivery and practical compliance solutions.'
  },
  { title: 'Affordable pricing', desc: 'Flexible plans starting from as little as £300 a month.' },
  {
    title: 'Customised solutions',
    desc: 'Tailored governance and regulatory readiness so SMEs can grow with confidence.'
  }
]

const plans = [
  {
    name: 'Starter',
    price: '£300',
    code: 'TIER-01',
    desc: 'For early-stage firms.',
    features: [
      'Core AML & KYC framework',
      'GDPR data register',
      'Monthly compliance check-in',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '£700',
    code: 'TIER-02',
    desc: 'For active businesses.',
    features: [
      'Everything in Starter',
      'Sanctions & PEP screening',
      'Quarterly regulator-ready reporting',
      'Priority support line'
    ],
    featured: true
  },
  {
    name: 'Regulated',
    price: '£1,300',
    code: 'TIER-03',
    desc: 'For high-risk, regulated firms.',
    features: [
      'Everything in Growth',
      'Dedicated compliance lead',
      'Ongoing regulatory liaison',
      'Board-level reporting'
    ]
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
          Home <span class="text-white/20 mx-1">/</span> Services
        </p>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Regulatory compliance services, UK
        </p>
        <h1
          class="font-['Fraunces'] text-white text-4xl sm:text-6xl leading-[1.05] tracking-tight mb-6 max-w-3xl"
        >
          Outsourced compliance, run as an operational service.
        </h1>
        <p class="text-white/60 text-lg leading-relaxed max-w-2xl">
          FCA support, AML frameworks, GDPR compliance and regulatory systems for SMEs — built and
          operated for you, not handed over as a binder.
        </p>
      </div>
    </section>

    <!-- ============ WHO WE SUPPORT ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="who-head"
        class="max-w-2xl mb-14 transition-all duration-700"
        :class="revealed.has('who-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Who we support
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight">
          Four kinds of regulatory exposure. One system.
        </h2>
      </div>

      <div
        data-reveal="who-grid"
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100"
        :class="revealed.has('who-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div
          v-for="s in segments"
          :key="s.n"
          class="rounded-xl border border-[#DDE3E0] bg-white p-7"
        >
          <p class="font-['Fraunces'] text-3xl text-[#1F8A63]/30 mb-4">{{ s.n }}</p>
          <h3 class="font-medium text-lg mb-2">{{ s.title }}</h3>
          <p class="text-[#5B6472] text-sm leading-relaxed">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ============ OVERVIEW / OFFERINGS ============ -->
    <section class="bg-[#0B1220] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="offer-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="
            revealed.has('offer-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            Overview
          </p>
          <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
            Partnership compliance expertise, delivered as systems.
          </h2>
          <p class="text-white/60 text-lg leading-relaxed">
            We convert regulatory requirements into operational systems your team actually runs.
          </p>
        </div>

        <div
          data-reveal="offer-grid"
          class="grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-100"
          :class="
            revealed.has('offer-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <div
            v-for="o in offerings"
            :key="o.code"
            class="rounded-xl border border-white/10 bg-[#101B2D] p-8 flex flex-col"
          >
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-[#1F8A63] mb-4"
            >
              {{ o.code }}
            </p>
            <h3 class="font-['Fraunces'] text-2xl text-white mb-2">{{ o.title }}</h3>
            <p class="text-white/50 text-sm mb-6">{{ o.desc }}</p>
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/30 mb-3"
            >
              Includes
            </p>
            <ul class="space-y-2 mb-6 flex-1">
              <li v-for="i in o.includes" :key="i" class="flex gap-2.5 text-sm text-white/70">
                <span class="text-[#3FBF8F]">✓</span><span>{{ i }}</span>
              </li>
            </ul>
            <div class="pt-4 border-t border-white/10">
              <p
                class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/30 mb-2"
              >
                Outcome
              </p>
              <p class="text-sm text-white/80">{{ o.outcome }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="why-head"
        class="max-w-2xl mb-14 transition-all duration-700"
        :class="revealed.has('why-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Why choose us
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight">
          Let's operationalise compliance.
        </h2>
      </div>
      <div
        data-reveal="why-grid"
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100"
        :class="revealed.has('why-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div
          v-for="w in whyUs"
          :key="w.title"
          class="border border-[#DDE3E0] bg-white rounded-xl p-7"
        >
          <h3 class="font-medium text-lg mb-2">{{ w.title }}</h3>
          <p class="text-[#5B6472] text-sm leading-relaxed">{{ w.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="bg-[#EFF3F1] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="price-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="
            revealed.has('price-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            Our pricing
          </p>
          <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight mb-4">
            Compliance services pricing, UK.
          </h2>
          <p class="text-[#5B6472] text-lg">
            Flexible plans from £300/month — FCA compliance, AML controls, GDPR, onboarding and
            ongoing operations.
          </p>
        </div>

        <div
          data-reveal="price-grid"
          class="grid md:grid-cols-3 gap-6 transition-all duration-700 delay-100"
          :class="
            revealed.has('price-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <div
            v-for="p in plans"
            :key="p.name"
            class="rounded-xl p-8 flex flex-col"
            :class="
              p.featured
                ? 'bg-[#0B1220] text-white shadow-xl md:scale-[1.03]'
                : 'bg-white border border-[#DDE3E0]'
            "
          >
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest mb-4"
              :class="p.featured ? 'text-[#3FBF8F]' : 'text-[#1F8A63]'"
            >
              {{ p.code }}
            </p>
            <h3 class="font-['Fraunces'] text-2xl mb-1">{{ p.name }}</h3>
            <p class="text-sm mb-6" :class="p.featured ? 'text-white/50' : 'text-[#5B6472]'">
              {{ p.desc }}
            </p>
            <p class="mb-6">
              <span class="font-['Fraunces'] text-4xl">{{ p.price }}</span>
              <span class="text-sm" :class="p.featured ? 'text-white/40' : 'text-[#5B6472]'"
                >/mo</span
              >
            </p>
            <ul class="space-y-2.5 mb-8 flex-1">
              <li v-for="f in p.features" :key="f" class="flex gap-2.5 text-sm">
                <span :class="p.featured ? 'text-[#3FBF8F]' : 'text-[#1F8A63]'">✓</span>
                <span :class="p.featured ? 'text-white/80' : 'text-[#0B1220]'">{{ f }}</span>
              </li>
            </ul>
            <RouterLink
              to="/contact"
              class="text-center rounded-lg py-3 text-sm font-medium transition-colors"
              :class="
                p.featured
                  ? 'bg-[#1F8A63] text-white hover:bg-[#1a7454]'
                  : 'border border-[#0B1220]/15 hover:bg-[#0B1220] hover:text-white'
              "
            >
              Book a meeting
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
