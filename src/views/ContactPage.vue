<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'

const form = reactive({ name: '', email: '', company: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)

function handleSubmit() {
  submitting.value = true
  // Wire this up to your backend / Supabase edge function.
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''
  }, 600)
}

const contactMethods = [
  { code: 'PHONE', value: '+44 735 015 4705', href: 'tel:+447350154705' },
  { code: 'EMAIL', value: 'compliance@voimacaas.co.uk', href: 'mailto:compliance@voimacaas.co.uk' },
  { code: 'ADDRESS', value: 'England, United Kingdom', href: null }
]

const plans = [
  {
    name: 'Starter',
    price: '£300',
    code: 'TIER-01',
    desc: 'For early-stage firms requiring foundational compliance support, regulatory guidance, and operational oversight.'
  },
  {
    name: 'Growth',
    price: '£700',
    code: 'TIER-02',
    desc: 'Built for active businesses that require stronger compliance structure, operational oversight, or a complete compliance overhaul as they grow.'
  },
  {
    name: 'Regulated',
    price: '£1,300',
    code: 'TIER-03',
    desc: 'Designed for high-risk and regulated businesses seeking stronger compliance controls, operational oversight, and scalable regulatory infrastructure.',
    featured: true
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
          Home <span class="text-white/20 mx-1">/</span> Contact Us
        </p>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Connect with us
        </p>
        <h1
          class="font-['Fraunces'] text-white text-4xl sm:text-6xl leading-[1.05] tracking-tight mb-6 max-w-3xl"
        >
          Let's talk about your compliance needs.
        </h1>
        <p class="text-white/60 text-lg leading-relaxed max-w-2xl">
          We support startups and FinTech firms with AML, HMRC alignment, and internal controls.
          Share your setup and we'll respond with clear, actionable next steps — by form, email, or
          phone.
        </p>
      </div>
    </section>

    <!-- ============ FORM + DETAILS ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-[1fr_0.85fr] gap-12">
      <!-- Form -->
      <div
        data-reveal="form"
        class="rounded-xl border border-[#DDE3E0] bg-white p-8 sm:p-10 transition-all duration-700"
        :class="revealed.has('form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          Send us a message
        </p>
        <h2 class="font-['Fraunces'] text-3xl tracking-tight mb-8">Tell us about your business.</h2>

        <div
          v-if="submitted"
          class="rounded-lg bg-[#1F8A63]/10 border border-[#1F8A63]/20 p-6 text-center"
        >
          <p class="text-[#1F8A63] font-medium mb-1">Message received.</p>
          <p class="text-[#5B6472] text-sm">We'll get back to you within one working day.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-5">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                class="block font-['IBM_Plex_Mono'] text-xs uppercase tracking-wide text-[#5B6472] mb-2"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Jane Doe"
                class="w-full rounded-lg border border-[#DDE3E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1F8A63] transition-colors"
              />
            </div>
            <div>
              <label
                class="block font-['IBM_Plex_Mono'] text-xs uppercase tracking-wide text-[#5B6472] mb-2"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="jane@company.co.uk"
                class="w-full rounded-lg border border-[#DDE3E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1F8A63] transition-colors"
              />
            </div>
          </div>
          <div>
            <label
              class="block font-['IBM_Plex_Mono'] text-xs uppercase tracking-wide text-[#5B6472] mb-2"
              >Company</label
            >
            <input
              v-model="form.company"
              type="text"
              placeholder="Company name"
              class="w-full rounded-lg border border-[#DDE3E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1F8A63] transition-colors"
            />
          </div>
          <div>
            <label
              class="block font-['IBM_Plex_Mono'] text-xs uppercase tracking-wide text-[#5B6472] mb-2"
              >Message</label
            >
            <textarea
              v-model="form.message"
              required
              rows="5"
              placeholder="Tell us about your compliance needs..."
              class="w-full rounded-lg border border-[#DDE3E0] px-4 py-3 text-sm focus:outline-none focus:border-[#1F8A63] transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="submitting"
            class="w-full sm:w-auto bg-[#1F8A63] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#1a7454] transition-colors disabled:opacity-60"
          >
            {{ submitting ? 'Sending…' : 'Submit' }}
          </button>
        </form>
      </div>

      <!-- Contact details -->
      <div
        data-reveal="details"
        class="space-y-4 transition-all duration-700 delay-100"
        :class="revealed.has('details') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          v-for="c in contactMethods"
          :key="c.code"
          :href="c.href || undefined"
          class="flex items-center gap-4 rounded-xl border border-[#DDE3E0] bg-white px-6 py-5"
          :class="c.href ? 'hover:border-[#1F8A63]/40 transition-colors' : ''"
        >
          <span class="font-['IBM_Plex_Mono'] text-[11px] text-[#1F8A63] w-20 shrink-0">{{
            c.code
          }}</span>
          <span class="text-sm text-[#0B1220]">{{ c.value }}</span>
        </a>

        <div class="rounded-xl bg-[#0B1220] px-6 py-6">
          <p
            class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/40 mb-2"
          >
            Response time
          </p>
          <p class="text-white text-sm">
            We typically respond within one working day, and can arrange a discovery call within the
            week.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ SERVICE PRICE ============ -->
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
            Service price
          </p>
          <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight">
            Pick a plan, then book a meeting.
          </h2>
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
            <p class="font-['Fraunces'] text-4xl mb-4">
              {{ p.price
              }}<span
                class="text-sm font-['Inter']"
                :class="p.featured ? 'text-white/40' : 'text-[#5B6472]'"
              >
                /mo</span
              >
            </p>
            <p
              class="text-sm leading-relaxed mb-8 flex-1"
              :class="p.featured ? 'text-white/60' : 'text-[#5B6472]'"
            >
              {{ p.desc }}
            </p>
            <a
              href="tel:+447350154705"
              class="text-center rounded-lg py-3 text-sm font-medium transition-colors"
              :class="
                p.featured
                  ? 'bg-[#1F8A63] text-white hover:bg-[#1a7454]'
                  : 'border border-[#0B1220]/15 hover:bg-[#0B1220] hover:text-white'
              "
            >
              Book a meeting
            </a>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
