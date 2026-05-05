import {ChangeDetectionStrategy, Component, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {PORTFOLIO_DATA} from './portfolio.data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  template: `
    <div class="min-h-screen pt-24 pb-12 px-6">
      <div class="max-w-7xl mx-auto">
        <section class="bg-[var(--bg)] p-8 md:p-12 rounded-[2.5rem] border border-[var(--border)] shadow-sm">
          <!-- Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)] font-sans">
                Solutions I <span class="text-[#5E5CE6]">Provide</span>
              </h1>
              <p class="text-[var(--text-muted)] text-xs md:text-sm font-mono max-w-xl leading-relaxed uppercase">
                From <span class="text-[var(--text)] font-bold">concept</span> to <span class="text-[var(--text)] font-bold">deployment</span>, I craft <span class="text-[var(--text)] font-bold">digital solutions</span> that are <span class="text-[var(--text)] font-bold">impactful, scalable,</span> and <span class="text-[var(--text)] font-bold">results-driven.</span>
              </p>
            </div>
            <div class="shrink-0">
               <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5E5CE6]/5 border border-[#5E5CE6]/20 rounded-full text-[10px] font-bold text-[#5E5CE6] uppercase tracking-widest shadow-sm">
                  <span class="w-2 h-2 bg-[#5E5CE6] rounded-full animate-pulse shadow-[0_0_8px_rgba(94,92,230,0.6)]"></span> 
                  Open to work
                </span>
            </div>
          </div>
          
          <!-- Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (solution of data().solutions; track solution.label) {
              <div class="p-8 bg-[var(--card)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center gap-6 group hover:border-[#5E5CE6]/40 hover:shadow-md transition-all cursor-default">
                <div class="w-12 h-12 flex items-center justify-center text-[#5E5CE6]">
                  <mat-icon class="text-3xl">{{ solution.icon }}</mat-icon>
                </div>
                <span class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors text-center">{{ solution.label }}</span>
              </div>
            }
          </div>

          <!-- Workspace Image -->
          <div class="mt-8 rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl h-[400px]">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" alt="Workspace" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
          </div>

          <!-- Clients -->
          <div class="mt-20">
             <div class="space-y-1 mb-10">
              <h3 class="text-3xl font-extrabold tracking-tight text-[var(--text)]">Global <span class="text-[#5E5CE6]">Clients</span></h3>
              <p class="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">I have worked with clients from: IN US AE</p>
             </div>
             
             <div class="overflow-hidden relative mask-fade-edges -mx-12">
               <div class="flex animate-marquee-slow gap-12 items-center py-4">
                  @for (client of extendedClients(); track client.name + $index) {
                    <div class="flex items-center gap-4 px-8 py-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl grayscale hover:grayscale-0 group transition-all shrink-0">
                      <img [src]="client.logo" [alt]="client.name" class="h-6 w-auto opacity-40 group-hover:opacity-100 transition-all">
                      <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-all">{{ client.name }}</span>
                    </div>
                  }
               </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Solutions {
  data = signal(PORTFOLIO_DATA).asReadonly();
  extendedClients = computed(() => {
    const clients = this.data().clients;
    return [...clients, ...clients, ...clients, ...clients];
  });
}
