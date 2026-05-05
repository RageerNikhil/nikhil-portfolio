import {ChangeDetectionStrategy, Component, afterNextRender, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {PORTFOLIO_DATA} from './portfolio.data';
import {animate} from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 section-fade-in">
        <!-- Sidebar - Similar to Home but for context -->
        <div class="lg:col-span-4 space-y-6">
          <section class="bento-card reveal-item relative overflow-hidden group">
            <div class="aspect-[4/5] mb-8 rounded-2xl bg-[var(--card-hover)] relative overflow-hidden group-hover:scale-[1.02] transition-transform">
              <img src="https://picsum.photos/seed/about-nik/800/1000?grayscale" alt="About Profile" class="w-full h-full object-cover opacity-80">
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                  <mat-icon>play_circle_filled</mat-icon>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <h1 class="text-4xl font-bold leading-none tracking-tighter text-[var(--text)]">Hello! I'm {{ data().profile.name.split(' ')[0] }}. 👋</h1>
              <p class="text-[var(--text-muted)] text-sm leading-relaxed font-mono">
                <span class="text-[var(--text)] font-bold">{{ data().profile.role }}</span> based in India, delivering <span class="text-[var(--text)]">scalable enterprise solutions</span>.
              </p>
              
              <div class="flex flex-wrap gap-3 pt-4">
                <a [href]="'tel:+917207200148'" class="flex-grow bg-[var(--accent)] text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all text-xs">
                  <mat-icon class="text-sm">call</mat-icon> Call Me
                </a>
                <button class="flex-grow bg-[var(--card-hover)] text-[var(--text)] px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--border)] transition-all text-xs">
                  <mat-icon class="text-sm">content_copy</mat-icon> Copy Email
                </button>
              </div>

              <div class="flex gap-4 pt-4 border-t border-[var(--border)]">
                <a href="https://linkedin.com" target="_blank" class="p-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] transition-all"><mat-icon class="text-lg">link</mat-icon></a>
                <a href="https://github.com" target="_blank" class="p-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] transition-all"><mat-icon class="text-lg">code</mat-icon></a>
                <a href="https://twitter.com" target="_blank" class="p-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] transition-all"><mat-icon class="text-lg">public</mat-icon></a>
              </div>
            </div>
          </section>
        </div>

        <!-- Main Content (About) -->
        <div class="lg:col-span-8 space-y-6">
          <section class="bento-card reveal-item">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-4xl font-bold tracking-tight">About <span class="text-[var(--accent)]">{{ data().profile.name }}</span></h2>
              <span class="px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Open to Work
              </span>
            </div>
            
            <p class="text-[var(--text-muted)] text-lg leading-relaxed mb-12">
              {{ data().profile.detailedBio }}
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-[var(--border)]">
              @for (stat of data().profile.stats; track stat.label) {
                <div class="space-y-1">
                  <p class="text-4xl font-bold text-[var(--text)]">{{ stat.value }}</p>
                  <p class="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{{ stat.label }}</p>
                </div>
              }
            </div>

            <!-- Tech Stacks -->
            <div class="mt-16">
              <h3 class="text-xl font-bold mb-8">Tech & Dev Stacks</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                @for (skill of data().resume.skills[0].items; track skill.name) {
                  <div class="fancy-icon-card group" [class]="skill.color">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[currentColor] transition-all mb-4">
                      <mat-icon class="text-2xl font-bold">{{ skill.icon }}</mat-icon>
                    </div>
                    <div class="flex flex-col items-center gap-0.5">
                      <span class="text-xs font-bold uppercase tracking-widest text-center leading-none">{{ skill.name }}</span>
                      @if (skill.subtitle) {
                        <span class="text-[9px] font-mono opacity-50 uppercase tracking-tighter">{{ skill.subtitle }}</span>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- AI Tools -->
            <div class="mt-16">
              <div class="space-y-1 mb-8">
                <h3 class="text-xl font-bold">Familiar AI Tools</h3>
                <p class="text-xs text-[var(--text-muted)]">Tools I use to accelerate development, research, and problem solving.</p>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                @for (tool of data().resume.aiTools; track tool.name) {
                  <div class="fancy-icon-card group" [class]="tool.color">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[currentColor] transition-all mb-4">
                      <mat-icon class="text-2xl">{{ tool.icon }}</mat-icon>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                      <span class="text-xs font-bold uppercase tracking-widest text-center">{{ tool.name }}</span>
                      <span class="text-[9px] font-mono opacity-50 uppercase tracking-tighter">{{ tool.subtitle }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Education -->
            <div class="mt-16">
              <h3 class="text-xl font-bold mb-8">Education</h3>
              <div class="space-y-4">
                @for (edu of data().resume.education; track edu.institution) {
                  <div class="p-6 bg-[var(--card-hover)] border border-[var(--border)] rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[var(--accent)] transition-all">
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10" [class]="$index === 0 ? 'text-blue-400' : $index === 1 ? 'text-emerald-400' : 'text-purple-400'">
                        <mat-icon class="text-3xl">{{ $index === 0 ? 'school' : $index === 1 ? 'auto_stories' : 'workspace_premium' }}</mat-icon>
                      </div>
                      <div>
                        <h4 class="text-lg font-bold text-[var(--text)] leading-tight uppercase tracking-tight">{{ edu.degree }}</h4>
                        <p class="text-sm font-medium text-[var(--text-muted)]">{{ edu.institution }} / {{ edu.period }}</p>
                      </div>
                    </div>
                    <span class="text-sm font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors self-end sm:self-auto">{{ edu.year }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Key Strengths -->
            <div class="mt-16">
              <h3 class="text-xl font-bold mb-8">Key Strengths</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                @for (strength of data().resume.strengths; track strength) {
                  <div class="p-4 bg-[var(--card-hover)] border border-[var(--border)] rounded-xl flex items-center gap-3">
                    <div class="w-6 h-6 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                      <mat-icon class="text-sm">check</mat-icon>
                    </div>
                    <span class="text-sm font-bold text-[var(--text-muted)]">{{ strength }}</span>
                  </div>
                }
              </div>
            </div>
          </section>
        </div>
       </div>
  `,
})
export class About {
  data = signal(PORTFOLIO_DATA).asReadonly();

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
