import { advancedChapters } from "./advanced";
import { foundationChapters } from "./foundations";
import { glossary } from "./glossary";
import { milestones } from "./milestones";
import type { Chapter, GlossaryEntry, Lesson } from "./types";

export { glossary, milestones };
export type { Chapter, GlossaryEntry, Lesson, LabLink, Milestone, LessonBlock, QuizQuestion } from "./types";

export const chapters: Chapter[] = [...foundationChapters, ...advancedChapters];

export const labs = [
  {
    id: "wallet" as const,
    title: "Wallet lab",
    kicker: "Keys",
    blurb: "Create a simulated wallet and practice handling a seed phrase without risking funds.",
  },
  {
    id: "transaction" as const,
    title: "Transaction lab",
    kicker: "Settlement",
    blurb: "Build a transfer, sign it, and watch it move from mempool to block.",
  },
  {
    id: "amm" as const,
    title: "AMM lab",
    kicker: "Markets",
    blurb: "Swap along a constant-product curve and see price impact with your own hands.",
  },
];

export const allLessons: { chapter: Chapter; lesson: Lesson }[] = chapters.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({ chapter, lesson })),
);

export function getChapter(id: string) {
  return chapters.find((c) => c.id === id);
}

export function getLesson(chapterId: string, lessonId: string) {
  const chapter = getChapter(chapterId);
  if (!chapter) return null;
  const lesson = chapter.lessons.find((l) => l.id === lessonId);
  if (!lesson) return null;
  const index = chapter.lessons.findIndex((l) => l.id === lessonId);
  const prev = index > 0 ? chapter.lessons[index - 1] : null;
  const next = index < chapter.lessons.length - 1 ? chapter.lessons[index + 1] : null;
  return { chapter, lesson, index, prev, next };
}

export function nextChapter(chapterId: string) {
  const i = chapters.findIndex((c) => c.id === chapterId);
  if (i < 0) return null;
  return chapters[i + 1] ?? null;
}

export function prevChapter(chapterId: string) {
  const i = chapters.findIndex((c) => c.id === chapterId);
  if (i <= 0) return null;
  return chapters[i - 1] ?? null;
}

export function searchGlossary(query: string): GlossaryEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return glossary;
  return glossary.filter(
    (e) =>
      e.term.toLowerCase().includes(q) ||
      e.id.toLowerCase().includes(q) ||
      e.short.toLowerCase().includes(q),
  );
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}
