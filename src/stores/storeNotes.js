import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt perferendis maiores eveniet consectetur veritatis fuga officiis odit itaque quasi, quo aspernatur sed, ipsum esse consequuntur nulla! Eveniet, atque omnis.",
        },
        {
          id: "id2",
          content: 'This is a note. It is a "note".',
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();
      let note = {
        id: id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      //let index = this.notes.findIndex((note) => note.id === id);
      //this.notes.splice(index, 1);
      //console.log("deleteNote", idToDelete);
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        let note = state.notes.find((note) => note.id === id);
        return note.content;
      };
    },
  },
});
