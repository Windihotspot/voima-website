<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'

/* ------------------------------------------------------------------
   Live Compliance Register — the hero's signature element.
   Cycles a set of regulatory checks through pending -> verified,
   the way a real monitoring system would, to dramatise the core
   promise: compliance turned into a running system, not a binder.
------------------------------------------------------------------- */
const registerEntries = reactive([
  {
    code: 'AML-CFT-014',
    label: 'Transaction monitoring rule set',
    status: 'verified',
    time: '2m ago'
  },
  { code: 'KYC-ONB-002', label: 'Client onboarding checks', status: 'verified', time: '11m ago' },
  { code: 'SANC-SCR-007', label: 'Sanctions & PEP screening', status: 'pending', time: 'running' },
  { code: 'GDPR-DPA-019', label: 'Data processing register', status: 'verified', time: '1h ago' },
  { code: 'FCA-REP-005', label: 'Quarterly regulatory return', status: 'pending', time: 'running' }
])

let cycle
onMounted(() => {
  cycle = setInterval(() => {
    const pendingIdx = registerEntries.findIndex((e) => e.status === 'pending')
    if (pendingIdx !== -1) {
      registerEntries[pendingIdx].status = 'verified'
      registerEntries[pendingIdx].time = 'just now'
      setTimeout(() => {
        const next = registerEntries[pendingIdx]
        next.status = 'pending'
        next.time = 'running'
      }, 3400)
    }
  }, 2600)
})
onUnmounted(() => clearInterval(cycle))

