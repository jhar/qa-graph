import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import deepFreeze from 'deep-freeze'

// Must be added to end of index.js

describe('Deep Freeze', () => {
  it('will not let me mutate a frozen object', () => {
    function hamSandwich(obj) {
      obj.firebase.user.name = 'ham sandwich'
    }
    expect(() => {
      hamSandwich(maybeMutableState)
    }).toThrow()
  })
})

const objMap = (obj, cb, n = 0, max = Object.keys(obj).length, prev = {}) => {
	const next = { ...prev, [Object.keys(obj)[n]]: cb(obj[Object.keys(obj)[n]]) }
 	return (n < max - 1) ? objMap(obj, cb, n + 1, max, next) : next
}

const objectToMap = { 'five': 5, 'ten': 10, 'fifteen': 15 }
const mappedObject = objMap(objectToMap, val => val * 2)

describe('Object map', () => {
  it('returned a new object', () => {
    expect(mappedObject).toBeInstanceOf(Object)
  })
  it('did not mutate the object it was called on', () => {
    expect(objectToMap).toBe(objectToMap)
  })
  it('applied a callback to all enumerable properties', () => {
    expect(mappedObject)
      .toEqual({ 'five': 10, 'ten': 20, 'fifteen': 30 })
  })
})
