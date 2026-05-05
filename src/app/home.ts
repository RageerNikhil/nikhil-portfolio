import {ChangeDetectionStrategy, Component, afterNextRender, signal, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink, Router} from '@angular/router';
import {PORTFOLIO_DATA} from './portfolio.data';
import {animate} from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule, RouterLink],
  template: `
    <div id="home" class="grid grid-cols-1 lg:grid-cols-12 gap-6 section-fade-in">
        <!-- LEFT COLUMN: Profile & Intro -->
        <div class="lg:col-span-4 space-y-6">
          <section class="bento-card relative overflow-hidden group h-full">
            <div class="aspect-[4/3] mb-8 rounded-2xl bg-[var(--card-hover)] relative overflow-hidden group-hover:scale-[1.02] transition-transform">
              <img src="https://picsum.photos/seed/profile/800/600" alt="Profile View" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-all cursor-pointer">
                <div class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-2xl">
                  <mat-icon class="text-3xl">play_arrow</mat-icon>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <h1 class="text-3xl md:text-4xl font-bold leading-none tracking-tight text-[var(--text)]">
                Hello! I'm {{ data().profile.name.split(' ')[0] }}. 👋
              </h1>
              <p class="text-[var(--text-muted)] text-sm leading-relaxed font-medium">
                <span class="text-[var(--text)] font-bold">{{ data().profile.role }}</span> and Project Enthusiast based in India, delivering <span class="text-[var(--text)]">scalable enterprise solutions</span>.
              </p>
              
              <div class="flex flex-wrap gap-4 pt-4">
                <a [href]="'tel:' + data().profile.phone" class="flex-grow bg-[#5E5CE6] text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                  <mat-icon>call</mat-icon> Call Me
                </a>
                <button class="flex-grow border border-[var(--border)] text-[var(--text)] px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--card-hover)] transition-all">
                  <mat-icon>content_copy</mat-icon> Copy Email
                </button>
              </div>

              <div class="flex gap-4 pt-4 border-t border-[var(--border)]">
                @for (social of data().profile.socials; track social.platform) {
                  <a [href]="social.url" class="p-3 bg-[var(--card)] border border-[var(--border)] rounded-xl text-[var(--text-muted)] hover:text-[var(--text)] transition-all">
                    <mat-icon>{{ social.icon }}</mat-icon>
                  </a>
                }
              </div>
            </div>
          </section>
        </div>

        <!-- CENTER COLUMN: Experience & Stack -->
        <div class="lg:col-span-4 space-y-6">
          <section class="bento-card h-[400px] flex flex-col overflow-hidden">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-xl font-bold tracking-tight">Work Experience</h2>
            </div>
            
            <div class="marquee-container flex-grow relative overflow-hidden">
              <div class="animate-marquee-fast flex gap-6">
                @for (exp of [...data().resume.experience, ...data().resume.experience]; track exp.company + $index) {
                  <div class="exp-card w-[280px]">
                    <div class="flex items-start justify-between">
                      <div class="w-12 h-12 rounded-2xl flex items-center justify-center icon-box-indigo">
                        <mat-icon>business</mat-icon>
                      </div>
                      <div class="px-3 py-1 bg-[var(--card-hover)] border border-[var(--border)] rounded-lg text-[10px] font-mono text-[var(--text-muted)]">
                        {{ exp.period }}
                      </div>
                    </div>
                    <div class="space-y-1 mt-4">
                      <h3 class="text-base font-bold text-[var(--text)]">{{ exp.company }}</h3>
                      <p class="text-[var(--text-muted)] text-xs">{{ exp.role }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </section>

          <section class="bento-card">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-xl font-bold tracking-tight">Main Stack</h2>
              <a routerLink="/about" class="text-[10px] font-bold text-[#5E5CE6] uppercase tracking-widest hover:underline">View All →</a>
            </div>
            <div class="grid grid-cols-3 gap-4">
              @for (skill of data().resume.skills[0].items.slice(0, 6); track skill.name) {
                <div class="fancy-icon-card group !py-4" [class]="skill.color">
                   <mat-icon class="font-bold text-lg mb-2">{{ skill.icon }}</mat-icon>
                   <span class="text-[9px] font-bold uppercase tracking-tight">{{ skill.name }}</span>
                </div>
              }
            </div>
          </section>
        </div>

        <!-- RIGHT COLUMN: Projects -->
        <div class="lg:col-span-4 flex flex-col h-full">
          <section class="bento-card flex-grow flex flex-col p-6 overflow-hidden min-h-[600px]">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold tracking-tight">Recent Projects</h2>
            </div>
            
            <div class="flex-grow overflow-hidden projects-scroll-mask h-[500px]">
              <div class="animate-marquee-vertical-fast flex flex-col gap-6">
                @for (project of [...data().projects, ...data().projects]; track project.id + $index) {
                  <div class="group relative bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] transition-all hover:scale-[1.02] cursor-pointer shadow-sm">
                    <div class="aspect-[16/9] flex items-center justify-center p-8 overflow-hidden relative bg-[var(--card-hover)]/30">
                      <img [src]="project.image" [alt]="project.title" class="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110">
                    </div>
                    <div class="absolute bottom-4 left-4">
                      <span class="bg-[var(--card-hover)] text-[var(--text)] px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-tight shadow-lg border border-[var(--border)]">
                        {{ project.title }}
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>
          </section>
        </div>

        <!-- WIDE BOTTOM: Solutions Teaser -->
        <div class="lg:col-span-12">
          <section class="bento-card p-8 bg-[var(--card)] border border-[var(--border)] overflow-hidden relative group shadow-sm">
            <div class="grid md:grid-cols-2 gap-12 items-center relative z-10">
               <div class="space-y-6">
                 <h2 class="text-4xl font-bold tracking-tight text-[var(--text)]">Professional <span class="text-[#5E5CE6]">Solutions</span></h2>
                 <p class="text-[var(--text-muted)] text-sm max-w-xl">
                   I provide end-to-end digital solutions from conceptualization to deployment, focusing on scalability and performance.
                 </p>
                 <a routerLink="/solutions" class="inline-flex px-8 py-3 bg-[#5E5CE6] text-white rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-all shadow-xl shadow-indigo-500/20">
                    Explore My Services →
                 </a>
               </div>
               
               <div class="grid grid-cols-4 gap-4">
                  @for (solution of data().solutions.slice(0, 4); track solution.label) {
                    <div class="aspect-square bg-[var(--bg)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#5E5CE6]/50 transition-all shadow-sm">
                      <mat-icon class="text-2xl text-[#5E5CE6]">{{ solution.icon }}</mat-icon>
                      <span class="text-[8px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{{ solution.label }}</span>
                    </div>
                  }
               </div>
            </div>
            <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-[#5E5CE6]/5 rounded-full blur-3xl"></div>
          </section>
        </div>

        <!-- CONTACT TEASER -->
        <div class="lg:col-span-12">
           <section class="p-12 bg-[#5E5CE6] rounded-[2.5rem] border-none overflow-hidden relative group">
              <!-- Branded Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#5E5CE6] to-[#4644B2] opacity-90"></div>
              
              <div class="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div class="space-y-4 text-center md:text-left">
                  <h2 class="text-5xl font-bold text-white tracking-tight">Let's Work Together 🤝</h2>
                  <p class="text-white/90 text-lg max-w-xl font-medium">
                    Ready to start your next big project? I am available for freelance work and full-time opportunities.
                  </p>
                </div>
                <a routerLink="/contact" class="px-12 py-5 bg-white text-[#5E5CE6] rounded-full font-bold text-lg hover:bg-zinc-100 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  Get In Touch
                </a>
              </div>
              
              <!-- Decorative Elements -->
              <div class="absolute -left-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-[100px] group-hover:bg-white/30 transition-all duration-700"></div>
              <div class="absolute -right-20 -bottom-20 w-60 h-60 bg-black/20 rounded-full blur-[80px]"></div>
           </section>
        </div>
      </div>
  `,
})
export class Home {
  data = signal(PORTFOLIO_DATA).asReadonly();
  router = inject(Router);

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(
            entry.target,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, ease: "easeOut" }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
  }
}
