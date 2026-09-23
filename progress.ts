import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { chapters, allLessons, milestones } from "@/lib/curriculum";

type ProgressState = {
  completedLessons: string[];
  quizPassed: string[];
  labsVisited: string[];
  claimedMilestones: string[];
  markLesson: (id: string) => void;
  markQuiz: (lessonId: string) => void;
  visitLab: (id: string) => void;
  claimMilestone: (id: string) => void;
  reset: () => void;
};

const empty = {
  completedLessons: [] as string[],
  quizPassed: [] as string[],
  labsVisited: [] as string[],
  claimedMilestones: [] as string[],
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      markLesson: (id) => {
        if (get().completedLessons.includes(id)) return;
        set({ completedLessons: [...get().completedLessons, id] });
      },
      markQuiz: (lessonId) => {
        const nextQuiz = get().quizPassed.includes(lessonId)
          ? get().quizPassed
          : [...get().quizPassed, lessonId];
        const nextLessons = get().completedLessons.includes(lessonId)
          ? get().completedLessons
          : [...get().completedLessons, lessonId];
        set({ quizPassed: nextQuiz, completedLessons: nextLessons });
      },
      visitLab: (id) => {
        if (get().labsVisited.includes(id)) return;
        set({ labsVisited: [...get().labsVisited, id] });
      },
      claimMilestone: (id) => {
        if (get().claimedMilestones.includes(id)) return;
        set({ claimedMilestones: [...get().claimedMilestones, id] });
      },
      reset: () => set(empty),
    }),
    { name: "lumen-progress" },
  ),
);

export function lessonKey(chapterId: string, lessonId: string) {
  return `${chapterId}.${lessonId}`;
}

export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}

export function useProgressStats() {
  const hydrated = useHasHydrated();
  const completedLessonsRaw = useProgress((s) => s.completedLessons);
  const quizPassedRaw = useProgress((s) => s.quizPassed);
  const labsVisitedRaw = useProgress((s) => s.labsVisited);
  const claimedMilestonesRaw = useProgress((s) => s.claimedMilestones);

  const completedLessons = hydrated ? completedLessonsRaw : [];
  const quizPassed = hydrated ? quizPassedRaw : [];
  const labsVisited = hydrated ? labsVisitedRaw : [];
  const claimedMilestones = hydrated ? claimedMilestonesRaw : [];

  const totalLessons = allLessons.length;
  const percent = totalLessons === 0 ? 0 : Math.round((completedLessons.length / totalLessons) * 100);

  const next = (() => {
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        const key = lessonKey(chapter.id, lesson.id);
        if (!completedLessons.includes(key)) {
          return { chapter, lesson, key };
        }
      }
    }
    return null;
  })();

  const chapterProgress = chapters.map((chapter) => {
    const keys = chapter.lessons.map((l) => lessonKey(chapter.id, l.id));
    const done = keys.filter((k) => completedLessons.includes(k)).length;
    return {
      id: chapter.id,
      done,
      total: keys.length,
      complete: done === keys.length && keys.length > 0,
    };
  });

  const earnedMilestones = milestones.filter((m) => {
    const chapter = chapterProgress.find((c) => c.id === m.chapterId);
    return chapter?.complete || claimedMilestones.includes(m.id);
  });

  return {
    hydrated,
    completedLessons,
    quizPassed,
    labsVisited,
    claimedMilestones,
    totalLessons,
    percent,
    next,
    chapterProgress,
    earnedMilestones,
  };
}
