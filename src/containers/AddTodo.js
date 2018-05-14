import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './../styles/addtodo-styles.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="addtodo-wrapper">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input placeholder="Have to do something?"
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
