const ATTEMPT_CODES = {
  'Ripetizioni generiche': 'R',
  'Studiare più ore': 'S',
  'Schemi fai-da-te': 'H',
  'Nulla, improvvisiamo': 'N'
};

function buildAttemptsKey(attempts) {
  const codes = attempts
    .map((label) => ATTEMPT_CODES[label])
    .filter(Boolean)
    .sort()
    .join('');

  return codes;
}

export function createInitialState() {
  return {
    role: null,
    level: '',
    blocks: [],
    attempts: [],
    goals: []
  };
}

export function setRole(state, role) {
  return {
    ...state,
    role,
    level: '',
    blocks: [],
    attempts: [],
    goals: []
  };
}

export function setLevel(state, level) {
  return {
    ...state,
    level
  };
}

export function toggleBlock(state, blockId) {
  const exists = state.blocks.includes(blockId);
  const blocks = exists ? state.blocks.filter((id) => id !== blockId) : [...state.blocks, blockId];
  return {
    ...state,
    blocks
  };
}

export function toggleAttempt(state, attemptLabel) {
  const nothingLabel = 'Nulla, improvvisiamo';

  if (attemptLabel === nothingLabel) {
    const attempts = state.attempts.includes(nothingLabel) ? [] : [nothingLabel];
    return {
      ...state,
      attempts
    };
  }

  const filtered = state.attempts.filter((label) => label !== nothingLabel);
  const exists = filtered.includes(attemptLabel);
  const attempts = exists ? filtered.filter((label) => label !== attemptLabel) : [...filtered, attemptLabel];

  return {
    ...state,
    attempts
  };
}

export function toggleGoal(state, goalId) {
  const exists = state.goals.includes(goalId);
  const goals = exists ? state.goals.filter((id) => id !== goalId) : [...state.goals, goalId];
  return {
    ...state,
    goals
  };
}

export function buildUserProfile(state) {
  const blocksKey = [...state.blocks].sort().join('_');
  const attemptsKey = buildAttemptsKey(state.attempts);

  return {
    role: state.role,
    level: state.level,
    blocks: state.blocks,
    blocksKey,
    attempts: state.attempts,
    attemptsKey,
    goals: state.goals,
    isParent: state.role === 'genitore',
    isStudent: state.role === 'studente',
    hasLevelSelected: Boolean(state.level),
    hasBlocksSelected: state.blocks.length > 0,
    hasAttempts: state.attempts.length > 0,
    hasGoals: state.goals.length > 0
  };
}