/* Scroll-reveal for sections */
const revealed = ref(new Set())
function onIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) revealed.value.add(entry.target.dataset.reveal)
  })
}
let observer
onMounted(() => {
  observer = new IntersectionObserver(onIntersect, { threshold: 0.15 })
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
onUnmounted(() => observer && observer.disconnect())

/* Newsletter form (stub) */
const email = ref('')
const subscribed = ref(false)
function subscribe() {
  if (!email.value) return
  subscribed.value = true
  email.value = ''
}

const obligations = [
  { code: 'FCA', label: 'FCA regulation' },
  { code: 'AML/CFT', label: 'Anti-money laundering obligations' },
  { code: 'UK GDPR', label: 'Data protection compliance' },
  { code: 'FATF', label: 'FATF recommendations' },
  { code: 'HMRC', label: 'HMRC reporting' }
]

const risks = [
  'Delayed authorisation',
  'Bank account termination',
  'Regulatory scrutiny',
  'Loss of investor confidence'
]

const plans = [
  {
    name: 'Starter',
    price: '£300',
    code: 'TIER-01',
    desc: 'For early-stage SMEs building their first compliance foundation.',
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
    desc: 'For scaling businesses with active regulatory exposure.',
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
    desc: 'For FCA-regulated firms needing full oversight.',
    features: [
      'Everything in Growth',
      'Dedicated compliance lead',
      'Ongoing regulatory liaison',
      'Board-level reporting'
    ]
  }
]

const steps = [
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
</script>

<template>
  <div class="bg-[#F4F6F5] text-[#0B1220] font-['Inter'] antialiased selection:bg-[#1F8A63]/20">
    <!-- ============ NAV ============ -->
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
        class="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#1F8A63]/20 blur-[120px]"
      ></div>

      <div
        class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center"
      >
        <!-- Copy -->
        <div>
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-6">
            Compliance as an operational service
          </p>
          <h1
            class="font-['Fraunces'] text-white text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight mb-6"
          >
            Compliance infrastructure,<br class="hidden sm:block" />
            built for UK SMEs.
          </h1>
          <p class="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
            Replace a £65,000+ in-house compliance hire with a structured, regulator-ready system
            from £300 a month. FCA, AML and GDPR — running and monitored, not filed away.
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              class="bg-[#1F8A63] text-white px-6 py-3.5 rounded-lg font-medium hover:bg-[#1a7454] transition-colors"
            >
              Book a free compliance gap assessment
            </a>
            <a
              href="#contact"
              class="text-white/80 px-6 py-3.5 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              Join the waitlist
            </a>
          </div>

          <div class="flex items-center gap-6 font-['IBM_Plex_Mono'] text-xs text-white/40">
            <span>from £300/mo</span>
            <span class="w-1 h-1 rounded-full bg-white/20"></span>
            <span>live in 2 weeks</span>
            <span class="w-1 h-1 rounded-full bg-white/20"></span>
            <span>no long-term lock-in</span>
          </div>
        </div>

        <!-- Signature: Live Compliance Register -->
        <div class="relative">
          <div
            class="rounded-xl border border-white/10 bg-[#101B2D] overflow-hidden shadow-2xl shadow-black/40"
          >
            <div class="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <span
                class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/40"
                >Live compliance register</span
              >
              <span
                class="flex items-center gap-1.5 text-[11px] font-['IBM_Plex_Mono'] text-[#1F8A63]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A63] animate-pulse"></span> monitoring
              </span>
            </div>
            <ul class="divide-y divide-white/[0.06]">
              <li
                v-for="e in registerEntries"
                :key="e.code"
                class="flex items-center justify-between gap-4 px-5 py-3.5"
              >
                <div class="min-w-0">
                  <p class="font-['IBM_Plex_Mono'] text-[11px] text-white/35">{{ e.code }}</p>
                  <p class="text-sm text-white/80 truncate">{{ e.label }}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="font-['IBM_Plex_Mono'] text-[11px] text-white/30">{{ e.time }}</span>
                  <span
                    class="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-wide px-2 py-1 rounded-full transition-colors duration-500"
                    :class="
                      e.status === 'verified'
                        ? 'bg-[#1F8A63]/15 text-[#3FBF8F]'
                        : 'bg-white/10 text-white/50'
                    "
                  >
                    {{ e.status === 'verified' ? '✓ verified' : '● checking' }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <p class="mt-4 text-center text-white/30 text-xs font-['IBM_Plex_Mono']">
            what a working compliance system looks like
          </p>
        </div>
      </div>

      <!-- Obligation strip -->
      <div class="relative border-t border-white/10 bg-black/20">
        <div
          class="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center gap-x-10 gap-y-3"
        >
          <span class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/30"
            >SMEs must meet</span
          >
          <span
            v-for="o in obligations"
            :key="o.code"
            class="font-['IBM_Plex_Mono'] text-xs text-white/50"
          >
            {{ o.code }}
          </span>
        </div>
      </div>
    </section>

    <!-- ============ PROBLEM ============ -->
    <section id="problem" class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="problem-head"
        class="max-w-2xl transition-all duration-700"
        :class="
          revealed.has('problem-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          The problem identified
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight mb-6">
          Compliance is not optional.
        </h2>
        <p class="text-[#5B6472] text-lg leading-relaxed">
          UK businesses face growing regulatory pressure across AML, KYC, sanctions screening, fraud
          prevention and data protection. Strong compliance infrastructure is now essential for
          regulatory readiness, banking relationships and business growth — and most SMEs simply
          aren't built to manage it internally.
        </p>
      </div>

      <div
        data-reveal="problem-cards"
        class="grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 delay-100"
        :class="
          revealed.has('problem-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div class="rounded-xl border border-[#DDE3E0] bg-white p-7">
          <p class="font-['IBM_Plex_Mono'] text-xs text-[#5B6472] mb-3">GAP&nbsp;01</p>
          <h3 class="font-medium text-lg mb-2">No internal expertise</h3>
          <p class="text-[#5B6472] text-sm leading-relaxed">
            Few SMEs have someone whose job is to track regulatory change and translate it into
            practice.
          </p>
        </div>
        <div class="rounded-xl border border-[#DDE3E0] bg-white p-7">
          <p class="font-['IBM_Plex_Mono'] text-xs text-[#5B6472] mb-3">GAP&nbsp;02</p>
          <h3 class="font-medium text-lg mb-2">No structured systems</h3>
          <p class="text-[#5B6472] text-sm leading-relaxed">
            Compliance lives in scattered spreadsheets and inboxes instead of a system anyone can
            audit.
          </p>
        </div>
        <div class="rounded-xl border border-[#DDE3E0] bg-white p-7">
          <p class="font-['IBM_Plex_Mono'] text-xs text-[#5B6472] mb-3">GAP&nbsp;03</p>
          <h3 class="font-medium text-lg mb-2">No budget for a hire</h3>
          <p class="text-[#5B6472] text-sm leading-relaxed">
            An experienced compliance officer costs £65,000+ a year before pensions, software and
            training.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ SOLUTION / COST COMPARISON ============ -->
    <section id="solution" class="bg-[#0B1220] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="solution-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="
            revealed.has('solution-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            Our offering &amp; the solution
          </p>
          <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
            Compliance, converted into a working system.
          </h2>
          <p class="text-white/60 text-lg leading-relaxed">
            Voima CaaS replaces the cost of building an in-house compliance function with ongoing
            oversight, operational support, monitoring and expert guidance — no full-time hire, no
            fragmented consulting engagements.
          </p>
        </div>

        <div
          data-reveal="solution-panels"
          class="grid lg:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 transition-all duration-700 delay-100"
          :class="
            revealed.has('solution-panels')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          "
        >
          <div class="bg-[#101B2D] p-8">
            <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-white/40 mb-4">
              Building it yourself
            </p>
            <ul class="space-y-3 text-white/60 text-sm">
              <li class="flex gap-3">
                <span class="text-white/25">—</span>£65,000–£85,000/yr for a compliance lead alone
              </li>
              <li class="flex gap-3">
                <span class="text-white/25">—</span>£95,000+/yr once pensions, software and training
                are added
              </li>
              <li class="flex gap-3">
                <span class="text-white/25">—</span>Project-based consultants add further cost with
                little continuity
              </li>
              <li class="flex gap-3">
                <span class="text-white/25">—</span>Software tools that still require internal
                expertise to run
              </li>
            </ul>
          </div>
          <div class="bg-[#101B2D] p-8">
            <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#3FBF8F] mb-4">
              With Voima CaaS
            </p>
            <ul class="space-y-3 text-white/80 text-sm">
              <li class="flex gap-3">
                <span class="text-[#3FBF8F]">✓</span>FCA-aligned compliance frameworks from
                £300/month
              </li>
              <li class="flex gap-3">
                <span class="text-[#3FBF8F]">✓</span>AML/CFT and embedded workflows, live from day
                one
              </li>
              <li class="flex gap-3">
                <span class="text-[#3FBF8F]">✓</span>Ongoing monitoring, oversight and direct
                regulatory support
              </li>
              <li class="flex gap-3">
                <span class="text-[#3FBF8F]">✓</span>No hiring. No delays. No guesswork.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ OBLIGATIONS + RISK ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-12">
      <div
        data-reveal="obligations"
        class="transition-all duration-700"
        :class="
          revealed.has('obligations') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Regulatory scope
        </p>
        <h3 class="font-['Fraunces'] text-3xl tracking-tight mb-6">What SMEs must meet.</h3>
        <ul class="space-y-3">
          <li
            v-for="o in obligations"
            :key="o.code"
            class="flex items-center gap-4 border border-[#DDE3E0] bg-white rounded-lg px-5 py-4"
          >
            <span class="font-['IBM_Plex_Mono'] text-xs text-[#1F8A63] w-24 shrink-0">{{
              o.code
            }}</span>
            <span class="text-sm text-[#0B1220]">{{ o.label }}</span>
          </li>
        </ul>
      </div>

      <div
        data-reveal="risks"
        class="transition-all duration-700 delay-100"
        :class="revealed.has('risks') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#B8863B] mb-4">
          Failure leads to
        </p>
        <h3 class="font-['Fraunces'] text-3xl tracking-tight mb-6">What's at stake without it.</h3>
        <ul class="space-y-3">
          <li
            v-for="r in risks"
            :key="r"
            class="flex items-center gap-4 border border-[#EFE1CC] bg-[#FBF6EC] rounded-lg px-5 py-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-[#B8863B] shrink-0"></span>
            <span class="text-sm text-[#0B1220]">{{ r }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section id="pricing" class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="pricing-head"
        class="max-w-2xl mb-16 transition-all duration-700"
        :class="
          revealed.has('pricing-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Pricing snapshot
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight mb-4">
          Three tiers. No long-term commitment.
        </h2>
        <p class="text-[#5B6472] text-lg">
          Choose the level of oversight that matches your regulatory exposure today — and change it
          as you grow.
        </p>
      </div>

      <div
        data-reveal="pricing-cards"
        class="grid md:grid-cols-3 gap-6 transition-all duration-700 delay-100"
        :class="
          revealed.has('pricing-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div
          v-for="p in plans"
          :key="p.name"
          class="rounded-xl p-8 flex flex-col"
          :class="
            p.featured
              ? 'bg-[#0B1220] text-white shadow-xl scale-[1.03]'
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
          <a
            href="#contact"
            class="text-center rounded-lg py-3 text-sm font-medium transition-colors"
            :class="
              p.featured
                ? 'bg-[#1F8A63] text-white hover:bg-[#1a7454]'
                : 'border border-[#0B1220]/15 hover:bg-[#0B1220] hover:text-white'
            "
          >
            Get connected
          </a>
        </div>
      </div>
    </section>

    <!-- ============ HOW IT WORKS ============ -->
    <section class="bg-[#EFF3F1] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="steps-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="
            revealed.has('steps-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            How it works
          </p>
          <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight">
            End to end, usually within two weeks.
          </h2>
        </div>

        <div
          data-reveal="steps-list"
          class="grid md:grid-cols-4 gap-6 transition-all duration-700 delay-100"
          :class="
            revealed.has('steps-list') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <div v-for="(s, i) in steps" :key="s.n" class="relative">
            <p class="font-['Fraunces'] text-5xl text-[#1F8A63]/25 mb-4">{{ s.n }}</p>
            <h3 class="font-medium text-lg mb-2">{{ s.title }}</h3>
            <p class="text-sm text-[#5B6472] leading-relaxed">{{ s.desc }}</p>
            <div
              v-if="i < steps.length - 1"
              class="hidden md:block absolute top-6 -right-3 w-6 h-px bg-[#1F8A63]/30"
            ></div>
          </div>
        </div>

        <div
          class="mt-16 flex flex-wrap items-center gap-6 text-[#5B6472] font-['IBM_Plex_Mono'] text-xs"
        >
          <span>12+ years regulatory compliance experience</span>
          <span class="w-1 h-1 rounded-full bg-[#5B6472]/30"></span>
          <span>FCA-aligned frameworks</span>
          <span class="w-1 h-1 rounded-full bg-[#5B6472]/30"></span>
          <span>Cross-border capability</span>
          <span class="w-1 h-1 rounded-full bg-[#5B6472]/30"></span>
          <span>Built for SMEs, not large corporates</span>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section id="contact" class="relative bg-[#0B1220] py-28 overflow-hidden">
      <div
        class="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#1F8A63]/15 blur-[120px]"
      ></div>
      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
          Get compliant in two weeks. Stay compliant every day.
        </h2>
        <p class="text-white/60 text-lg mb-10">
          Book a free gap assessment call and we'll show you exactly where you stand.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="tel:+447350154705"
            class="bg-[#1F8A63] text-white px-7 py-3.5 rounded-lg font-medium hover:bg-[#1a7454] transition-colors"
          >
            Book a free gap assessment call
          </a>
          <a
            href="mailto:compliance@voimacaas.co.uk"
            class="text-white/80 px-7 py-3.5 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
          >
            Email us
          </a>
        </div>
        <p class="font-['IBM_Plex_Mono'] text-xs text-white/40">
          +44 735 015 4705 &nbsp;·&nbsp; compliance@voimacaas.co.uk &nbsp;·&nbsp; England, United
          Kingdom
        </p>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <AppFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
</style>
