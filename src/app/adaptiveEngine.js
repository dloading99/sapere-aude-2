function findBlocksEntry(profile, blocksRegistry) {
  if (!profile.blocksKey) return null;

  if (profile.blocks.length === 1) {
    return blocksRegistry.singles[profile.blocks[0]] || null;
  }

  if (blocksRegistry.combos[profile.blocksKey]) {
    return blocksRegistry.combos[profile.blocksKey];
  }

  const ids = [...profile.blocks].sort();
  for (let size = ids.length - 1; size >= 1; size -= 1) {
    const subsets = combinations(ids, size);
    for (const subset of subsets) {
      const key = subset.join('_');
      if (blocksRegistry.combos[key]) return blocksRegistry.combos[key];
    }
  }

  return null;
}

function combinations(arr, size) {
  const result = [];
  const helper = (start, combo) => {
    if (combo.length === size) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i += 1) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  };
  helper(0, []);
  return result;
}

export function resolveBlocksContent(profile, blocksRegistry, levelsRegistry) {
  if (!profile.hasBlocksSelected || !profile.role) {
    return { title: '', symptoms: [], solution: '' };
  }

  const entry = findBlocksEntry(profile, blocksRegistry);
  if (!entry) return { title: '', symptoms: [], solution: '' };

  const title = profile.isParent ? entry.titleParent : entry.titleStudent;
  const symptoms = profile.isParent ? entry.symptomsParent : entry.symptomsStudent;
  const solutionBase = profile.isParent ? entry.solutionParent : entry.solutionStudent;
  const tail = levelsRegistry.levelSolutionTails[profile.level] || '';

  return {
    title,
    symptoms,
    solution: `${solutionBase}${tail}`
  };
}

export function resolveAttemptsContent(profile, attemptsRegistry) {
  if (!profile.hasAttempts) return '';

  const codes = profile.attempts
    .map((label) => attemptsRegistry.attemptsMap[label])
    .filter(Boolean)
    .sort()
    .join('');

  const key = codes || 'N';
  const entry = attemptsRegistry.attemptsTexts[key] || attemptsRegistry.attemptsTexts.N;

  return profile.isParent ? entry.parent : entry.student;
}

export function resolveGoalsSummary(profile, goalsRegistry) {
  if (!profile.hasGoals) return '';
  const labels = profile.goals
    .map((id) => goalsRegistry.byId[id]?.label)
    .filter(Boolean);
  return labels.join(' / ');
}

export function summarizeProblemsForForm(profile, blocksRegistry) {
  if (!profile.hasBlocksSelected) return '';
  const labels = profile.blocks
    .map((id) => blocksRegistry.labelsById[id])
    .filter(Boolean);
  return labels.join(', ');
}

export function summarizeGoalsForForm(profile, goalsRegistry) {
  if (!profile.hasGoals) return '';
  const labels = profile.goals
    .map((id) => goalsRegistry.byId[id]?.label)
    .filter(Boolean);
  return labels.join(' / ');
}

export function buildStickyFocus(profile, blocksRegistry) {
  if (!profile.hasBlocksSelected) return 'Scegli dove si blocca la mente';
  const labels = profile.blocks
    .map((id) => blocksRegistry.labelsById[id])
    .filter(Boolean);
  const combined = labels.join(', ');
  return combined.length > 50 ? `${combined.substring(0, 50)}…` : combined;
}
