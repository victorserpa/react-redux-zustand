import { beforeEach, describe, expect, it } from "vitest";
import { useStore as storeZustand } from ".";

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
        {
          id: "w-DW4DhDfcw",
          title: "Estilização do Post",
          duration: "10:05",
        },
      ],
    },
    {
      id: 2,
      title: "Estrutura da aplicação",
      lessons: [
        {
          id: "gE48FQXRZ_o",
          title: "Componente: Comment",
          duration: "13:45",
        },
        { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
      ],
    },
  ],
};
const initialState = storeZustand.getState();

describe("zustand store", () => {
  beforeEach(() => {
    storeZustand.setState(initialState);
  });

  it("should be able to play", () => {
    const { play } = storeZustand.getState();

    play([1, 2]);

    const { currentModuleIndex, currentLessonIndex } = storeZustand.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(2);
  });

  it("should be able to play next video automatically", () => {
    storeZustand.setState({ course });

    const { next } = storeZustand.getState();

    next()

    const { currentModuleIndex, currentLessonIndex } = storeZustand.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    storeZustand.setState({ course });

    const { next } = storeZustand.getState();

    storeZustand.setState({ currentLessonIndex: 1 });

    next()

    const { currentModuleIndex, currentLessonIndex } = storeZustand.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });

    it("should be not update the current module and lesson if there isn't next lesson availeble", () => {
      storeZustand.setState({ course });

      const { next } = storeZustand.getState();

      storeZustand.setState({ currentLessonIndex: 1, currentModuleIndex: 1 });

      next();

      const { currentModuleIndex, currentLessonIndex } = storeZustand.getState();
  

      expect(currentModuleIndex).toEqual(1);
      expect(currentLessonIndex).toEqual(1);
    });
});
