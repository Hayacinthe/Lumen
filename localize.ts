import { useMemo } from "react";
import {
  chapters as enChapters,
  glossary as enGlossary,
  milestones as enMilestones,
  labs as enLabs,
  nextChapter as nextEn,
  prevChapter as prevEn,
  type Chapter,
  type GlossaryEntry,
  type Lesson,
  type LessonBlock,
  type Milestone,
  type QuizQuestion,
} from "@/lib/curriculum";
import { getCopy } from "@/lib/copy";
import { filMap } from "@/lib/i18n/fil";
import { useLang } from "@/lib/locale";

function tr(text: string) {
  return filMap[text] ?? text;
}

function trBlock(block: LessonBlock): LessonBlock {
  if (block.type === "p" || block.type === "h") return { ...block, text: tr(block.text) };
  if (block.type === "callout") return { ...block, title: tr(block.title), text: tr(block.text) };
  if (block.type === "term") return { ...block, term: tr(block.term), def: tr(block.def) };
  return { ...block, items: block.items.map(tr) };
}

function trQuiz(q: QuizQuestion): QuizQuestion {
  return {
    ...q,
    prompt: tr(q.prompt),
    choices: q.choices.map(tr),
    explain: tr(q.explain),
  };
}

function trLesson(lesson: Lesson): Lesson {
  return {
    ...lesson,
    title: tr(lesson.title),
    summary: tr(lesson.summary),
    blocks: lesson.blocks.map(trBlock),
    quiz: lesson.quiz?.map(trQuiz),
  };
}

function trChapter(chapter: Chapter): Chapter {
  return {
    ...chapter,
    title: tr(chapter.title),
    kicker: tr(chapter.kicker),
    summary: tr(chapter.summary),
    lab: chapter.lab
      ? { ...chapter.lab, title: tr(chapter.lab.title), blurb: tr(chapter.lab.blurb) }
      : undefined,
    lessons: chapter.lessons.map(trLesson),
  };
}

function trGlossary(entry: GlossaryEntry): GlossaryEntry {
  return { ...entry, short: tr(entry.short), body: tr(entry.body) };
}

function trMilestone(m: Milestone): Milestone {
  return { ...m, title: tr(m.title), detail: tr(m.detail) };
}

export function useAcademy() {
  const lang = useLang();
  return useMemo(() => {
    const copy = getCopy(lang);
    const chapters = lang === "en" ? enChapters : enChapters.map(trChapter);
    const glossary = lang === "en" ? enGlossary : enGlossary.map(trGlossary);
    const milestones = lang === "en" ? enMilestones : enMilestones.map(trMilestone);
    const labs =
      lang === "en"
        ? enLabs
        : enLabs.map((lab) => ({
            ...lab,
            title: copy.labs[lab.id].title,
            blurb: copy.labs[lab.id].lede,
          }));

    function getChapter(id: string) {
      return chapters.find((c) => c.id === id);
    }

    function getLesson(chapterId: string, lessonId: string) {
      const chapter = getChapter(chapterId);
      if (!chapter) return null;
      const index = chapter.lessons.findIndex((l) => l.id === lessonId);
      if (index < 0) return null;
      const lesson = chapter.lessons[index]!;
      const prev = index > 0 ? chapter.lessons[index - 1]! : null;
      const next = index < chapter.lessons.length - 1 ? chapter.lessons[index + 1]! : null;
      return { chapter, lesson, index, prev, next };
    }

    function searchGlossary(query: string) {
      const q = query.trim().toLowerCase();
      if (!q) return glossary;
      return glossary.filter(
        (e) =>
          e.term.toLowerCase().includes(q) ||
          e.id.toLowerCase().includes(q) ||
          e.short.toLowerCase().includes(q) ||
          e.body.toLowerCase().includes(q),
      );
    }

    return {
      lang,
      copy,
      chapters,
      glossary,
      milestones,
      labs,
      getChapter,
      getLesson,
      searchGlossary,
      nextChapter: (id: string) => {
        const base = nextEn(id);
        return base ? (getChapter(base.id) ?? base) : null;
      },
      prevChapter: (id: string) => {
        const base = prevEn(id);
        return base ? (getChapter(base.id) ?? base) : null;
      },
    };
  }, [lang]);
}
