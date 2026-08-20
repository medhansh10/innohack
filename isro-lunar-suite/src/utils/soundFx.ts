/**
 * Lightweight Web Audio API Synthesizer for aerospace telemetry sounds
 */

class SoundFxManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    if (enabled) {
      this.initCtx();
      this.playBeep(880, 0.05, 'sine', 0.05);
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public playBeep(freq = 600, duration = 0.04, type: OscillatorType = 'sine', gainVal = 0.03) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Ignore audio context errors if blocked by browser policy
    }
  }

  public playTelemetryTypewriter() {
    if (!this.enabled) return;
    const freqs = [1200, 1400, 1600, 1800, 2000];
    const freq = freqs[Math.floor(Math.random() * freqs.length)];
    this.playBeep(freq, 0.015, 'square', 0.012);
  }

  public playScanTone() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch {}
  }

  public playSuccessChirp() {
    if (!this.enabled) return;
    this.playBeep(587.33, 0.08, 'sine', 0.04);
    setTimeout(() => this.playBeep(880, 0.12, 'sine', 0.04), 80);
    setTimeout(() => this.playBeep(1174.66, 0.2, 'sine', 0.05), 160);
  }

  public playSliderTick() {
    if (!this.enabled) return;
    this.playBeep(1400, 0.01, 'triangle', 0.01);
  }
}

export const soundFx = new SoundFxManager();
