import { db } from '@/datastore'

const state = {
  tasks: []
}

const actions = {
  loadTasks ({ commit }, timestamp) {
    let now = new Date()
    let then = new Date(timestamp)

    if (now.getDate() !== then.getDate()) {
      let to = then.getTime()
      then.setDate(then.getDate() - 1)
      let from = then.getTime()

      db.find({ $and: [{ date: { $gt: from } }, { date: { $lte: to } }] }).sort({ description: 1 }).exec(function (err, tasks) {
        if (err) {
          console.log(err)
        }

        commit('setTasks', {
          timestamp: to,
          tasks: tasks
        })
      })
    } else {
      db.find({ date: { $lte: timestamp } }).sort({ description: 1 }).exec(function (err, tasks) {
        if (err) {
          console.log(err)
        }

        commit('setTasks', {
          timestamp: timestamp,
          tasks: tasks
        })
      })
    }
  },

  newTask ({ dispatch }, task) {
    db.insert(task, function (err, newTask) {
      if (err) {
        console.log(err)
      }

      // Set the correct timing to load updated task list
      let time = new Date(newTask.date)
      time.setHours(23)
      dispatch('loadTasks', time.getTime())
    })
  },

  deleteTask ({ dispatch }, taskData) {
    db.remove({ _id: taskData._id }, function (err, numRemoved) {
      if (err) {
        console.log(err)
      }

      // Set the correct timing to load updated task list
      let time = new Date(taskData.date)
      time.setHours(23)
      dispatch('loadTasks', time.getTime())
    })
  }
}

const mutations = {
  setTasks (state, taskListData) {
    state.tasks[taskListData.timestamp] = taskListData.tasks
    // Splice to trigger update
    state.tasks.splice(0, 0)
  }
}

const getters = {
  getTasks (state) {
    return state.tasks
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
