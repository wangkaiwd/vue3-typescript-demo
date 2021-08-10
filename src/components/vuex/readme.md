### Vuex + Typescript

* how to add type for vuex modules
  * utilize `Module` type from `vuex` to specify current module state type and root module state type
  * add optional property for root state type
  * Non-null assertion operator in usage

#### Note

* `actions` and `mutations` `playload` parameter type always `any`?