<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import voimaStory from '@/assets/voima-story.png'

/* Scroll-reveal, same pattern as homepage */
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

const experience = [
  '12+ years in compliance',
  'Senior leadership roles',
  'Cross-border delivery',
  'FCA-aligned practice'
]

const builtForScale = ['Growth-stage firms', 'Early-stage startups', 'Regulated businesses']

const institutionalStrength = [
  'Senior compliance leadership roles across financial services',
  'Cross-border regulatory execution across multiple jurisdictions',
  'Strong alignment with FCA standards and expectations',
  'Direct experience with audit readiness, controls, and remediation'
]

const businessStrategy = [
  'Target fintechs, payment firms, IMTOs',
  'Start with gap assessment, move to full setup',
  'Offer retainer for ongoing oversight',
  'Build repeatable compliance systems'
]

const marketingPolicy = [
  'Use direct outreach and referrals',
  'Share clear, factual content on compliance',
  'No inflated claims or fake metrics',
  'Focus on FCA alignment and delivery timelines'
]
</script>

<template>
  <div class="bg-[#F4F6F5] text-[#0B1220] font-['Inter'] antialiased selection:bg-[#1F8A63]/20">
    <AppNavbar />

    <!-- ============ HERO ============ -->
    <!-- ============ HERO ============ -->
    <section class="relative bg-[#0B1220] overflow-hidden">
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${voimaStory})` }"
      ></div>

      <!-- Dark gradient overlay for text legibility -->
      <!-- Dark gradient overlay for text legibility -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/60 to-[#0B1220]/20"
      ></div>
      <div class="absolute inset-0 bg-[#0B1220]/15"></div>

      <!-- Existing dot pattern + glow, kept on top of the image -->
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

      <div class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-6">
          Who we are
        </p>
        <h1
          class="font-['Fraunces'] text-white text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight mb-6 max-w-3xl"
        >
          Our Story
        </h1>
        <p class="text-white/60 text-lg leading-relaxed max-w-2xl">
          Voima CaaS helps small businesses manage growing compliance demands without the cost of
          building an internal compliance team. We provide scalable compliance support that reduces
          risk and improves regulatory readiness.
        </p>
      </div>
    </section>

    <!-- ============ WELCOME TO VOIMA ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Image placeholder -->
      <div
        data-reveal="welcome-image"
        class="transition-all duration-700"
        :class="
          revealed.has('welcome-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div
          class="relative rounded-xl overflow-hidden border border-[#DDE3E0] bg-white aspect-[4/3] flex items-center justify-center"
        >
          <!-- Replace this img src with the compliance scan / world map graphic -->
          <img
            src="../assets/login.png"
            alt="Voima compliance scan illustration"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        data-reveal="welcome-copy"
        class="transition-all duration-700 delay-100"
        :class="
          revealed.has('welcome-copy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
          About us
        </p>
        <h2 class="font-['Fraunces'] text-4xl sm:text-5xl tracking-tight mb-6">
          Welcome to Voima CaaS
        </h2>
        <p class="text-[#5B6472] text-lg leading-relaxed mb-4">
          We deliver compliance that works in daily operations. We focus on execution, not theory.
          Many firms meet regulatory requirements on paper but fail in practice. We close that gap.
          We build systems, controls, and processes that stand up to real use and regulatory
          scrutiny.
        </p>
        <p class="text-[#5B6472] text-lg leading-relaxed mb-8">
          Voima CaaS is built on execution. Founded by Kanayo Frank Kemuwa, the work reflects over a
          decade inside regulated environments. It is based on delivery, not theory.
        </p>

        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-[#5B6472] mb-3"
            >
              Experience
            </p>
            <ul class="space-y-2">
              <li
                v-for="e in experience"
                :key="e"
                class="flex items-center gap-3 text-sm text-[#0B1220]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A63] shrink-0"></span>{{ e }}
              </li>
            </ul>
          </div>
          <div>
            <p
              class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-[#5B6472] mb-3"
            >
              Focus
            </p>
            <p class="text-sm text-[#0B1220] leading-relaxed">
              We do not deliver reports. We build systems that operate inside your business.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ BUILT FOR SCALE ============ -->
    <section class="bg-[#0B1220] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div
          data-reveal="scale-copy"
          class="transition-all duration-700"
          :class="
            revealed.has('scale-copy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            Objective
          </p>
          <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
            Built for scale.
          </h2>
          <p class="text-white/60 text-lg leading-relaxed mb-8">
            Make compliance structured, predictable, and operational. Your compliance grows with
            your business.
          </p>

          <p
            class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/40 mb-4"
          >
            We support
          </p>
          <ul class="flex flex-wrap gap-3 mb-10">
            <li
              v-for="s in builtForScale"
              :key="s"
              class="px-4 py-2 rounded-full border border-white/15 text-white/80 text-sm font-['IBM_Plex_Mono']"
            >
              {{ s }}
            </li>
          </ul>

          <p
            class="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-widest text-white/40 mb-4"
          >
            Institutional strength
          </p>
          <ul class="space-y-3">
            <li
              v-for="i in institutionalStrength"
              :key="i"
              class="flex gap-3 text-sm text-white/70"
            >
              <span class="text-[#3FBF8F] shrink-0">★</span>{{ i }}
            </li>
          </ul>
        </div>

        <!-- Image placeholder -->
        <div
          data-reveal="scale-image"
          class="transition-all duration-700 delay-100"
          :class="
            revealed.has('scale-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          <div
            class="relative rounded-xl overflow-hidden border border-white/10 bg-[#101B2D] aspect-[4/3] flex items-center justify-center"
          >
            <!-- Replace this img src with the person + world map graphic -->
            <img
              src="../assets/scale.png"
              alt="Cross-border compliance delivery"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ AI-POWERED COMPLIANCE ============ -->
    <section class="bg-[#0B1220] py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="ai-head"
          class="max-w-2xl mb-16 transition-all duration-700"
          :class="revealed.has('ai-head') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-4">
            How we work
          </p>
          <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
            Compliance, accelerated by AI.
          </h2>
          <p class="text-white/60 text-lg leading-relaxed">
            Voima CaaS is an evolving platform. We use AI to monitor, flag, and draft — so our team
            spends less time on manual tracking and more time on judgment, oversight, and delivery.
          </p>
        </div>

        <div
          data-reveal="ai-grid"
          class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100"
          :class="revealed.has('ai-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="rounded-xl border border-white/10 bg-[#101B2D] p-7">
            <i class="fa-solid fa-radar text-lg text-[#1F8A63] mb-4 block"></i>
            <h3 class="font-medium text-white text-lg mb-2">Regulatory change monitoring</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              AI continuously scans regulatory updates and flags what's relevant to your business,
              so nothing slips through unnoticed.
            </p>
          </div>
          <div class="rounded-xl border border-white/10 bg-[#101B2D] p-7">
            <i class="fa-solid fa-gauge-high text-lg text-[#1F8A63] mb-4 block"></i>
            <h3 class="font-medium text-white text-lg mb-2">Risk scoring & prioritisation</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Assessment responses are scored and ranked automatically, surfacing your
              highest-priority gaps first instead of a flat checklist.
            </p>
          </div>
          <div class="rounded-xl border border-white/10 bg-[#101B2D] p-7">
            <i class="fa-solid fa-file-pen text-lg text-[#1F8A63] mb-4 block"></i>
            <h3 class="font-medium text-white text-lg mb-2">Drafted reports & policies</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              AI drafts first-pass policies and regulator-ready reports, which our compliance team
              reviews, refines, and signs off — never sent unchecked.
            </p>
          </div>
          <div class="rounded-xl border border-white/10 bg-[#101B2D] p-7">
            <i class="fa-solid fa-bell text-lg text-[#1F8A63] mb-4 block"></i>
            <h3 class="font-medium text-white text-lg mb-2">Smart alerts</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Anomalies, missed deadlines, and control gaps trigger real-time alerts to your team
              and ours — before they become findings.
            </p>
          </div>
        </div>

        <p
          data-reveal="ai-note"
          class="mt-10 text-white/40 text-sm font-['IBM_Plex_Mono'] max-w-2xl transition-all duration-700 delay-200"
          :class="revealed.has('ai-note') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          AI supports our compliance experts — it does not replace them. Every output is reviewed by
          a qualified professional before it reaches you or a regulator.
        </p>
      </div>
    </section>
    <!-- ============ MISSION / VISION ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 mt-28">
      <div
        data-reveal="mission-vision"
        class="transition-all duration-700"
        :class="
          revealed.has('mission-vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <v-expansion-panels variant="accordion" class="voima-panels">
          <v-expansion-panel>
            <v-expansion-panel-title>
              <span
                class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#1F8A63] mr-3"
                >01</span
              >
              <span class="font-['Fraunces'] text-xl">Our Mission</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="text-[#5B6472] text-base leading-relaxed">
                Be a trusted compliance partner for UK and cross-border firms. Focus on execution
                and consistency.
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              <span
                class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#1F8A63] mr-3"
                >02</span
              >
              <span class="font-['Fraunces'] text-xl">Our Vision</span>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="text-[#5B6472] text-base leading-relaxed">
                Be a trusted compliance partner for UK and cross-border firms. Focus on execution
                and consistency.
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </section>

    <!-- ============ BUSINESS STRATEGY / MARKETING POLICY ============ -->
    <section class="">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="strategy-policy"
          class="transition-all duration-700"
          :class="
            revealed.has('strategy-policy')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          "
        >
          <v-expansion-panels variant="accordion" class="voima-panels">
            <v-expansion-panel>
              <v-expansion-panel-title>
                <span
                  class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#1F8A63] mr-3"
                  >03</span
                >
                <span class="font-['Fraunces'] text-xl">Business Strategy</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul class="space-y-3 pt-1">
                  <li
                    v-for="b in businessStrategy"
                    :key="b"
                    class="flex items-center gap-4 border border-[#DDE3E0] bg-white rounded-lg px-5 py-4"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A63] shrink-0"></span>
                    <span class="text-sm text-[#0B1220]">{{ b }}</span>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title>
                <span
                  class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#1F8A63] mr-3"
                  >04</span
                >
                <span class="font-['Fraunces'] text-xl">Marketing Policy</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul class="space-y-3 pt-1">
                  <li
                    v-for="m in marketingPolicy"
                    :key="m"
                    class="flex items-center gap-4 border border-[#DDE3E0] bg-white rounded-lg px-5 py-4"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#1F8A63] shrink-0"></span>
                    <span class="text-sm text-[#0B1220]">{{ m }}</span>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </section>

    <!-- ============ MEET THE FOUNDER ============ -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        data-reveal="founder"
        class="text-center max-w-3xl mx-auto transition-all duration-700"
        :class="revealed.has('founder') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#1F8A63] mb-6">
          Meet the founder
        </p>

        <!-- Image placeholder -->
        <div
          class="w-60 h-80 mx-auto rounded-xl overflow-hidden border border-[#DDE3E0] bg-white mb-6"
        >
          <!-- Replace this img src with the founder photo -->
          <img
            src="../assets/founder.jpeg"
            alt="Kanayo Frank Kemuwa"
            class="w-full h-full object-cover"
          />
        </div>

        <h3 class="font-['Fraunces'] text-2xl tracking-tight mb-1">Kanayo Frank Kemuwa</h3>
        <p class="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#5B6472] mb-6">
          Founder
        </p>
        <a
          href="https://www.linkedin.com/in/kanayokemuwa"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#DDE3E0] hover:border-[#1F8A63] hover:bg-[#1F8A63]/5 transition-colors mb-6"
          aria-label="Kanayo Frank Kemuwa on LinkedIn"
        >
          <img
            src="../assets/icons8-linkedin-48.png"
            alt="LinkedIn"
            class="w-4 h-4 object-contain"
          />
        </a>

        <p class="text-[#5B6472] text-lg leading-relaxed mb-4">
          Founded by Kanayo Frank Kemuwa, Voima CaaS is led by a compliance executive with more than
          12 years of experience designing, implementing, and strengthening compliance and risk
          frameworks across regulated financial institutions and cross-border businesses
        </p>
        <p class="text-[#5B6472] text-lg leading-relaxed mb-4">
          Having led compliance functions, managed regulatory engagements, built AML and KYC
          frameworks, and supported businesses operating across multiple jurisdictions, Kanayo
          understands the gap between regulatory expectations and the day-to-day realities faced by
          growing businesses.
        </p>
        <p class="text-[#5B6472] text-lg leading-relaxed mb-4">
          Voima CaaS was established to close that gap.
        </p>
        <p class="text-[#5B6472] text-lg leading-relaxed mb-4">
          We provide practical, executive-level compliance support that helps SMEs build governance
          structures, manage regulatory obligations, reduce operational risk, and scale with
          confidence. Our approach combines strategic oversight with hands-on execution, delivering
          compliance as an ongoing business function rather than a one-off consulting exercise.
        </p>
        <p class="text-[#5B6472] text-lg leading-relaxed">
          At Voima CaaS, compliance is not treated as a regulatory burden. It is positioned as the
          foundation for sustainable growth, operational resilience, and long-term business
          credibility.
        </p>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="relative bg-[#0B1220] py-28 overflow-hidden">
      <div
        class="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#1F8A63]/15 blur-[120px]"
      ></div>
      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <h2 class="font-['Fraunces'] text-white text-4xl sm:text-5xl tracking-tight mb-6">
          Ready to build a compliance system that works?
        </h2>
        <p class="text-white/60 text-lg mb-10">
          Book a free gap assessment call and we'll show you exactly where you stand.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
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
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
</style>
