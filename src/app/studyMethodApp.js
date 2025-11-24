import {
  createInitialState,
  setRole,
  setLevel,
  toggleBlock,
  toggleAttempt,
  toggleGoal,
  buildUserProfile
} from './profileState.js';
import {
  resolveBlocksContent,
  resolveAttemptsContent,
  resolveGoalsSummary,
  summarizeProblemsForForm,
  summarizeGoalsForForm,
  buildStickyFocus
} from './adaptiveEngine.js';
import { blocksRegistry } from '../data/blocks.js';
import { attemptsRegistry } from '../data/attempts.js';
import { goalsRegistry } from '../data/goals.js';
import { levelsRegistry } from '../data/levels.js';

export function studyMethodApp() {
  return {
    state: createInitialState(),
    showStickyCTA: false,
    formProblems: '',
    formGoal: '',
    levelsContent: levelsRegistry.levelsContent,

    blocksOptions: blocksRegistry.options,
    attemptsOptions: attemptsRegistry.attemptsOptions,
    attemptsMap: attemptsRegistry.attemptsMap,
    attemptsTexts: attemptsRegistry.attemptsTexts,
    goalsOptions: goalsRegistry.options,

    init() {
      window.addEventListener('scroll', () => {
        this.showStickyCTA = window.scrollY > 600;
      });
    },

    get role() {
      return this.state.role;
    },

    get selectedLevel() {
      return this.state.level;
    },

    get selectedBlocks() {
      return this.state.blocks;
    },

    get selectedAttempts() {
      return this.state.attempts;
    },

    get selectedGoals() {
      return this.state.goals;
    },

    get profile() {
      return buildUserProfile(this.state);
    },

    setRole(r) {
      this.state = setRole(this.state, r);
      this.refreshFormFields();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const el = document.getElementById('level-select');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    },

    setLevel(level) {
      this.state = setLevel(this.state, level);
      this.refreshFormFields();
      setTimeout(() => {
        const el = document.getElementById('step-blocks');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    },

    levelLabelForHuman() {
      if (!this.selectedLevel) return '';
      return levelsRegistry.levelLabels[this.selectedLevel] || '';
    },

    toggleSelection(type, value) {
      if (type === 'blocks') {
        this.state = toggleBlock(this.state, value);
      }
      if (type === 'goals') {
        this.state = toggleGoal(this.state, value);
      }
      this.refreshFormFields();
    },

    toggleAttempts(value) {
      this.state = toggleAttempt(this.state, value);
      this.refreshFormFields();
    },

    refreshFormFields() {
      const profile = this.profile;
      this.formProblems = summarizeProblemsForForm(profile, blocksRegistry);
      this.formGoal = summarizeGoalsForForm(profile, goalsRegistry);
    },

    get currentBlockTitle() {
      const resolved = resolveBlocksContent(this.profile, blocksRegistry, levelsRegistry);
      return resolved.title;
    },

    get currentBlockSymptoms() {
      const resolved = resolveBlocksContent(this.profile, blocksRegistry, levelsRegistry);
      return resolved.symptoms;
    },

    get currentBlockSolution() {
      const resolved = resolveBlocksContent(this.profile, blocksRegistry, levelsRegistry);
      return resolved.solution;
    },

    get attemptsCopy() {
      return resolveAttemptsContent(this.profile, attemptsRegistry);
    },

    getStickySummary() {
      return buildStickyFocus(this.profile, blocksRegistry);
    },

    scrollToForm() {
      const el = document.getElementById('contatto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    get whatsappLink() {
      const phone = '391234567890';
      let text = `Ciao Dolores, sono un ${this.role || 'interessato'}`;

      if (this.selectedLevel) {
        text += ` (livello: ${this.levelLabelForHuman()})`;
      }
      if (this.formProblems) {
        text += `. Ho difficoltà su: ${this.formProblems}`;
      }
      if (this.formGoal) {
        text += `. Il mio obiettivo principale: ${this.formGoal}`;
      }

      text += '. Vorrei prenotare la prima sessione gratuita.';

      return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    },

    submitForm() {
      alert('Richiesta inviata. In un sito reale i dati verrebbero registrati e riceveresti una conferma. Ora apro WhatsApp per completare il contatto.');
      window.open(this.whatsappLink, '_blank');
    },

    get goalsSummary() {
      return resolveGoalsSummary(this.profile, goalsRegistry);
    }
  };
}
