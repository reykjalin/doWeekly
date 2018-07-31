import { backlog } from '@/datastore'

const state = {
  tasks: []
}

const actions = {
  loadFutureTasks ({ commit }) {
    backlog.find({}).sort({ description: 1 }).exec(function (err, tasks) {
      if (err) {
        console.log(err)
      }

      console.log(tasks)
      commit('setFutureTasks', tasks)
    })
  },

  newFutureTask ({ dispatch }, futureTask) {
    backlog.insert(futureTask, function (err, newTask) {
      if (err) {
        console.log(err)
      }

      dispatch('loadFutureTasks')
    })
  },

  deleteFutureTask ({ dispatch }, taskToRemove) {
    backlog.remove({ _id: taskToRemove._id }, function (err, numRemoved) {
      if (err) {
        console.log(err)
      }

      dispatch('loadFutureTasks')
    })
  }
}

const mutations = {
  setFutureTasks (state, tasks) {
    state.tasks = tasks
  }
}

const getters = {
  getFutureTasks (state) {
    return state.tasks
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
