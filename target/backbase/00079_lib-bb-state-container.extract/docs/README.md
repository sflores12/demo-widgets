# lib-bb-state-container


Version: **1.0.28**

Holds a state tree in memory.

By convention, the top-level state is an object or some other key-value collection like a Map,
but technically it can be any type. Still, you should do your best to keep the state
serializable. Don't put anything inside it that you can't easily turn into JSON.

## Table of Contents
- **Exports**<br/>    <a href="#default">default(initialState)</a><br/>
- **Type Definitions**<br/>    <a href="#StateContainer">StateContainer</a><br/>    <a href="#StateContainer#ActionCreator">StateContainer#ActionCreator(reducer)</a><br/>    <a href="#Reducer">Reducer(oldState, payload)</a><br/>    <a href="#ActionDispatcher">ActionDispatcher(payload)</a><br/>    <a href="#StateContainer#SelectorCreator">StateContainer#SelectorCreator(selector)</a><br/>    <a href="#Selector">Selector(state)</a><br/>    <a href="#StateContainer#Subscribe">StateContainer#Subscribe(subscriber)</a><br/>    <a href="#StateContainer#Subscriber">StateContainer#Subscriber(state)</a><br/>    <a href="#StateContainer#GetState">StateContainer#GetState()</a><br/>    <a href="#StateContainer#SetState">StateContainer#SetState(newState)</a><br/>

## Exports


### <a name="default"></a>*default(initialState)*

State container factory method

| Parameter | Type | Description |
| :-- | :-- | :-- |
| initialState | Object (optional) | The initial value to set the state to |

##### Returns

<a href="#StateContainer">StateContainer</a> - **

## Type Definitions


### <a name="StateContainer"></a>*StateContainer*


**Type:** *Object*


| Property | Type | Description |
| :-- | :-- | :-- |
| createAction | <a href="#StateContainer#ActionCreator">StateContainer#ActionCreator</a> | Helper function to create an action to accept the payload and modify the state. When the state is modified, all subscribers will be notified. |
| createSelector | <a href="#StateContainer#SelectorCreator">StateContainer#SelectorCreator</a> | Creates a function that can compute derived data from the state. |
| subscribe | <a href="#StateContainer#Subscribe">StateContainer#Subscribe</a> | Subscribes to state changes |
| getState | <a href="#StateContainer#GetState">StateContainer#GetState</a> | Get the current state |
| setState | <a href="#StateContainer#SetState">StateContainer#SetState</a> | Replace the state object |


### <a name="StateContainer#ActionCreator"></a>*StateContainer#ActionCreator(reducer)*

Helper function to create a new callback that accepts a payload and modifies the
state. When the state is modified, all subscribers will be notified.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| reducer | <a href="#Reducer">Reducer</a> | Function to accept the old state and a payload, and return a new state |

##### Returns

<a href="#ActionDispatcher">ActionDispatcher</a> - *A function that when called, dispatches the action to the associated
reducer function with the given payload and saves the new state. All subscribers to the state
will be notified of the state.*

## Example

```javascript
import createStateContainer from 'lib-bb-state-container';
const myState = createStateContainer({ count: 1});
myState.subscribe(state => { console.log(state.count) });
const add = myState.createAction((oldState, n) => ({ count: oldState.count + n }));
add(2); // logs 3
add(7); // logs 10
```


### <a name="Reducer"></a>*Reducer(oldState, payload)*

Custom callback which accepts a payload and the current (old) state, and should
return the new state based on the payload.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| oldState | Object | The current (old) state |
| payload | <a href="#*">*</a> | Optional payload that can be sent with the <a href="#ActionDispatcher">ActionDispatcher</a> |

##### Returns

Object - *The new state*


### <a name="ActionDispatcher"></a>*ActionDispatcher(payload)*

A function that when called, dispatches the action to the associated reducer
function with the given payload and saves the new state. All subscribers to the state will be
notified of the state
change.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| payload | <a href="#*">*</a> | An optional payload that can be sent to the reducer |

##### Returns

<a href="#void">void</a> - **


### <a name="StateContainer#SelectorCreator"></a>*StateContainer#SelectorCreator(selector)*

Create a function that takes the current state and returns computed derived data.

Selectors are memoized, so the computation is only recalculated when the state changes. This
means state must remain immutable for selectors to work properly.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| selector | <a href="#Selector">Selector</a> | Function to accept the state and compute derived data |

##### Returns

Function - *A function that will call the selector with the current state (memoized)*

## Example

```javascript
import createStateContainer from 'lib-bb-state-container';
const myState = createStateContainer({ items: [1, 2, 3] });
const sum = myState.createSelector(state => state.items.reduce((acc, a) => acc + a, 0));
sum(); // 6
```


### <a name="Selector"></a>*Selector(state)*

A custom function that takes the current state and computes and returns some
derived data.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | The current state |

##### Returns

<a href="#*">*</a> - *Computed data*


### <a name="StateContainer#Subscribe"></a>*StateContainer#Subscribe(subscriber)*

Subscribes to state changes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| subscriber | <a href="#StateContainer#Subscriber">StateContainer#Subscriber</a> | Callback function to call when state changes |

##### Returns

Function - *Unsubscribe function*


### <a name="StateContainer#Subscriber"></a>*StateContainer#Subscriber(state)*

Callback function to call when state changes

| Parameter | Type | Description |
| :-- | :-- | :-- |
| state | Object | The current state |

##### Returns

<a href="#void">void</a> - **


### <a name="StateContainer#GetState"></a>*StateContainer#GetState()*


##### Returns

Object - *The current state*


### <a name="StateContainer#SetState"></a>*StateContainer#SetState(newState)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| newState | Object | The state to set to |

##### Returns

<a href="#void">void</a> - **

---
