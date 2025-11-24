import { blocksOptions, blocksInfoSingles, blocksInfoCombos } from '../data/blocks.js';
import { attemptsOptions, attemptsMap, attemptsTexts } from '../data/attempts.js';
import { goalsOptions } from '../data/goals.js';
import { levelLabels, levelSolutionTails } from '../data/levels.js';

export function studyMethodApp() {
  return {
    role: null,
    selectedLevel: '',
    selectedBlocks: [],
    selectedAttempts: [],
    selectedGoals: [],
    showStickyCTA: false,
    formProblems: '',
    formGoal: '',

    blocksOptions,
    blocksInfoSingles,
    blocksInfoCombos,

    attemptsOptions,
    attemptsMap,
    attemptsTexts,

    goalsOptions,

    init() {
      window.addEventListener('scroll', () => {
        this.showStickyCTA = window.scrollY > 600;
      });
    },

    setRole(r) {
      this.role = r;
      this.selectedBlocks = [];
      this.selectedAttempts = [];
      this.selectedGoals = [];
      this.formProblems = '';
      this.formGoal = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const el = document.getElementById('level-select');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    },

    setLevel(level) {
      this.selectedLevel = level;
      setTimeout(() => {
        const el = document.getElementById('step-blocks');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    },

    levelLabelForHuman() {
      if (!this.selectedLevel) return '';
      return levelLabels[this.selectedLevel] || '';
    },

    toggleSelection(type, value) {
      let arr;
      if (type === 'blocks') arr = this.selectedBlocks;
      if (type === 'goals') arr = this.selectedGoals;

      if (!arr) return;

      const idx = arr.indexOf(value);
      if (idx > -1) {
        arr.splice(idx, 1);
      } else {
        arr.push(value);
      }

      this.updateFormFields();
    },

    toggleAttempts(value) {
      const nothing = 'Nulla, improvvisiamo';

      if (value === nothing) {
        if (this.selectedAttempts.includes(nothing)) {
          this.selectedAttempts = [];
        } else {
          this.selectedAttempts = [nothing];
        }
      } else {
        this.selectedAttempts = this.selectedAttempts.filter((v) => v !== nothing);

        const idx = this.selectedAttempts.indexOf(value);
        if (idx > -1) {
          this.selectedAttempts.splice(idx, 1);
        } else {
          this.selectedAttempts.push(value);
        }
      }
    },

    getBlocksKey() {
      return [...this.selectedBlocks].sort().join('_');
    },

    getCurrentBlockConfig() {
      if (!this.selectedBlocks.length) return null;

      const key = this.selectedBlocks.length === 1 ? this.selectedBlocks[0] : this.getBlocksKey();

      const base = this.selectedBlocks.length === 1 ? this.blocksInfoSingles[key] : this.blocksInfoCombos[key];

      if (!base) return null;

      const title = this.role === 'genitore' ? base.titleParent : base.titleStudent;
      const symptoms = this.role === 'genitore' ? base.symptomsParent : base.symptomsStudent;

      return { title, symptoms, base };
    },

    getLevelSolutionTail() {
      if (!this.selectedLevel) return '';
      return levelSolutionTails[this.selectedLevel] || '';
    },

    getStickySummary() {
      if (!this.selectedBlocks.length) return '...';
      return (
        this.selectedBlocks
          .map((id) => this.blocksOptions.find((o) => o.id === id)?.label || '')
          .filter(Boolean)
          .join(', ')
          .substring(0, 40) + '...'
      );
    },

    get attemptsCopy() {
      if (!this.selectedAttempts.length) return '';

      const codes = this.selectedAttempts
        .map((a) => this.attemptsMap[a])
        .filter(Boolean)
        .sort()
        .join('');

      const key = codes || 'N';
      const entry = this.attemptsTexts[key] || this.attemptsTexts['N'];

      return this.role === 'genitore' ? entry.parent : entry.student;
    },

    updateFormFields() {
      if (this.selectedBlocks.length > 0) {
        const labels = this.selectedBlocks
          .map((id) => this.blocksOptions.find((o) => o.id === id)?.label)
          .filter(Boolean);
        this.formProblems = labels.join(', ');
      } else {
        if (!this.formProblems) this.formProblems = '';
      }

      if (this.selectedGoals.length > 0) {
        const labels = this.selectedGoals
          .map((id) => this.goalsOptions.find((g) => g.id === id)?.label)
          .filter(Boolean);
        this.formGoal = labels.join(' / ');
      } else {
        if (!this.formGoal) this.formGoal = '';
      }
    },

    scrollToForm() {
      const el = document.getElementById('contatto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    get currentBlockTitle() {
      const cfg = this.getCurrentBlockConfig();
      return cfg ? cfg.title : '';
    },

    get currentBlockSymptoms() {
      const cfg = this.getCurrentBlockConfig();
      return cfg ? cfg.symptoms : [];
    },

    get currentBlockSolution() {
      const cfg = this.getCurrentBlockConfig();
      if (!cfg) return '';
      const baseSolution = this.role === 'genitore' ? cfg.base.solutionParent : cfg.base.solutionStudent;
      return baseSolution + this.getLevelSolutionTail();
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
    }
  };
}
