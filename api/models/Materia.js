/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    semestre: {
      type: 'integer',
      required: true
    },

    clasesHorario: {
      collection: 'ClaseHorario',
      via: 'materia'
    },

    tareas: {
      collection: 'tarea',
      via: 'materia'
    },

    clasesOnline: {
      collection: 'ClaseOnline',
      via: 'materia'
    }

  }
};
