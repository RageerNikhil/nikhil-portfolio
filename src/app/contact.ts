import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {PORTFOLIO_DATA} from './portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen pt-24 pb-12 px-6">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
        
        <!-- Sidebar Profile (Same as Home/Solutions for consistency) -->
        <div class="lg:col-span-4 space-y-6">
          <section class="bg-[var(--card)] p-8 rounded-[2rem] border border-[var(--border)] shadow-sm">
            <div class="aspect-[4/3] mb-8 rounded-2xl bg-[var(--card-hover)] relative overflow-hidden">
              <img src="https://picsum.photos/seed/nikhil-contact/800/600" [alt]="data().profile.name" class="w-full h-full object-cover">
            </div>
            
            <div class="space-y-6">
              <h2 class="text-3xl font-extrabold tracking-tighter text-[var(--text)]">Hello! I'm {{ data().profile.name.split(' ')[0] }}. 👋</h2>
              <p class="text-[var(--text-muted)] text-sm leading-relaxed font-medium">
                <span class="text-[var(--text)] font-bold">{{ data().profile.role }}</span> based in India, delivering <span class="text-[var(--text)] font-semibold">scalable enterprise solutions</span> and well-architected systems.
              </p>
              
              <div class="flex flex-wrap gap-4 pt-4">
                <a [href]="'tel:' + data().profile.phone" class="flex-grow bg-[#5E5CE6] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                  <mat-icon>call</mat-icon> Call Me
                </a>
                <button (click)="copyEmail()" class="flex-grow border border-[var(--border)] text-[var(--text)] px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--card-hover)] transition-all">
                  <mat-icon>content_copy</mat-icon> Copy Email
                </button>
              </div>

              <div class="flex gap-4 pt-4 border-t border-[var(--border)]">
                @for (social of data().profile.socials; track social.platform) {
                  <a [href]="social.url" class="p-3 bg-[var(--card-hover)] border border-[var(--border)] rounded-xl text-[var(--text-muted)] hover:text-[var(--text)] transition-all">
                    <mat-icon>{{ social.icon }}</mat-icon>
                  </a>
                }
              </div>
            </div>
          </section>
        </div>

        <!-- Contact Form (Right) -->
        <div class="lg:col-span-8">
          <section class="bg-[var(--card)] p-8 md:p-12 rounded-[2.5rem] border border-[var(--border)] shadow-sm">
            <div class="flex flex-col gap-4 mb-12">
              <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
                Let's Work <span class="text-[#5E5CE6]">Together</span>
              </h1>
              <p class="text-[var(--text-muted)] text-sm font-mono max-w-xl leading-relaxed uppercase">
                I'M CURRENTLY AVAILABLE FOR <span class="text-[var(--text)] font-bold">FREELANCE WORK</span> OR <span class="text-[var(--text)] font-bold">FULL-TIME OPPORTUNITIES</span>. SEND ME A MESSAGE AND I'LL GET BACK TO YOU SOON.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
              <!-- Contact Info -->
              <div class="space-y-10">
                <h3 class="text-xl font-extrabold uppercase tracking-widest text-[#5E5CE6]">Contact Details</h3>
                
                <div class="space-y-8">
                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-2xl bg-[var(--card-hover)] border border-[var(--border)] flex items-center justify-center text-[#5E5CE6] group-hover:scale-110 transition-all">
                      <mat-icon>email</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono mb-0.5">Email Me</p>
                      <p class="font-bold text-[var(--text)] text-sm">{{ data().profile.email }}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-2xl bg-[var(--card-hover)] border border-[var(--border)] flex items-center justify-center text-teal-400 group-hover:scale-110 transition-all">
                      <mat-icon>call</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono mb-0.5">Call Me</p>
                      <p class="font-bold text-[var(--text)] text-sm">{{ data().profile.phone }}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div class="w-14 h-14 rounded-2xl bg-[var(--card-hover)] border border-[var(--border)] flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-all">
                      <mat-icon>location_on</mat-icon>
                    </div>
                    <div>
                      <p class="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono mb-0.5">Location</p>
                      <p class="font-bold text-[var(--text)] text-sm">{{ data().profile.location }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Message Form -->
              <div class="space-y-6">
                 <h3 class="text-xl font-extrabold uppercase tracking-widest text-[#5E5CE6]">Send Message</h3>
                 <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
                    <div class="space-y-2">
                      <label class="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Your Name</label>
                      <input type="text" formControlName="name" placeholder="Name" class="w-full bg-[var(--card-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:border-[#5E5CE6] outline-none transition-all">
                    </div>
                    <div class="space-y-2">
                      <label class="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Your Email</label>
                      <input type="email" formControlName="email" placeholder="Email" class="w-full bg-[var(--card-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:border-[#5E5CE6] outline-none transition-all">
                    </div>
                    <div class="space-y-2">
                      <label class="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Message</label>
                      <textarea formControlName="message" rows="4" placeholder="How can I help you?" class="w-full bg-[var(--card-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:border-[#5E5CE6] outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-[#5E5CE6] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all mt-4 shadow-xl shadow-indigo-500/20">
                      <mat-icon>send</mat-icon> Send Now
                    </button>
                 </form>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  data = signal(PORTFOLIO_DATA).asReadonly();
  
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  copyEmail() {
    navigator.clipboard.writeText(this.data().profile.email);
    // Optional: add toast notification
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Thanks for reaching out! This is a demo form.');
      this.contactForm.reset();
    }
  }
}
